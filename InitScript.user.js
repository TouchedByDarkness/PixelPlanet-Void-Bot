// ==UserScript==
// @name         PP Void Bot
// @version      0.2
// @description  Make us great again!
// @author       Darkness
// @include      *://pixelplanet.fun/*
// @include      *://fuckyouarkeros.fun/*
// ==/UserScript==

'use strict';

(function(){
    let request = new XMLHttpRequest(),
        url = "";
    request.addEventListener("load", function(){
        if(this.status !== 200) return console.error(`[VB] Response code - ${this.status}`);
        let code = document.createElement("script");
        code.innerHTML = this.responseText;
        document.body.appendChild(code);
    });
    request.addEventListener("error",function(e){
        console.error(`[VB] Code load error`);
        console.error(e);
    });
    request.open("GET",url);
    request.send();
})();
