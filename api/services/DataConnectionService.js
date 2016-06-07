/**
 * Created by Ritika.Dhyawala on 5/25/2016.
 */
var options= {
    host: "52.77.176.123",
    path: "",
    method: 'GET'
  };

  var http= require('http');

module.exports = {
 
  
  getJSONData: function (path, error, data) {

    options.path = path;
    options.method = 'GET';
    getDataFromWebService(options, function(err){
      error(err);
    },
      function(res){
        data(res);
      });
  },

  putJSONData: function (path, error, data) {

    options.path = path;
    options.method = 'PUT';
    getDataFromWebService(options, function(err){
        error(err);
      },
      function(res){
        data(res);
      });
  },

  postJSONData: function (path, error, data) {

    options.path = path;
    options.method = 'POST';
    getDataFromWebService(options, function(err){
        error(err);
      },
      function(res){
        data(res);
      });
  }
};

function getDataFromWebService(options, err, data) {
  var webservice_data = "";

  var webservice_request = http.request(options, function (webservice_response) {

    webservice_response.on('error', function (e) {
      console.log("Error is " + e.message);
      err(e);
    });
    webservice_response.on('data', function (chunk) {
      webservice_data = webservice_data + chunk;
      console.log("The chunk is " + webservice_data);
    });
    webservice_response.on('end', function () {
      console.log("Response has ended");
      data(webservice_data);
    });
  }).end();
}
