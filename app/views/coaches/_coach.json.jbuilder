json.extract! coach, :id, :name, :email, :encrypted_password, :phone_number, :date_of_birth, :photo, :specialization, :created_at, :updated_at
json.url coach_url(coach, format: :json)
