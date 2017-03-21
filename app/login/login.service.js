angular.module("login")
.factory("loginService", ["$http", "$location", function($http, $location) {
    
    var isLoggedIn = false;
    var user;
    var userId;
    var doLoginError = false;
    return {
        doLogin: function(username, password) {

              var login = {
                email: username,
                password: password
            }
            $http.post("http://nackbutik.azurewebsites.net/api/customer/login", login).then(function(response){
                user = response.data;
                if (user.email == username) {
                    isLoggedIn = true;
                    userId = user.customerId;
                    $location.path("/cart")
                    console.log(isLoggedIn);
                    // console.log(user);
                };
            });


            },
        getLoginValue: function() {
            return isLoggedIn;
        },
        getUserId: function() {
            return userId;
        },
        doLogOut: function() {
            isLoggedIn = false;
        }
    };
}]);
