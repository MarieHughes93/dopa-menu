class ApplicationController < ActionController::API
  
    def scramble_tok(payload)
      JWT.encode(payload, 's3cr3t')
    end
  
    def auth_header
      request.headers['Authorization']
    end
  
    def tokenizer
      if auth_header
        tok = auth_header.split(' ')[1]
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
      render json: { error: 'Please log in' }, status: :unauthorized unless signed_in?
    end
end
