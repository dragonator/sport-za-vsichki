json.extract! sport_center, :id, :name, :email, :encrypted_password, :location, :description, :photo, :phone_number, :created_at, :updated_at
json.url sport_center_url(sport_center, format: :json)
