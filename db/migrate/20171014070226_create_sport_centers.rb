class CreateSportCenters < ActiveRecord::Migration[5.1]
  def change
    create_table :sport_centers do |t|
      t.string :name
      t.string :email
      t.string :encrypted_password
      t.string :location
      t.string :description
      t.string :photo
      t.string :phone_number

      t.timestamps
    end
  end
end
