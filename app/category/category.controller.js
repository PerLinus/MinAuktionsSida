angular.module("category").
    controller("categoryController", ["$scope", "$routeParams", "categoryService", "productService", function ($scope, $routeParams, categoryService, productService) {
        categoryService.getCategories().then(function (response) {
            $scope.categories = response.data;
        });
     

    }]);