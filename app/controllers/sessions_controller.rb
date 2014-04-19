class SessionsController < ApplicationController

  def new
  end

  def create
    # search db by email
    user = User.find_by(email: params[:session][:email].downcase)
    # if email is nil in db, search by username using email
    user ||= User.find_by(username: params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      sign_in user
      redirect_to user
    else
      flash.now[:error] = 'Invalid username/email and password combination'
      render 'new'
    end
  end

  def destroy
    sign_out
    redirect_to root_url
  end

end
