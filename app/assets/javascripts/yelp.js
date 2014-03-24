  // console.log(venueArrary); 
  //       var auth = {
  //       consumer_key: "W_iKkGCGhPWTorzJhkgBCQ",
  //       consumer_secret: "CYVL3M5YmDo8iv5lRPF3SEVMStE",
  //       access_token: "Xa334POkek8_OWm9Sc4syxhq6e9X7RBU",
  //       access_token_secret: "waIC09zvUeiD9GLJtSavrLoA0LU",
  //         serviceProvider: {
  //           signatureMethod: "HMAC-SHA1"
  //         }
  //       };
  //       var terms = eachVenue[0];
  //       var near = yelpLocation;
  //       var accessor = {
  //         consumerSecret: auth.consumerSecret,
  //         tokenSecret: auth.accessTokenSecret
  //       };
  //       parameters = [];
  //       parameters.push(['term', terms]);
  //       parameters.push(['location', near]);
  //       parameters.push(['callback', 'cb']);
  //       parameters.push(['oauth_consumer_key', auth.consumerKey]);
  //       parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
  //       parameters.push(['oauth_token', auth.accessToken]);
  //       parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
  //       var message = {
  //         'action': 'http://api.yelp.com/v2/search',
  //         'method': 'GET',
  //         'parameters': parameters
  //       };
  //       OAuth.setTimestampAndNonce(message);
  //       OAuth.SignatureMethod.sign(message, accessor);
  //       var parameterMap = OAuth.getParameterMap(message.parameters);
  //       parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature);
  //       console.log(parameterMap);
  //       $.ajax({
  //         'url': message.action,
  //         'data': parameterMap,
  //         'cache': true,
  //         'dataType': 'jsonp',
  //         'jsonpCallback': 'cb',
  //         'success': function(data, textStats, XMLHttpRequest) {
  //           console.log(data);
  //         }
  //       });
  //     console.log(eachVenue);
  //     var venueView = new D2Jive.Views.D2JiveLocaleResults();
  //     $('#container').append(venueView.render().el);  