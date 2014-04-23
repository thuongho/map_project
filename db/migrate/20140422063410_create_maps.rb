class CreateMaps < ActiveRecord::Migration
  def change
    create_table :maps do |t|
      t.string :city_name
      t.integer :user_id

      t.timestamps
    end
    add_index :maps, [:user_id, :city_name]
  end
end
