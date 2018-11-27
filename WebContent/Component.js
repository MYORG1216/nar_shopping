//sap.ui.define("routing.Component");
sap.ui.core.UIComponent.extend("routing.Component", {
    metadata: {
        "rootView": {
            "viewName": "routing.shoppingcart.app",
            "type": "JS"
        },
        "routing": {
            "config": {
                "routerClass": "sap.m.routing.Router",
                "viewType": "JS",
                "viewPath": "routing.shoppingcart",
                "controlId": "rootView",
                "controlAggregation": "pages",
                "async": true
            },
            "routes": [
                {
                    "pattern": "",
                    "name": "view1",
                    "target": "view1Target"
                },
                {
                    "pattern": "sample",
                    "name": "sample",
                    "target": "sampleTarget"
                },
                {
                    "pattern": "cart",
                    "name": "cart",
                    "target": "cartTarget"
                }
            ],
            "targets": {
                "view1Target": {
                    "viewName": "view1"
                },
                "sampleTarget": {
                    "viewName": "sample"
                },
                "cartTarget": {
                    "viewName": "cart"
                }
            }
        }
    },
    init: function () {
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
        this.getRouter().initialize();
    }
});