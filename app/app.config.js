angular.module("app")
.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/product/product.template.html",
        controller: "productController"
    })
    .when("/cart", {
        templateUrl: "app/cart/cart.template.html",
        controller: "cartController"
    })
    .when("/login", {
        templateUrl: "app/login/login.template.html",
        controller: "loginController"
    })
    .when("/newCustomer", {
        templateUrl: "app/newCustomer/newCustomer.template.html",
        controller: "newCustomerController"
    })
    .when("/customer", {
        templateUrl: "app/customer/customer.template.html",
        controller: "customerController"
    })
    .otherwise("/");
    $locationProvider.html5Mode(true);
}]);