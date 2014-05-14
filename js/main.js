var systemInfo = chrome.system;

function init() {
    checkSocket();

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.status == "online"){
                console.log(request.status)
            }
            if (request.status == "offline"){
                console.log(request.status)
            }
            
            
        });
}





function checkSocket(){
    var websocketAddress 	= "localhost";
    var websocketPort 		= 9005;

    var socketURL = "ws://" + websocketAddress + ":" + websocketPort + "/";

    // attempt to open the socket connection
    socket = new WebSocket(socketURL); 
    console.log("Attempting to connect: " + socketURL);

    // hook up websocket events //
    socket.onopen = function(){
        console.log("Connected!");
        socket.close();
        getDisplayInfo();
    }

    socket.onerror = function(e){
        console.log("Socket error.");
    }

}

function getDisplayInfo() {
    systemInfo.display.getInfo(function(displays) {            
        for (var i = 0; i < displays.length; i++) {
            if(displays[i].isPrimary == false){
                chrome.app.window.create("dynamic.html", {
                    id: "Oculus",
                    alwaysOnTop: true,
                    bounds: displays[i].bounds,
                    state: "fullscreen"
                });
            }
        }
    });
    //    systemInfo.display.onDisplayChanged.addListener(getDisplayInfo);
}









document.addEventListener('DOMContentLoaded', init);