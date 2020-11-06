class User < ApplicationRecord
    has_secure_password
    validates_presence_of :name, :email
    validates_uniqueness_of :email, on: create
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
end
