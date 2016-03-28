myApp.factory("PetService", ["$http", function($http){


    var greeting = function(){
      console.log("Works");
    };

    var data = {};

    var getData = function(){
         $http.get("/pets").then(function(response){
            console.log(response.data);
            data.results = response.data;
            console.log("Here: " , data);
         });

    };

    var postData = function(data){
      console.log(data);
       $http.post("/pets", data).then(function(response){
          console.log(response.data);
          getData();
       });
    };

    return {
      postData: postData,
      getData: getData,
      greeting : greeting,
      data: data
    };
}]);
