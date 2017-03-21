angular.module("app").
controller("appController", ["$scope", "$routeParams", "loginService", function($scope, $routeParams, loginService){
    //$cookies.put("LoggedIn", false);
    //$scope.data = loginService.user;
    //console.log(data);
    //$scope.isLoggedIn = true;
    // $scope.mumsmums = $cookies.get(LoggedIn);

    // $scope.$watch("mumsmums", function () {
    //     return $cookies.get(LoggedIn);
    // },
    // function (oldValue, newValue) {
    //     if(newValue !== oldValue) {
    //         $scope.mumsmums = $cookies.get(LoggedIn);
    //         console.log(mumsmums)
    //     }
    // }
    // });

    

}]);