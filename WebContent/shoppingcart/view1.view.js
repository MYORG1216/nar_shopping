sap.ui.jsview("shoppingcart.view1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf shoppingcart.view1
	 */
	getControllerName : function() {
		return "shoppingcart.view1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf shoppingcart.view1
	 */
	createContent : function(oController) {
		var oView = this;
		this.oObj = {
				"signedup" :[{"fname":"Narendra","lname":"Valiveti","email":"narendrachdr007@gmail.com","mobile":"9999","password":"9999"},
					         {"fname":"Nani","lname":"Valiveti","email":"narendrachdr007@gmail.com","mobile":"8888","password":"8888"}],
				"signupform" :{"fname":"","lname":"","email":"","mobile":"","password":""},
				"loggedin" :{"fname":"","lname":"","email":"","mobile":"","password":""},
				"loginform" :{"username":"","password":""},
				"profileform" :{"fname":"","lname":"","email":"","mobile":""}
		};
		this.oModel = new sap.ui.model.json.JSONModel(this.oObj);
		this.setModel(this.oModel,"userModel");
		this.menuBtnProfile = new sap.m.MenuItem({
			visible : false,
			text : "Profile",
			press : [oController.profileEvt,oController]
		});
		this.menuBtnLogIn = new sap.m.MenuItem({
			visible : true,
			text : "LogIn",	
			press : [oController.logInEvt,oController]
		});
		this.menuBtnSignUp = new sap.m.MenuItem({
			visible : true,
			text : "SignUp",
			press : [oController.signUpEvt,oController]
		});
		this.menuBtnLogOut = new sap.m.MenuItem({
			visible : false,
			text : "LogOut",
			press : [oController.logOutEvt,oController]
		});
		this.menuBtn = new sap.m.MenuButton({
			icon : "sap-icon://customer",
			text : {
				parts : ["userModel>/loggedin/fname","userModel>/loggedin/lname"],
		        formatter : (fname,lname)=>{
		        	debugger;
//		        	if (fname==""){
//		        		return "User";
//		        	}else{
//		        	return fname+" "+lname;
//		        	}
		        	return fname === "" ? "User": fname+" "+lname;
		        }
			},
			menu : new sap.m.Menu({
				items : [  
					 this.menuBtnProfile,
					 this.menuBtnLogIn,
					 this.menuBtnSignUp,
					 this.menuBtnLogOut
				]
			})
		});
		this.profileForm = new sap.m.List({
			headerText : "Profile",
			visible : false,
			items : [
				new sap.m.StandardListItem({
					title : "Name",
					description : {
						parts : ["userModel>/profileform/fname","userModel>/profileform/lname"],
				        formatter : (fname,lname)=>{
				        	return fname+" "+lname;
				        }
					}
				}),
				new sap.m.StandardListItem({
					title : "Email",
					description : "{userModel>/profileform/email}"
				}),
				new sap.m.StandardListItem({
					title : "Mobile",
					description : "{userModel>/profileform/mobile}"
				}),
			]
		});
		this.logInForm = new sap.ui.layout.form.Form({
			title : "LogIn",			
			visible : false,
			layout : new sap.ui.layout.form.FormLayout({}),
			formContainers : new sap.ui.layout.form.FormContainer({
				formElements : new sap.ui.layout.form.FormElement({
					fields : [
						new sap.m.Input({
							placeholder : "Mobile/Email",
							value : "{userModel>/loginform/username}"
						}),
						new sap.m.Input({
							placeholder : "Password",
							value : "{userModel>/loginform/password}"
						}),
						new sap.m.Button({
							text : "Submit",
							press : [oController.logInSbmtEvt,oController]
						}),
						new sap.m.Button({
							text : "Cancel"
						})
					]
				})
			})
		});
		this.signUpForm = new sap.ui.layout.form.Form({
			title : "SignUp",
			visible : false,
			layout : new sap.ui.layout.form.FormLayout({}),
			formContainers : new sap.ui.layout.form.FormContainer({
				formElements : new sap.ui.layout.form.FormElement({
					fields : [
						new sap.m.Input({
							placeholder : "FirstName",
							value : "{userModel>/signupform/fname}"
						}),
						new sap.m.Input({
							placeholder : "LastName",
							value : "{userModel>/signupform/lname}"
						}),
						new sap.m.Input({
							placeholder : "Email",
							value : "{userModel>/signupform/email}"
						}),
						new sap.m.Input({
							placeholder : "Mobile",
							value : "{userModel>/signupform/mobile}"
						}),
						new sap.m.Input({
							placeholder : "Password",
							value : "{userModel>/signupform/password}"
						}),
						new sap.m.Button({
							text : "Submit",
							press : [oController.signUpSbmtEvt,oController]
						}),
						new sap.m.Button({
							text : "Cancel"
						})
					]
				})
			})
		});
		return new sap.m.Page({
			customHeader : new sap.m.Bar({
				contentMiddle : [ new sap.m.Label({
						text : "My App"
				}) ],
				contentRight : [ new sap.m.Button({
					   icon : "sap-icon://cart"
				}) ]
			}),
			subHeader : new sap.m.Bar({
				contentRight : [
					   this.menuBtn
				]
			}),
			content : [
                new sap.ui.layout.Grid({
                	defaultSpan : "L12 M12 S12",
                	position : sap.ui.layout.GridPosition.Center,
                	width : "30%",
                	content : [
                		this.profileForm,
                		this.logInForm,
                		this.signUpForm
                	]
                })
			]
		});
	}

});