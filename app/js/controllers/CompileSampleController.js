(function () {
    eventsApp.controller('CompileSampleController', CompileSampleController);
    CompileSampleController.$inject = ['$scope', '$compile', '$parse'];

    function CompileSampleController($scope, $compile, $parse) {
        let fn = $parse('event.name');
        let context = { event: { name: 'a $parse service example' } };
        let context2 = { event: { name: 'another $parse service example' } };
        console.log(fn(context, context2));
        
        let setter = fn.assign;
        setter(context, 'the overridden $parse service example');
        console.log(context.event.name);
        

        $scope.appendDivToElement = function (markup) {
            return $compile(markup)($scope).appendTo(angular.element('#appendHere'));
        }
    }
} ());