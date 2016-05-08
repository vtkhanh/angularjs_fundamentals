(function () {
    eventsApp.controller('EventListController', EventListController);
    EventListController.$inject = ['$scope', '$location', 'eventData'];
    
    function EventListController($scope, $location, eventData) {
        $scope.events = eventData.getAllEvents();    
    }
})();