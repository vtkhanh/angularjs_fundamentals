(function () {
    eventsApp.controller('EventListController', EventListController);
    EventListController.$inject = ['$scope', '$location', 'eventData', '$route'];
    
    function EventListController($scope, $location, eventData, $route) {
        // $scope.events = eventData.getAllEvents();
        $scope.events = $route.current.locals.events;        
    }
})();