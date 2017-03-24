angular.module("order")
.factory("orderService", ["$http", function($http) {
    

    return {
        getOrder: function(id) {
             return $http.get("http://nackbutik.azurewebsites.net/api/order/" + id);
            }
    };
}]);

