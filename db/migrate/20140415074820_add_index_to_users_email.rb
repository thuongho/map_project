class AddIndexToUsersEmail < ActiveRecord::Migration
  def up
    add_index :users, :email, unique: true 
    add_index :users, :username, unique: true
  end

  def down
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true 
  end

end
