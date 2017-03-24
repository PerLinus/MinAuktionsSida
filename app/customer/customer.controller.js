angular.module("customer").
    controller("customerController", ["$scope", "$location", "customerService", "loginService", "productService", function ($scope, $location, customerService, loginService, productService) {

        var customerOrders;
        var allProducts;
        var orderValue;
        var linus = [];


        var customerID;
        var getOrdersError = false;
        var getCustmerError = false;





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
                    customerOrders.totalPrice = 0;
                    productService.getProducts().then(function (response) {
                        allProducts = response.data;
                        angular.forEach(customerOrders, function (order) {
                            angular.forEach(order, function (products) {
                                products.orderPrice = 0;
                                angular.forEach(allProducts, function (product) {
                                    angular.forEach(products, function (productInfo) {
                                        if (productInfo.productId == product.id) {
                                            products.orderPrice += (productInfo.quantity * product.price);
                                            customerOrders.totalPrice += (productInfo.quantity * product.price);
                                        }
                                    })
                                })
                            })
                        })
                    })
                    $scope.orders = customerOrders;
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

            customerService.updateCustomer(customerID, updatedCustomer).then(function success(response) {
                $scope.infoChangeSuccess = true;
            }, function error(response) {
                $scope.infoChangeFaild = true;
            });

        }
        $scope.orderClicked = function (id) {
            $location.path("/customer/" + id);
        }

    }]);

