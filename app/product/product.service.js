angular.module("product")
.factory("productService", ["$http", function($http) {
    

    return {
        getProducts: function() {
             return $http.get("http://nackbutik.azurewebsites.net/api/product");
            },
        getProduct: function(id) {
            return $http.get("http://nackbutik.azurewebsites.net/api/product/" + id);
        }
    };
}]);

