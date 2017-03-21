angular.module("customer").
    controller("customerController", ["$scope", "$location", "customerService", "loginService", function ($scope, $location, customerService, loginService) {

        var customerID;
        var getOrdersError = false;
        var getCustmerError = false;
        var customerInfoChanged = false;
        var customerInfoNotChanged = false;

        $scope.$watch(function () { return loginService.getUserId() },
            function (newValue, oldValue) {
                customerID = newValue;
                customerService.getCustmer(newValue).then(function success(response) {
                    var customer = response.data;
                    $scope.firstName = customer.firstName;
                    $scope.lastName = customer.lastName;
                    $scope.email = customer.email;
                    $scope.phone = customer.phone;
                    $scope.address = customer.address;
                    $scope.postalCode = customer.postalCode;
                    $scope.city = customer.city;
                }, function error(response) {
                    getCustmerError = true;
                    console.log(getCustmerError);
                });
            });


        $scope.$watch(function () { return loginService.getUserId() },
            function (newValue, oldValue) {
                customerService.getOrders(newValue).then(function success(response) {
                    customerOrders = response.data;
                    $scope.orders = customerOrders;
                }, function error(response) {
                    getOrdersError = true;
                    console.log(getOrdersError);
                });
            });




        $scope.updateCustomer = function () {
            var updatedCustomer = {

                firstName: $scope.firstName,
                lastName: $scope.lastName,
                email: $scope.email,
                phone: $scope.phone,
                password: $scope.password,
                address: $scope.address,
                postalCode: $scope.postalCode,
                city: $scope.city



            };

            customerService.updateCustomer(customerID, updatedCustomer);
        }.then(function (response) {
            $scope.customerInfoChanged = true;
            $scope.customerInfoNotChanged = false;
        }, function (response) {
            $scope.customerInfoChanged= false;
            $scope.customerInfoNotChanged= true;
        });
        


    }]);
