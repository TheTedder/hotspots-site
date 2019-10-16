class ChangeRatingBodyToText < ActiveRecord::Migration[5.2]
  def up
    change_column :reviews, :body, :text
  end

  def down
    change_column :reviews, :body, :string
  end
end
