var flashvars = {
      'playbackToken': "GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=",
      'domain': "localhost",
      'listener': 'myObject'    // the global name of the object that will receive callbacks from the SWF
    };

    var params = {
      'allowScriptAccess': 'always'
    };

var myObject = {};
 myObject = function () {
  console.log(arguments);
};
    swfobject.embedSWF('http://www.rdio.com/api/swf/',// the location of the Rdio Playback API SWF
      'apiswf', // the ID of the element that will be replaced with the SWF
      1, 1, '9.0.0', 'expressInstall.swf', flashvars, params, {});