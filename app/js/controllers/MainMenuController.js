(function () {
    eventsApp.controller('MainMenuController', MainMenuController);
    MainMenuController.$inject = ['$scope', '$location'];
    
    function MainMenuController($scope, $location) {
        console.log('absUrl: ', $location.absUrl());
        console.log('protocol: ', $location.protocol());
        console.log('port: ', $location.port());
        console.log('path: ', $location.path());
        console.log('search: ', $location.search());   
        console.log('hash: ', $location.hash());
        console.log('url: ', $location.url());
        
        $scope.createEvent = function () {
            $location.url('/newEvent');
        }        
    }
})();