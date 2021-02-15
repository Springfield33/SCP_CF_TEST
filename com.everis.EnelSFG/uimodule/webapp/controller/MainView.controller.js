sap.ui.define([
  "com/everis/EnelSFG/controller/BaseController",
  "sap/m/MessageToast",
  "sap/ui/thirdparty/jquery"
], function(Controller, MessageToast, jQuery) {
  "use strict";

  return Controller.extend("com.everis.EnelSFG.controller.MainView", {

    onInit: function (){

    jQuery.ajax({
      url: "/urlBack/srv/index.xsjs",
      method: "GET"
    }).done(function (response) {
      MessageToast.show(response);
    });

    jQuery.ajax({
			url: "/user-api/currentUser",
			method: "GET",
			timeout: 0
		}).done(function (response) {
			MessageToast.show(response);
    });

    jQuery.ajax({
			url: "/getuserinfo",
			method: "GET",
			timeout: 0,
			headers: {
				"X-CSRF-Token": "Fetch",
			},
			data: "path=test"
		}).done(function (response) {
			MessageToast.show(response);
		});

    }

  });
});