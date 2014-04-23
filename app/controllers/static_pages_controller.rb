class StaticPagesController < ApplicationController
  def home
    # @map = current_user.maps.build if signed_in?
    render 'portal' if signed_in?
    
  end

  def about
  end

  def contact
  end

  def tutorial
  end

  def portal
  end

  def city
    @map = Map.new
  end
end
