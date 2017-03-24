angular.module("backButton").component("backButtonComponent", {
    templateUrl: 'app/backButton/backButton.template.html',
    controller: ["$scope", function($scope) {

        $scope.back = function () {
            history.back();
        }

    }]
});