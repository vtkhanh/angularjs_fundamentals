(function(){
    eventsApp.controller('LocaleSampleController', LocaleSampleController);
    LocaleSampleController.$inject = ['$scope', '$locale'];
    
    
    function LocaleSampleController($scope, $locale) {
        $scope.myDate = Date.now();
        $scope.myFormat = $locale.DATETIME_FORMATS.fulldate;    
    }
}());