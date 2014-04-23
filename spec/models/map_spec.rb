require 'spec_helper'

describe Map do

  let(:user) { FactoryGirl.create(:user) }
  before { @map = user.maps.build(city_name: "San Francisco") }

  subject { @map }

  it { should respond_to(:city_name) }
  it { should respond_to(:user_id) }
  it { should respond_to(:user) }
  its(:user) { should eq user }

  it { should be_valid }

  describe "when user_id is not present" do
    before { @map.user_id = nil }
    it { should_not be_valid }
  end

  describe "with blank city name" do
    before { @map.city_name = " " }
    it { should_not be_valid }
  end

  describe "when city name is too long" do
    before { @map.city_name = "a" * 51 }
    it { should_not be_valid }
  end
end
