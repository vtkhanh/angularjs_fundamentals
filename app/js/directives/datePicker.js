(function () {
    eventsApp.directive('datePicker', DatePicker);
    
    function DatePicker() {
        return {
            restrict: 'A',            
            link: function (scope, element) {
                element.datepicker({dateFormat: 'dd.mm.yy'});
            }                        
        };
    }
})();