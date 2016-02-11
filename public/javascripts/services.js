(function() {
    var ngModule = angular.module('myApp.services', []);

    ngModule.factory('HitService', function($q, $http) {
        return {
            count: function() {
                var d = $q.defer();
                $http.get('/hits').success(function(data, status) {
                    d.resolve(data.hits);
                }).error(function(data, status) {
                    d.reject(data);
                });

                return d.promise;
            },
            register: function() {
                var d = $q.defer();
                $http.post('/hits/hit', {}).success(function(data, status) {
                    d.resolve(data.hits);
                }).error(function(data, status) {
                    d.reject(data);
                });

                return d.promise;
            }
        };
    });
})();
