Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope module: 'api' do
    scope module: 'v1' do
      post "/login", to: "sessions#login"
      post "/signup", to: "users#create"
      resources :users, except: :create, path:'dopa' do
         resources :menu_items,path:'menu'
      end
    end
  end

end