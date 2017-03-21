angular.module("newCustomer")
.factory("newCustomerService", ["$http", function($http) {
    
    return {
        createCustomer : function(newCustomer) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer", newCustomer);
        }

    };
    
}]);