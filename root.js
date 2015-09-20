/*this is the controller for the 4.0 site*/

angular.module('root', [])
    .controller("index", ["$scope", function ($scope) {
        $scope.message = "test";
    }]);
