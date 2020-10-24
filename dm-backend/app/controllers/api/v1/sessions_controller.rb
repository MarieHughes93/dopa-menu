class Api::V1::SessionsController < ApplicationController

    def login
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      token = scramble_tok({user_id: @user.id})
      render json: {user: @user.id.to_json, token: token}
    else
      render json: {error: "Invalid email or password"}
    end
  end


    private

    def user_params
        params.require(:user).permit(:email, :password)
      end

end