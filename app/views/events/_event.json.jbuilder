json.extract! event, :id, :category, :location, :date, :description, :coach_name, :photo, :created_at, :updated_at
json.url event_url(event, format: :json)
