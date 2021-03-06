sap.ui.jsview("routing.shoppingcart.sample", {

    /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf routing.shoppingcart.sample
     */
    getControllerName: function () {
        return "routing.shoppingcart.view1";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf routing.shoppingcart.sample
     */
    createContent: function (oController) {
        return new sap.m.Page({
            title: "Title",
            content: []
        });
    }

});