angular.module("newCustomer").
    controller("newCustomerController", ["$scope", "$location", "newCustomerService", function ($scope, $location, newCustomerService) {

      
        $scope.createCustomer = function() {
                var newCustomer = {

                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    email: $scope.email,
                    phone: $scope.phone,
                    password: $scope.password,
                    address: $scope.address,
                    postalCode: $scope.postalCode,
                    city: $scope.city
                    


               };

               newCustomerService.createCustomer(newCustomer).then(function (response) {
                    var user = response.data;
                    console.log(user);
                   $location.path("/login");
               });
            }
    }]);
        