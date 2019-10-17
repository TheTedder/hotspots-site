Rails.application.routes.draw do
  root to: redirect('/locations')
  get '/locations', to: 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :locations, only: [ :index, :show ]
    end
  end
end
