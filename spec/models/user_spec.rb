require 'spec_helper'

describe User do
  
  # before { @user = User.new(name: "Sam", email: "sam@example.com", username: "samdude",
  #                             password: "foobar", password_confirmation: "foobar") }
  let(:user) { FactoryGirl.create(:user) }
  before { @user = user }

  subject { @user }

  it { should respond_to(:name) }
  it { should respond_to(:email) }
  it { should respond_to(:username) }
  it { should respond_to(:password_digest) }
  it { should respond_to(:password) }
  it { should respond_to(:password_confirmation) }
  it { should respond_to(:remember_token) }
  it { should respond_to(:authenticate) }
  it { should respond_to(:maps) }

  describe "when email is not present" do
    before { @user.email = " " }
    it { should_not be_valid }
  end

  describe "when username is not present" do
    before { @user.username = " " }
    it { should_not be_valid }
  end

  describe "when username is too long" do
    before { @user.username = "a" * 51 }
    it { should_not be_valid }
  end

  describe "when name is too long" do 
    before { @user.name = "a" * 51 }
    it { should_not be_valid }
  end

  describe "when email format is invalid" do
    it "should be invalid" do
      addresses = %w[user@foo,com user_at_foo.org example.user@foo.
                     foo@bar_baz.com foo@bar+baz.com]
      addresses.each do |invalid_address|
        @user.email = invalid_address
        expect(@user).not_to be_valid
      end
    end
  end

  describe "when email format is valid" do
    it "should be valid" do
      addresses = %w[user@foo.COM A_US-ER@f.b.org frst.lst@foo.jp a+b@baz.cn]
      addresses.each do |valid_address|
        @user.email = valid_address
        expect(@user).to be_valid
      end
    end
  end

  describe "when password is not preset" do
    let(:user) { FactoryGirl.create(:user) }
    before { @user.password = @user.password_confirmation = " " }
    it { should_not be_valid }
  end

  describe "when password confirmation does not match" do
    before { @user.password_confirmation = "mismatch" }
    it { should_not be_valid }
  end

  describe "with a password that is too short" do
    before { @user.password = @user.password_confirmation = "a" * 5 }
    it { should be_invalid }
  end

  describe "return value of authenticate method" do
    before { @user.save }
    let(:found_user_by_email) { User.find_by(email: @user.email) }
    let(:found_user_by_username) { User.find_by(username: @user.username) }

    describe "with valid password" do
      it { should eq found_user_by_email.authenticate(@user.password) }
      it { should eq found_user_by_username.authenticate(@user.password) }
    end

    describe "with invalid password" do
      let(:email_with_invalid_password) { found_user_by_email.authenticate("invalid") }
      let(:username_with_invalid_password) { found_user_by_username.authenticate("invalid") }

      it { should_not eq email_with_invalid_password }
      it { should_not eq username_with_invalid_password }
      specify { expect(email_with_invalid_password).to be_false }
      specify { expect(username_with_invalid_password).to be_false }
    end
  end 

  describe "remember token" do
    before { @user.save }
    its(:remember_token) { should_not be_blank }
  end

  describe "maps association" do
    before { @user.save }
    let!(:map) { FactoryGirl.create(:map, user: @user) }

    it "should destroy associated maps" do
      maps = @user.maps.to_a
      @user.destroy
      expect(maps).not_to be_empty
      maps.each do |map|
        expect(Map.where(id: map.id)).to be_empty
      end
    end
  end
end
