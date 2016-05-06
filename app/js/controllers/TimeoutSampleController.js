(function(){
    eventsApp.controller('TimeoutSampleController', TimeoutSampleController);
    TimeoutSampleController.$inject = ['$scope', '$timeout'];
    
    function TimeoutSampleController($scope, $timeout) {
        let promise = $timeout(function() {
            $scope.name = 'Khanh Vu';
        }, 3000);
        
        $scope.cancel = function() {
            $timeout.cancel(promise);
        }
    }
}());