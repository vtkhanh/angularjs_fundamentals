(function () {
    eventsApp.directive('eventThumbnail', EventThumbnail);
    
    function EventThumbnail() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/EventThumbnail.html',
            scope: {
                event: '='
            }            
        };
    }
})();