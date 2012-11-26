class ApplicationController < ActionController::Base

  def forem_user
    current_user
  end
  helper_method :forem_user

  protect_from_forgery

  before_filter :authenticate_user!
  before_filter :get_listas

  protected
  def get_listas
    @eventos = Evento.all(:limit => 5)
    @users = User.all(:limit => 5)

  end


end
