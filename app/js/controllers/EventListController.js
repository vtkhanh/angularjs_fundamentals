(function () {
    angular
        .module('eventsApp')
        .controller('EventListController', EventListController);
        
    EventListController.$inject = ['$scope', '$route', 'events'];
    
    function EventListController($scope, $route, events) {
        // $scope.events = $route.current.locals.events;  load from $route variable                        
        $scope.events = events;
    }
})();