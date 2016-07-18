/**
 * FileName: app.js
 * 
 * @author Tom Tsiliopoulos
 * @date July 11, 2016
 * 
 * StudentID: 300818557
 * 
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    
    // app entry function
    function init() {
        console.log("App Started");

    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();