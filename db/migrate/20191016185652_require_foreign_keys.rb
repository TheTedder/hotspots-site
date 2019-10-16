class RequireForeignKeys < ActiveRecord::Migration[5.2]
  def up
    change_column_null :reviews, :user_id, false
    change_column_null :reviews, :location_id, false
  end

  def down
    change_column_null :reviews, :user_id, true
    change_column_null :reviews, :location_id, true
  end
end
