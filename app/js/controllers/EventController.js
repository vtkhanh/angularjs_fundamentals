(function () {
    
    eventsApp.controller('EventController', EventController);

    EventController.$inject = ['$scope', 'eventData', '$anchorScroll', '$routeParams', '$route'];

    function EventController($scope, eventData, $anchorScroll, $routeParams, $route) {
        $scope.redColor = { color: 'red'};                       
        $scope.event = eventData.getEvent($routeParams.id);
        
        $scope.reload = function () {
            $route.reload();
        }
        
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