angular.module("customer").
    controller("customerController", ["$scope", "$location", "customerService", "loginService", "productService", function ($scope, $location, customerService, loginService, productService) {

        var customerID;
        var getOrdersError = false;
        var getCustmerError = false;
        $scope.totalPrice = 0;

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
                });
            });


        $scope.$watch(function () { return loginService.getUserId() },
            function (newValue, oldValue) {
                customerService.getOrders(newValue).then(function success(response) {
                    customerOrders = response.data;
                    $scope.orders = customerOrders;
                    angular.forEach(customerOrders, function(order) {
                        console.log(order);
                        var arrayOfProducts = order.products;
                        angular.forEach(arrayOfProducts, function(product) {
                            productService.getProduct(product.productId).then(function(response) {
                                var productPrice = response.data;
                                $scope.totalPrice += productPrice.price;
                            })
                        })
                        
                    })
                }, function error(response) {
                    getOrdersError = true;
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
        };


    }]);
