(function () {
    eventsApp.directive('upvote', Upvote);
    
    function Upvote() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/Upvote.html',
            scope: {
                upvote: '&',
                downvote: '&',
                count: '='
            }                        
        };
    }
})();