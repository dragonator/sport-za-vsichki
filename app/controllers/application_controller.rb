class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def not_ready
    render html: "This app is not ready yet!"
  end
end
