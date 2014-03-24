D2jive::Application.routes.draw do
  root :to => "site#index"

  get "/venues/:location", to: "site#venues", as: 'venues'

end
