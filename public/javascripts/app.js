(function() {
    var ngModule = angular.module('myApp', [
        'ngRoute',
        'myApp.services'
    ]);

    ngModule.controller('HomeController', function($scope, HitService) {
        HitService.count().then(function(data) {
            $scope.hits = data;
        });

        $scope.register = function() {
            HitService.register().then(function(data) {
                $scope.hits = data;
            });
        };
    });

})();
