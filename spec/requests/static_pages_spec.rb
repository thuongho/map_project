require 'spec_helper'

describe "Static pages" do

  subject { page }

  describe "Home page" do
    before { visit root_path }
    
    it { should have_title('Map') }
    it { should have_content('Play as Guest') }
    it { should have_content('Log in') }
    it { should have_content('Create an account') }
  end

  describe "About page" do
    before { visit about_path }

    it { should have_title('About') }
  end

  describe "Contact page" do
    before { visit contact_path }

    it { should have_title('Contact') }
  end
end
