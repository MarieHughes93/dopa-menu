class Api::V1::UsersController < ApplicationController
  before_action :authorized, only: [:update, :destroy,:show]
  
  def create
    if User.exists?(email: params[:user][:email])
      render json: {error: true, heading: "Email in use", message: "Please sign up with a new email"}
    else
      @user = User.create(user_params)
      if @user.valid?
        render json: {user: @user}
      else
        render json: {error: true, heading: "Invalid information", message: "Please check to make sure all fields are filled and you are using a standard email format. example email 'email@email.com' "}
      end
    end
  end
  
  def show
    if @user = User.find_by(id: params[:user][:id])
      render json: {user: @user}
    else 
      render json: {error: true, heading: "Opps...", message: 'We ran into an error loading this profile. Pleease try again.'}
    end
  end

  def update
    if @user.update(user_params)
      render json: {user: @user}
    else
      render json: {error: true, heading: "Opps...", message: 'There was an issue updating your account. Please try again.'}
    end
  end

  def destroy
    if @user.destroy
      render json: {user: @user}
    else
      render json: {error: true, heading: "Opps...", message: 'We ran into an error deleting this profile. Please try again'}
    end
  end
      
  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end