class Api::V1::SessionsController < ApplicationController
    before_action :find_user

    def login
        # @user = User.find_by(email: params[:user][:email])
        if @user && @user.authenticate(params[:user][:password])
            token = encode_token({user_id: @user.id})
            render json: {user: @user, token: token}
        else
            render json: {error: "Invalid email or password"}
        end
    end
    private
    def find_user
        @user = User.find(params[:user_id])
    end

end