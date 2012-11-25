class HomeController < ApplicationController
  def index
    @eventos = Evento.all(:limit => 5)
  end
end
