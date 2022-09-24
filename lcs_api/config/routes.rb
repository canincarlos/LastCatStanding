Rails.application.routes.draw do
  resources :winners
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :winners, only: [:index, :show, :create, :update, :destroy]
end
