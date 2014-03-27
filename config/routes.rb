D2jive::Application.routes.draw do
  root :to => "site#index"

  get "/venues/", to: "site#venues", as: 'venues'
  get "/venue/", to: "site#venue", as: 'venue'
  get "/event/", to: "site#event", as: 'event'

  get "/about_us", to: "site#about_us", as: 'about_us'
  get "/terms_of_use", to: "site#terms_of_use", as: 'terms'

end
