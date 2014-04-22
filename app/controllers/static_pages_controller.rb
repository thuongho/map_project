class StaticPagesController < ApplicationController
  def home
    @map = current_user.maps.build
  end

  def about
  end

  def contact
  end

  def portal
  end
end
