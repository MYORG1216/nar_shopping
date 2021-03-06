sap.ui.controller("routing.shoppingcart.view1", {

        /**
         * Called when a controller is instantiated and its View controls (if available) are already created.
         * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
         * @memberOf routing.shoppingcart.view1
         */
//	onInit: function() {
//
//	},
        view1CrtBtnEvt: function () {
            let oRoute = this.getOwnerComponent().getRouter();
            oRoute.navTo("cart");
        },
        crtNavBtnEvt: function () {
            let oRoute = this.getOwnerComponent().getRouter();
            oRoute.navTo("view1");
        },
        logInSbmtEvt:

            function () {
                let oSampModel = this.getView().getModel("userModel");
                let lForm = oSampModel.getProperty("/loginform");
                let sUser = oSampModel.getProperty("/signedup");
                let lUser = oSampModel.getProperty("/loggedin");
                let pUser = oSampModel.getProperty("/profileform");
                for (let i = 0; i < sUser.length; i++) {
                    if (lForm.password === sUser[i].password && (lForm.username === sUser[i].mobile || sUser[i].email === lForm.username)){
//			lUser.fname=sUser[i].fname;
//			lUser.lname=sUser[i].lname;
//			lUser.email=sUser[i].email;
//			lUser.mobile=sUser[i].mobile;
//			lUser.password=sUser[i].password;   
                        lUser = sUser[i];
                    lForm.username = "";
                    lForm.password = "";
                    pUser.fname = sUser[i].fname;
                    pUser.lname = sUser[i].lname;
                    pUser.email = sUser[i].email;
                    pUser.mobile = sUser[i].mobile;
//			oSampModel.setData(oSampModel.getData());
                    oSampModel.setProperty("/loggedin", lUser);
                    this.getView().logInForm.setVisible(false);
                    this.getView().menuBtnLogIn.setVisible(false);
                    this.getView().menuBtnSignUp.setVisible(false);
                    this.getView().menuBtnLogOut.setVisible(true);
                    this.getView().menuBtnProfile.setVisible(true);
                }
            }
    }

    ,
    signUpSbmtEvt
:

function () {
    let oSampModel = this.getView().getModel("userModel");
    let sUser = oSampModel.getProperty("/signedup");
    let sForm = oSampModel.getProperty("/signupform");
//	sUser.fname=sForm.fname;
//	sUser.lname=sForm.lname;
//	sUser.email=sForm.email;
//	sUser.mobile=sForm.mobile;
//	sUser.password=sForm.password;
    sUser.push(sForm);
}

,
logInEvt: function () {
    this.getView().profileForm.setVisible(false);
    this.getView().signUpForm.setVisible(false);
    this.getView().logInForm.setVisible(true);
}
,
profileEvt: function () {
    this.getView().logInForm.setVisible(false);
    this.getView().signUpForm.setVisible(false);
    this.getView().profileForm.setVisible(true);
}
,
signUpEvt: function () {
    this.getView().logInForm.setVisible(false);
    this.getView().profileForm.setVisible(false);
    this.getView().signUpForm.setVisible(true);
}
,
logOutEvt: function () {
    let oSampModel = this.getView().getModel("userModel");
    let lUser = oSampModel.getProperty("/loggedin");
    lUser.fname = "";
    lUser.lname = "";
    lUser.email = "";
    lUser.mobile = "";
    lUser.password = "";
    oSampModel.setData("userModel>/loggedin", lUser);
    this.getView().menuBtnLogOut.setVisible(false);
    this.getView().menuBtnProfile.setVisible(false);
    this.getView().menuBtnLogIn.setVisible(true);
    this.getView().menuBtnSignUp.setVisible(true);
    this.getView().profileForm.setVisible(false);
    this.getView().signUpForm.setVisible(false);
    this.getView().logInForm.setVisible(true);
}
/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
 * (NOT before the first rendering! onInit() is used for that one!).
 * @memberOf routing.shoppingcart.view1
 */
//	onBeforeRendering: function() {
//
//	},

/**
 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
 * This hook is the same one that SAPUI5 controls get after being rendered.
 * @memberOf routing.shoppingcart.view1
 */
//	onAfterRendering: function() {
//
//	},

/**
 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
 * @memberOf routing.shoppingcart.view1
 */
//	onExit: function() {
//
//	}

})
;