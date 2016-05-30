var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute']);

eventsApp.config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/newEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        })
        .when('/events', {
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController',
            resolve: {
                events: getEvents
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
}

getEvents.$inject = ['$route', 'eventData'];

function getEvents($route, eventData) {
    return eventData.getAllEvents();
}