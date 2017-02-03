// ==UserScript==
// @name         IITC plugin: Hide UI
// @version      0.1
// @description  Toggle UI with Alt+H
// @include        https://*.ingress.com/intel*
// @include        http://*.ingress.com/intel*
// @match          https://*.ingress.com/intel*
// @match          http://*.ingress.com/intel*
// @include        https://*.ingress.com/mission/*
// @include        http://*.ingress.com/mission/*
// @match          https://*.ingress.com/mission/*
// @match          http://*.ingress.com/mission/*
// @grant          none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keydown', function(e) {
    // pressed alt+h
    if(e.keyCode === 72 && !e.shiftKey && !e.ctrlKey && e.altKey && !e.metaKey) {
       //$("#chatcontrols,#chat,#chatinput,#sidebartoggle,#scrollwrapper,#updatestatus,#play_button,#log").toggle();
        $("body>:not(#map)").toggle();
        $("#map>").not(".leaflet-map-pane").toggle();
    }
  }, false);
})();