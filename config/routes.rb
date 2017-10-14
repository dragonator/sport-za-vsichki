Rails.application.routes.draw do
  resources :sport_centers
  resources :events
  resources :coaches
  resources :users
  resources :register
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#not_ready'
end
