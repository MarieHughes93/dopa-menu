class Api::V1::UsersController < ApplicationController
    before_action :find_user, only: [:update, :destroy]
    
    def show
      if @user = User.find_by(id: params[:id])
        render json: @user
      else 
        render json: {error: 'We ran into an error loading this profile. This profile does not exist or you entered the wrong profile address.'}
      end
    end

    def create
    @user = User.create(user_params)
    if @user.valid?
      render json: {user: @user}
    else
      render json: {error: "Invalid email or password"}
    end
  end

    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: {error: 'There was an issue updating your account. Please try again.'}
      end
    end

    def destroy
      @user.destroy
      render json: {userId: @user.id, userToken: @user.token}
    end
      
    private

    def find_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:name, :email, :password,)
    end
end