(function(){
    eventsApp.controller('CacheSampleController', CacheSampleController);
    CacheSampleController.$inject = ['$scope', 'myCache'];
    
    function CacheSampleController($scope, myCache) {
        $scope.addToCache = function (key, value) {
            return myCache.put(key, value);
        }
        
        $scope.readFromCache = function (key) {
            return myCache.get(key);
        }
        
        $scope.getCacheStats = function () {
            return myCache.info();
        }
    }
}());