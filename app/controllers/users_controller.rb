class UsersController < ApplicationController
  def show
    @usuario = User.find(params[:id])
  end

  def index
    @amigos = User.all
  end
end
