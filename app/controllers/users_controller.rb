class UsersController < ApplicationController
  before_action :signed_in_user, only: [:edit, :update]
  before_action :correct_user, only: [:edit, :update]
  
  def show
    @user = User.find(params[:id])
    @maps = current_user.maps if signed_in?
  end

  def new
    @user = User.new
  end

  def create
    # @user = User.new(user_params)
    @user = params[:user] ? User.new(user_params) : User.new_guest 

    if @user.save
      current_user.move_to(@user) if current_user && current_user.guest?
      sign_in @user
      flash[:success] = "#{@user.type_name}, welcome to Mapper's World!"
      redirect_to @user
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @user.update_attributes(user_params)
      flash[:success] = "#{@user.username}'s profile has been updated successfully."
      redirect_to @user
    else
      render 'edit'
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :username, :password, :password_confirmation)
    end

    def correct_user
      @user = User.find(params[:id])
      redirect_to(root_url) unless current_user?(@user)
    end
end
