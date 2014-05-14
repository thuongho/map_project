class MapsController < ApplicationController
  before_action :signed_in_user, only: [:destroy]
  before_action :get_current_user

  def show
    # @map = Map.find(params[:id])
    @map = @user.maps.find(params[:id])
  end

  def new
    # @map = current_user.maps.new
    @map = Map.new
  end

  def create
    # @user = current_user if signed_in?
    # @user = current_user
    # @map = current_user.maps.build(map_params)
    # @map = current_user.maps.new(map_params)
    @map = @user.maps.new(map_params)
    if @map.save
      flash[:success] = "#{@map.city_name} created!"
      redirect_to [@user, @map]
    else
      render 'static_pages/city'
    end
  end

  def destroy
  end

  private 

    def get_current_user
      # @user = User.find(params[:id])
      @user = current_user
    end

    # def current_user_id


    def map_params
      params.require(:map).permit(:city_name, :user_id)
    end
end