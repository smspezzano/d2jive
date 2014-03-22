D2jive::Application.routes.draw do
  root :to => "site#index"

  get "/venues", to: "site#venues", as: 'venues'

end
