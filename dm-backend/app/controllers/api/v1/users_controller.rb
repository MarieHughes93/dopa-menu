class Api::V1::UsersController < ApplicationController
  before_action :find_user, only: [:update, :destroy,:show]
  before_action :authorized, only: [:update, :destroy,:show]
  
  def create
    if User.exists?(email: params[:user][:email])
      render json: {error: true, message: "That email is already in use. Please try another."}
    else
      @user = User.create(user_params)
      if @user.valid?
        render json: {user: @user}
      else
        render json: {error: true, message: "Invalid information. Please check to make sure all fields are filled and you are using a standard email format. example email 'email@email.com' "}
      end
    end
  end
  
  def show
    if @user = User.find_by(id: params[:user][:id])
      render json: {user: @user}
    else 
      render json: {error: true, message: 'We ran into an error loading this profile. Pleease try again.'}
    end
  end

  def update
    if @user.update(user_params)
      render json: {user: @user}
    else
      render json: {error: true, message: 'There was an issue updating your account. Please try again.'}
    end
  end

  def destroy
    if @user.destroy
      render json: {user: @user}
    else
      render json: {error: true, message: 'We ran into an error deleting this profile. Please try again'}
    end
  end
      
  private

  def find_user
    @user = User.find(params[:user][:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end