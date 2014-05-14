class User < ActiveRecord::Base
  has_many :maps, dependent: :destroy
  # before_save { self.email = email.downcase }
  before_save :downcase_email
  # before_save { self.username = username.downcase }
  before_save :downcase_username
  before_create :create_remember_token
  
  validates :name, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  # validates_presence_of :email, :username
  validates_presence_of :email, :username, :password_digest, unless: :guest? 

  validates :email, format: { with: VALID_EMAIL_REGEX }, unless: :guest?
                    # uniqueness: { allow_blank: true, case_sensitive: false }
  validates :username, length: { maximum: 50 }
                       # uniqueness: { allow_blank: true, case_sensitive: false }
  validates_uniqueness_of :email, :username, allow_blank: true, case_sensitive: false

  # has_secure_password(validations: false)
  validates :password, length: { minimum: 6 }, unless: :guest?

  validates_confirmation_of :password

  # override has_secure_password to customize validation until Rails 4.
  require 'bcrypt'
  attr_reader :password
  include ActiveModel::SecurePassword::InstanceMethodsOnActivation

  def User.new_remember_token
    SecureRandom.urlsafe_base64
  end

  def User.digest(token)
    Digest::SHA1.hexdigest(token.to_s)
  end

  # For new guests, set the guest boolean to true
  def self.new_guest
    new { |u| u.guest = true }
  end

  # Display Guest or Username
  def type_name
    guest ? "Guest" : username
  end

  # move all the maps that was created under guest to members account
  def move_to(user)
    # what needs to move guest account to real account
    maps.update_all(user_id: user.id)
  end

  private 

    def downcase_email
      self.email = email.downcase unless :guest?
    end

    def downcase_username
      self.username = username.downcase unless :guest?
    end

    def create_remember_token
      self.remember_token = User.digest(User.new_remember_token)
    end

end
