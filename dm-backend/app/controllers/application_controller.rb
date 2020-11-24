class ApplicationController < ActionController::API
  before_action :authorized
  
  def scramble_tok(payload)
    JWT.encode(payload, 's3cr3t')
  end
 
  def tokenizer
    auth = request.headers['Authorization']
    if auth
      tok = auth.split(' ')[1]
      begin
        JWT.decode(tok, 's3cr3t', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end
  
  def current_user
    if tokenizer
      user_id = tokenizer[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end
  
  def signed_in?
    !!current_user
  end
  
  def authorized
    render json: {user: nil, auth: false, error: true, heading: "Unauthorized", message: 'You must be logged in to see that information.' } unless signed_in?
  end
end
