(function () {
    eventsApp.directive('collapsible', Collapsible);
    
    function Collapsible() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'templates/directives/CollapsibleTitle.html',
            controller: ['$scope', function ($scope) {
                $scope.visible = true;
                $scope.toggleVisibility = function () {
                    $scope.visible = !$scope.visible;
                }
            }],
            scope: {
                title: '='
            }            
        };
    }
})();