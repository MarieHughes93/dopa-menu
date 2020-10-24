class CreateMenuItems < ActiveRecord::Migration[6.0]
  def change
    create_table :menu_items do |t|
      t.string :title
      t.string :category
      t.string :description
      t.belongs_to :user, foreign_key: {on_delete: :cascade}

      t.timestamps
    end
  end
end
