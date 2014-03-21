D2jive::Application.routes.draw do
  root :to => "site#index"
  resources :venues, :except => [:edit, :new]
end
