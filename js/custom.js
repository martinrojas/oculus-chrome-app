(function($) {
    'use strict';

    /*
	Smooth scroll
	=========================== */
    $('ul.navbar-nav li a, .btn-scroll').smoothScroll();

    /*
	Bounce animated
	=========================== */	
    $(".e_bounce").hover(
        function () {
            $(this).addClass("animated bounce");
        },
        function () {
            $(this).removeClass("animated bounce");
        }
    );

    /* Client logo hover
	=========================== */	
    $(".logo-hover").css({'opacity':'0','filter':'alpha(opacity=0)'});	
    $('.client-link').hover(function(){
        $(this).find('.logo-hover').stop().fadeTo(900, 1);
        $(this).find('.client-logo').stop().fadeTo(900, 0);
    }, function() {
        $(this).find('.logo-hover').stop().fadeTo(900, 0);
        $(this).find('.client-logo').stop().fadeTo(900, 1);
    });	

    /*
	cbpScroller
	=========================== */		
    new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );	

    /*
    Check for Oculus Bridge
    =========================== */
    checkSocket();

    /*
    Click handler for experience loaded
    ======================================= */
    $( '.experience' ).on('click' , function () {
        getDisplayInfo($(this).data("type"));
    });

    /*
    Chrome messaging system
    ============================ */
    
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.status == "online"){
                console.log(request.status)
            }
            if (request.status == "offline"){
                console.log(request.status)
            }
        });

})(jQuery);




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
        $( "#connected" ).removeClass().addClass( "icon-exchange bg-success" );
        $( '#oculus' ).toggle();
    }

    socket.onerror = function(e){
        console.log("Socket error.");
        $( "#connected" ).removeClass().addClass( "icon-remove bg-danger" );

    }

}

function getDisplayInfo(expName) {
    var systemInfo = chrome.system;
    systemInfo.display.getInfo(function(displays) {            
        for (var i = 0; i < displays.length; i++) {
            if(displays[i].isPrimary == true){
                if(expName == "holodeck"){
                    chrome.app.window.create("oculus.html", {

                        alwaysOnTop: true,
                        bounds: displays[i].bounds
                    });
                } else {
                    chrome.app.window.create("dynamic.html", {

                        alwaysOnTop: true,
                        bounds: displays[i].bounds
                    });
                }
            }
        }
    });
    //    systemInfo.display.onDisplayChanged.addListener(getDisplayInfo);
}