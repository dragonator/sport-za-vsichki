json.extract! user, :id, :name, :email, :encrypted_password, :interests, :phone_number, :date_of_birth, :photo, :created_at, :updated_at
json.url user_url(user, format: :json)
