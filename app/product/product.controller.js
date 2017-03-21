angular.module("product").
controller("productController", ["$scope", "productService", "loginService", function($scope, productService, loginService){
    var isLoggedIn;
    $scope.isLoggedIn = false;
    var getProductsError = false;

    productService.getProducts().then(function(response) {
        $scope.products = response.data;
        

        $scope.selectedCategory = function(category) {
            $scope.categorySelected = category.id;
        }
        
    }, function error(response) {
                    getProductsError = true;
                });
   

     $scope.$watch(function() {return loginService.getLoginValue()},
      function(newValue, oldValue) {
       
       
           $scope.isLoggedIn = newValue;
           console.log(isLoggedIn)
       
        
    });

$scope.logOut = function() {
    loginService.doLogOut();
}

}]);

