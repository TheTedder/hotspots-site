Rails.application.routes.draw do
  root 'homes#index'
  get '/locations', to: 'homes#index'
<<<<<<< HEAD
  get '/locations/:id', to: 'homes#index'
  get '/locations/new', to: 'homes#index'
=======
  get '/locations/new', to: 'homes#index'
  get '/locations/:id', to: 'homes#index'
>>>>>>> c5747f215029ae63d78db21ddb6d58765fd57448
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :locations, only: [ :index, :show ]
    end
  end
end
