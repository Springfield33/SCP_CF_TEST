sap.ui.define([
  "com/everis/testenel/controller/BaseController",
"sap/m/MessageToast",
"sap/ui/thirdparty/jquery"
], function(Controller, MessageToast, jQuery) {
  "use strict";

  return Controller.extend("com.everis.testenel.controller.MainView", {

    onInit: function (){

    jQuery.ajax({
          url: "/urlBack/srv/index.xsjs",
          method: "GET"
      }).done(function (response) {
        MessageToast.show(response);
      });

    }

  });
});
