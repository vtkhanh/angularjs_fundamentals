(function () {
    'use strict';
    eventsApp.factory('$exceptionHandler', ExceptionHandler);
    
    function ExceptionHandler() {
        return function (exception, cause) {
            // console.log(exception, cause);
            
            console.log('Exception handler: ' + exception.message);            
        }
    }
}());