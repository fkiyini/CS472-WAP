"use strict"

$(function () {
    // do stuff with the DOM

    /* Listen for submit on entire form */
    $("#loginForm").on( "submit",
        function (event) {
            event.preventDefault();
            console.log("Email: " + $('#exampleInputEmail1').val());
            console.log("Password: " + $('#exampleInputPassword1').val());
            console.log("Website: " + $('#exampleInputWebsite').val());
        });

 });






