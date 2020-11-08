class Api::V1::SessionsController < ApplicationController
  before_action :authorized, only: [:session_auth]

  def login
    @user = User.find_by(email: params[:user][:email])
    if @user
      if @user.authenticate(params[:user][:password])
        token = scramble_tok({user_id: @user.id})
        render json: {token: token,  user: @user , heading: "Welcome", message: 'Successful Login'}
      else
        render json: {error: true, heading: "Invalid Info", message:  "The password you gave is incorrect. Please try again."}
      end
    else
      render json: {error: true, heading: "Invalid Info", message:  "There is no account registered with that email. Please either try a different email or signup."}
    end
  end
  



  def session_auth
    render json: {user: @user, heading: "Welcome Back!", message:"You were auto signed back in."}
  end

end