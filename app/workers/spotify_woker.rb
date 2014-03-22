Class SpotifyWorker
  include Sidekiq::Worker
  require 'sidekiq'

  def perform(artistId)

  end
end