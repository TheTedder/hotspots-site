class CreateReviewsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.string :body
      t.integer :speed_data

      t.belongs_to :user
      t.belongs_to :location

      t.timestamps
    end
  end
end
