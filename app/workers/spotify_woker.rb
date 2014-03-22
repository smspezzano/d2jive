Class SpotifyWorker
  include Sidekiq::Worker
  require 'sidekiq'

  def perform(artistName)
    
  end
end