(function () {
    eventsApp.factory('myCache', MyCache);
    MyCache.$inject = ['$cacheFactory'];

    function MyCache($cacheFactory) {
        return $cacheFactory('myCache', {capacity: 3});
    }
} ());