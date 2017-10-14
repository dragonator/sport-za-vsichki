class SportCenter < ApplicationRecord
  has_many :events, required: false
end
