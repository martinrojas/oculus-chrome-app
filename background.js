/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 800;
  var height = 300;

  chrome.app.window.create('index.html', {
    id: "oculusExpID",
    bounds: {
      width: width,
      height: height,
      left: 0,
      top: 0
    }
  });
});