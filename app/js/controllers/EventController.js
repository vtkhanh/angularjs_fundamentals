(function () {
    
    eventsApp.controller('EventController', EventController);

    EventController.$inject = ['$scope', 'eventData', '$anchorScroll'];

    function EventController($scope, eventData, $anchorScroll) {
        $scope.redColor = { color: 'red'};                
        // eventData.getEvent(2).then(onEventLoaded);
        $scope.event = eventData.getEvent(2);
        
        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }
        
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
        
        $scope.scrollToSession = function () {
            $anchorScroll();
        }
    }

}());