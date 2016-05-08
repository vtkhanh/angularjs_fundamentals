(function () {
    eventsApp.controller('CookieStoreSampleController', CookieStoreSampleController);
    CookieStoreSampleController.$inject = ['$scope', '$cookieStore', '$compile', '$log'];
    
    function CookieStoreSampleController($scope, $cookieStore, $compile, $log) {
        $scope.event = { id: 1, name: 'new event'};
        
        $scope.saveEventToCookie = function (event) {
            $cookieStore.put('event', event);
            $log.info('Event is saved!');
            
        };
        
        $scope.getEventFromCookie = function () {
            let event = $cookieStore.get('event');
            if (event) {
                appendToElement(event, angular.element('#appendHere'));
            }
        }
        
        $scope.removeEventCookie = function () {
            $cookieStore.remove('event');
            $log.warn('Event is removed');           
        }
        
        function appendToElement(event, element) {
            let markup = `<h2 class="col-sm-2">Id: ${event.id}</h2><h2 class="col-sm-5">Name: ${event.name}</h2>`;
            $compile(markup)($scope).appendTo(element);
        }
    }
})();