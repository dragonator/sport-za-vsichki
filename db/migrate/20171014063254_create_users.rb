class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :encrypted_password
      t.string :interests
      t.string :phone_number
      t.datetime :date_of_birth
      t.string :photo

      t.timestamps
    end
  end
end
