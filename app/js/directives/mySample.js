(function(){
    'use strict';
    eventsApp.directive('mySample', MySampleDirective);
    
    function MySampleDirective() {
        return {
            restrict: 'E',
            template: '<input type="text" ng-model="sampleData"/>{{sampleData}}<br/>'            
        }
    }    
})();