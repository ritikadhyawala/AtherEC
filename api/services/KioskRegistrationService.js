/**
 * Created by Ritika.Dhyawala on 5/25/2016.
 */

module.exports = {

  registerNewUser : function( user, error, result){

    DataConnectionService.postJSONData("/user/create/" + user.toString(),function(err){
        error(err);
    }, function (data){
      if(data == user){
        //return "Successfuuly added the user";
        result(data);
      }
    }
    );
  },

  deregisterUser : function () {

  },

  isUserExisting : function(path, err, result){

      DataConnectionService.getJSONData(path, function(error){
        err(error);
      }, function(data){
        result(data);
      });
        },

};
