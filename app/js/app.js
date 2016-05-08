'use strict';

let eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute']);

eventsApp.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    // $httpProvider.defaults.headers.common["Access-Control-Allow-Origin"] = "http://angularjs:5000";
    
    $routeProvider
        .when('/newEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        })
        .when('/events', {
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController'
        })
        .otherwise({ redirectTo: '/events' });
}]);

