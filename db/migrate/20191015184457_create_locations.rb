class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.belongs_to :user, null: false
      t.integer :price
      t.boolean :password_protected

      t.timestamps
    end
  end
end
