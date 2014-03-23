Class SpotifyWorker
  include Sidekiq::Worker
  require 'sidekiq'

  def perform(artistName)
    url = "http://ws.spotify.com/search/1/track.json?q="
    artistName.replace(/\s+/g, '%20')
    searchUrl = url + artistName
    response = Typhoeus.get(searchUrl)
    tackArray = []
    response[tracks].first(10).each do |track|
      grabbedTrack = track.href.slice(14..track.href.length)
      tackArray.push(grabbedTrack)
    end
    return tackArray
  end
end