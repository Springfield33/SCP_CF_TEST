sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/userui/model/models"],function(e,i,t){"use strict";return e.extend("com.userui.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});