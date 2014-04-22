class StaticPagesController < ApplicationController
  def home
    @map = current_user.maps.build if signed_in?
  end

  def about
  end

  def contact
  end

  def portal
  end
end
