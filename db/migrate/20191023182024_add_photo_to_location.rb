class AddPhotoToLocation < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :photo_ref, :string
  end
end
