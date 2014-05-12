var systemInfo = chrome.system;

function showBounds(bounds) {
    return bounds.left + ", " + bounds.top + ", " +
        bounds.width + ", " + bounds.height;
}

function showInsets(bounds) {
    return bounds.left + ", " + bounds.top + ", " +
        bounds.right + ", " + bounds.bottom;
}

function showDisplayInfo(display) {
    table = "<tr><td>" + display.id + "</td>" +
        "<td>" + display.name + "</td>" +
        "<td>" + display.mirroringSourceId + "</td>" +
        "<td>" + display.isPrimary + "</td>" +
        "<td>" + display.isInternal + "</td>" +
        "<td>" + display.isEnabled + "</td>" +
        "<td>" + display.dpiX + "</td>" +
        "<td>" + display.dpiY + "</td>" +
        "<td>" + display.rotation + "</td>" +
        "<td>" + showBounds(display.bounds) + "</td>" +
        "<td>" + showInsets(display.overscan) + "</td>" +
        "<td>" + showBounds(display.workArea) + "</td>" +
        "</tr>\n";
    return table;
}

function init() {
    // Get display information.
    (function getDisplayInfo() {
        systemInfo.display.getInfo(function(displays) {
            var table = "<table width=70% border=\"1\">\n" +
                "<tr><td><b>ID</b></td>" +
                "<td><b>Name</b></td>" +
                "<td><b>Mirroring Source Id</b></td>" +
                "<td><b>Is Primary</b></td>" +
                "<td><b>Is Internal</b></td>" +
                "<td><b>Is Enabled</b></td>" +
                "<td><b>DPI X</b></td>" +
                "<td><b>DPI Y</b></td>" +
                "<td><b>Rotation</b></td>" +
                "<td><b>Bounds</b></td>" +
                "<td><b>Overscan</b></td>" +
                "<td><b>Work Area</b></td>" +
                "</tr>\n";
            for (var i = 0; i < displays.length; i++) {
                if(displays[i].isPrimary == false){
                    chrome.app.window.create("oculus.html", {
                        alwaysOnTop: true,
                        bounds: displays[i].bounds,
                        state: "fullscreen"
                    });
                }

                //                table += showDisplayInfo(displays[i]);
            }

            table += "</table>\n";
            //      var div = document.getElementById("display-list");
            //      div.innerHTML = table;
        });

        systemInfo.display.onDisplayChanged.addListener(getDisplayInfo);
    })();

}

document.addEventListener('DOMContentLoaded', init);