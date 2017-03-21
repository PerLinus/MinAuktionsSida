angular.module("cart")
.factory("cartService", ["$http", function($http) {
    
return {
        
        sendOrder: function(order) {
            return $http.post("http://nackbutik.azurewebsites.net/api/order", order);
        }

    };
    



}]);