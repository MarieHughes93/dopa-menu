class Api::V1::SessionsController < ApplicationController
  before_action :authorized, only: [:session_check]
  
  def login
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      token = scramble_tok({user_id: @user.id})
      render json: {token: token}
    else
      render json: {error: true, message:  "Invalid email or password"}
    end
  end
  
  def session_auth
    token = scramble_tok({user_id: @user.id})
    render json: {token: token}
  end
  
  private
  
  def user_params
    params.require(:user).permit(:email, :password)
  end

end