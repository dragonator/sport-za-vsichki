class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :category
      t.string :location
      t.datetime :date
      t.string :description
      t.string :coach_name
      t.string :photo

      t.timestamps
    end
  end
end
