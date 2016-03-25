myApp.factory("PetService", ["$http", function($http){
    var greeting = function(){
      console.log("Works");
    };

    var getData = function(){
       $http.get("/pets").then(function(response){
          console.log(response.data);
       });
    };

    var postData = function(data){
       $http.post("/pets", data).then(function(response){
          console.log(response.data);
       });
    };

    return {
      postData: postData,
      getData: getData,
      greeting : greeting
    };
}]);
