Rails.application.routes.draw do
  # resources :items
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  root 'items#app'
  get '/items', to: 'items#index'
  post '/items', to: 'items#create'
end
