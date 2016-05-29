var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute']);

eventsApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {        
    $routeProvider
        .when('/newEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        })
        .when('/events', {
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController',
            resolve: {
                events: ['$route', 'eventData', function ($route, eventData) {
                    return eventData.getAllEvents();
                }]
            }
        })
        .when('/event/:id', {
            templateUrl: 'templates/EventDetails.html',
            controller: 'EventController'
        })
        .when('/sampleDirective', {
            templateUrl: 'templates/SampleDirective.html',
            controller: 'SampleDirectiveController'
        })
        .otherwise({ redirectTo: '/events' });
        
    $locationProvider.html5Mode(true);
}]);

