Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope module: 'api' do
    scope module: 'v1' do
      post "/login", to: "sessions#login"
      post "/register", to: "users#create"
      resources :users, except: :create do
         resources :menu_items,path:'menu'
      end
    end
  end

end