require 'spec_helper'

describe "User page" do
  
  subject { page }

  describe "Create Account page" do
    before { visit signup_path }

    it { should have_title('Create Account') }
    it { should have_content('Create Account') }
  end
end
