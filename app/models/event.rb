class Event < ApplicationRecord
  belongs_to :coach, required: false
  belongs_to :sport_centre, required: false
end
