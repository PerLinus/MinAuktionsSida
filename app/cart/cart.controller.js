var cart = [];
var totaltPrice = 0;

angular.module("cart").
    controller("cartController", ["$scope", "$routeParams", "$rootScope", "$location", "categoryService", "productService", "loginService", "cartService",
        function ($scope, $routeParams, $rootScope, $location, categoryService, productService, loginService, cartService) {


            $rootScope.productCart = cart;
            $rootScope.totalKostnad = totaltPrice;
            var product;
            var isLoggedIn;
            var UserId;
            $scope.isLoggedIn = false;
            var orderSuccess = false;
            $scope.orderSuccess;


            $scope.$watch(function () { return loginService.getLoginValue() },
                function (newValue, oldValue) {


                    $scope.isLoggedIn = newValue;



                });

            $scope.$watch(function () { return loginService.getUserId() },
                function (newValue, oldValue) {


                    UserId = newValue;



                });

            $scope.addToCart = function (product) {
                var check = false;

                angular.forEach(cart, function (cartProduct) {
                    if (cartProduct.id == product.id) {
                        cartProduct.quantity += 1;
                        check = true;
                    }

                })

                if (!check) {
                    product.quantity = 1;
                    cart.push(product);

                }
            };


            $scope.removeFromCart = function (index) {
                $scope.productCart.splice(index, 1);

            };

            $scope.totaltPrice = function () {
                angular.forEach(cart, function (cartProduct) {
                    totaltPrice = totaltPrice + (cartProduct.price * cartProduct.quantity);

                })
            };

            $scope.order = function () {


                var tempProducts = [];
                angular.forEach(cart, function (cartProduct) {
                    tempProducts.push({ productId: cartProduct.id, quantity: cartProduct.quantity })
                })
                var order = {
                    customerId: UserId,
                    products: tempProducts
                }
                cartService.sendOrder(order).then(function success(response) {
                    $scope.orderSuccess = true;
                }, function error(response) {
                    orderSuccess = false;
                });

            }

        }])

