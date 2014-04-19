class AddRememberTokenToUsers < ActiveRecord::Migration
  def up
    add_column :users, :remember_token, :string
    add_index :users, :remember_token
  end

  def down
    add_index :users, :remember_token
    add_column :users, :remember_token, :string
  end
end
