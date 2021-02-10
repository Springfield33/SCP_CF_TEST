sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.userui.controller.Home", {
		onInit: function () {

		},
		
		onAfterRendering: function () {
			
			var oModel = new sap.ui.model.json.JSONModel();
			// this.getView().setModel(oModel, "menuModel");
			
			var g = this;
			$.ajax({
				url: "/"
			}).done(function (data, status, jqxhr) {
				console.log(data);
				var user = "Welcome " + data;
				oModel.setProperty("/user",user);
				g.getView().setModel(oModel, "menuModel");
			});

		}
	});
});