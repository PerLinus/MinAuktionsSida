angular.module("order").
    controller("orderController", ["$scope", "$routeParams", "orderService", "productService", function ($scope, $routeParams, orderService, productService) {
        var orders = [];
        var totalOrderPrice = 0;
        
        orderService.getOrder($routeParams.orderId).then(function (response) {
            var order = response.data;
               $scope.orderId = order.id; 
               $scope.orderDate = order.dateTime;
            productService.getProducts().then(function (response) {
                var allProducts = response.data;
                    angular.forEach(order, function(products) {
                        angular.forEach(products, function(product) {
                            angular.forEach(allProducts, function(allProduct) {
                                if(product.productId == allProduct.id) {
                                    totalOrderPrice += allProduct.price * product.quantity;
                                var orderProduct = {
                                    name : allProduct.name,
                                    price : allProduct.price,
                                    quantity : product.quantity
                                }
                                orders.push(orderProduct);
                                }
                                

                            })
                            
                                
                        })
                    })
                    
                    $scope.orderCost = totalOrderPrice;
                    $scope.orders = orders;
            })
        })







    }]);
