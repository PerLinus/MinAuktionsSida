angular.module("login").
    controller("loginController", ["$scope", "$cookies", "loginService", function ($scope, $cookies, loginService) {

        var isLoggedIn = false;
        var LoggedIn = false;
        
        $scope.doLogin = function (username, password){
            loginService.doLogin(username,password);
        };



    }]);
