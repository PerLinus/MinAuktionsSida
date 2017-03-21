angular.module("customer")
.factory("customerService", ["$http", function($http) {
    
    return {
       getCustmer: function(id) {
             return $http.get("http://nackbutik.azurewebsites.net/api/customer/" + id);
       },
       updateCustomer: function(id, updatedCustomer) {
            return $http.put("http://nackbutik.azurewebsites.net/api/customer/" + id, updatedCustomer);
       },
       getOrders: function(id) {
           return $http.get("http://nackbutik.azurewebsites.net/api/order?customerid=" + id);
       }
    };
    
}]);