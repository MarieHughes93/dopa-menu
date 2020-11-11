class Api::V1::UsersController < ApplicationController
  before_action :authorized, only: [:update, :destroy,:show]
  
  def create
    if User.exists?(email: params[:user][:email])
      render json: {user: nil, auth: nil, error: true, heading: "Email in use", message: "Please sign up with a new email"}
    else
      @user = User.create(user_params)
      if @user.valid?
        render json: {user: @user, error: false, heading: "Please sign in.", message: "SignUp was successfull."}
      else
        render json: {user: nil, auth: nil, error: true, heading: "Invalid information", message: "Please check to make sure all fields are filled and you are using a standard email format. example email 'email@email.com' "}
      end
    end
  end
  
  def show
    if @user = User.find_by(id: params[:id])
      render json: {user: @user, auth: true, error: false, heading: "Fetch Complete", message: 'user retrieved'}
    else 
      render json: {user: nil, auth: true, error: true, heading: "Opps...", message: 'We ran into an error loading this profile. Pleease try again.'}
    end
  end

  def update
    
    if @user.update(user_params)
      render json: {user: @user, auth: true, error: false, heading: "Updated!", message: "Your account information has been updated!"}
    else
      byebug
      render json: {user: @user, auth: true, error: true, heading: "Opps...", message: 'There was an issue updating your account. Please try again.'}
    end
  end

  def destroy
    if @user.destroy
      render json: {user: nil, auth: false, error: false, heading: "Account Deleted", message: "We are sad to see you go but feel free to sign up again at any time."}
    else
      render json: {user: @user, auth: true, error: true, heading: "Opps...", message: 'We ran into an error deleting this profile. Please try again'}
    end
  end
      
  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end