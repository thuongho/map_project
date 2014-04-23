class Map < ActiveRecord::Base
  belongs_to :user
  validates :user_id, presence: true
  validates :city_name, presence: true, length: { maximum: 50 }

end
