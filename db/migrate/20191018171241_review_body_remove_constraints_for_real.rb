class ReviewBodyRemoveConstraintsForReal < ActiveRecord::Migration[5.2]
  def up
    change_column_null :reviews, :body, true
    change_column_default :reviews, :body, nil
  end

  def down
    change_column_null :reviews, :body, false
    change_column_default :reviews, :body, ''
  end
end
