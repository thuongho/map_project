class MapsController < ApplicationController
  before_action :signed_in_user, only: [:create, :destroy]

  def show
  end

  def create
    @user = current_user if signed_in?
    @map = current_user.maps.build(map_params)
    if @map.save
      flash[:success] = "#{@map.city_name} created!"
      redirect_to @user
    else
      render 'static_pages/city'
    end
  end

  def destroy
  end

  private 

    def map_params
      params.require(:map).permit(:city_name)
    end
end