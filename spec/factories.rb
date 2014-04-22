FactoryGirl.define do
  factory :user do
    name "John Doe"
    email "jdoe@example.com"
    username "jdoe123"
    password "foobar"
    password_confirmation "foobar"
  end

  factory :map do
    city_name "San Francisco"
    user
  end
end