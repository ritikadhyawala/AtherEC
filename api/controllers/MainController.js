/*module.exports = {

 isUserExisting : function(req, res){
 console.log("The user has clicked);
 //               var io = require('sails.io.js')( require('socket.io-client') );
 // io.sails.url = 'http://54.254.140.128:1337';
 //   io.socket.on('connect', function(){
 //   console.log("Socket connected");
 //   });
 return res.send("Hi there!");
 },
 };*/

/**
 * MainController
 *
 * @module      :: Controller
 * @description  :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  isUserExisting: function (req, res) {
    console.log("The user has clicked");
    KioskRegistrationService.isUserExisting("/user?where={\"email\":\"" + req.param('email') + "\"}",
     function(error){

    }, function(data){
      res.send("User Logged in");
    });
  },

registerNewUser : function( req, res){
// console.log("Params " + JSON.stringify(req.body).toString());
   
    DataConnectionService.postJSONData("/user/create?" + "f_name=" + req.param("f_name") + "&l_name=" +
     req.param("l_name")+ "&email="+ req.param("email")+ "&password="+ req.param("password")+
       "&contact_no="+ req.param("contact_no")+ "&address="+ req.param("address") ,function(err){
        error(err);
    }, function (data){
      res.view("home");
    }
    );
  },

  getScheduledUser : function( req, res){
// console.log("Params " + JSON.stringify(req.body).toString());
   
    DataConnectionService.getJSONData("/user" ,function(err){
        error(err);
    }, function (data){
      var obj = JSON.parse(data);
      res.view("home", {users : obj});
    }
    );
  },

  setUserPattern : function(req, res){

    // var user = JSON.parse(req.param("user",null)).user;
    // console.log("The request is : " + JSON.stringify(user));
    // console.log("User : " + req.param("user") );
    res.view("setUserPattern",{name :req.param("name"), "email" : req.param("email") } );

  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to MainController)
   */
  _config: {}


};
