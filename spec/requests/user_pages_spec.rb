require 'spec_helper'

describe "User pages" do
  
  subject { page }

  describe "Create Account page" do
    before { visit signup_path }

    it { should have_title('Create Account') }
    it { should have_content('Create Account') }
  end

  describe "signup" do
    before { visit signup_path }
    let(:submit) { "Create account" }

    describe "with invalid information" do
      it "should not create a user" do
        expect { click_button submit }.not_to change(User, :count)
      end

      describe "after submission" do
        before { click_button submit }
        it { should have_title('Create Account') }
        it { should have_content('error') }
      end
    end

    describe "with valid information" do

      before do
        fill_in "Name", with: "Test User"
        fill_in "Email", with: "user@mexample.com"
        fill_in "Username", with: "testUser123"
        fill_in "Password", with: "foobar"
        fill_in "Confirmation", with: "foobar"
      end

      it "should create a user" do
        expect { click_button submit }.to change(User, :count).by(1)
      end

      describe "after saving the user" do
        before { click_button submit }
        let(:user) { User.find_by(email: 'jdoe@example.com') }
        it { should have_link('Sign out') }
        # it { should have_title(user.username) }
        it { should have_selector('div.alert.alert-success') }
      end
    end
  end

  describe "Profile page" do
    let(:user) { FactoryGirl.create(:user) }
    before { visit user_path(user)}

    it { should have_title(user.username) }
    it { should have_content(user.username) }
    it { should have_content("Search") }
    it { should have_content("Build new city") }
    it { should have_content("Cities under your control") }
  end
end
