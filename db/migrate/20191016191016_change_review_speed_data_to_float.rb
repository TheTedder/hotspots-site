class ChangeReviewSpeedDataToFloat < ActiveRecord::Migration[5.2]
  def up
    change_column :reviews, :speed_data, :float
  end

  def down
    change_column :reviews, :speed_data, :integer
  end
end
