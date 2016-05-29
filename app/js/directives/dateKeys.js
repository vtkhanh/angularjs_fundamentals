(function () {
    eventsApp.directive('dateKeys', DateKeys);

    function DateKeys() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs, controller) {
                element.on('keydown', function (event) {
                    if (isNumericKeycode(event.keyCode) || isDelimiterKeycode(event.keyCode) || isNavigationKeycode(event.keyCode) ) {
                        return true;
                    }
                    return false;
                })
            }
        };

        function isNumericKeycode(keycode) {
            return (keycode >= 48 && keycode <= 57) || (keycode >= 96 && keycode <= 105);
        }
        
        function isDelimiterKeycode(keycode) {
            return keycode === 190 || keycode === 191;            
        }
        
        function isNavigationKeycode(keycode) {
            switch (keycode) {
                case 8: // backspace
                case 35: // end
                case 36: // home
                case 37: // left
                case 38: // up
                case 39: // right
                case 40: // down
                case 45: // ins
                case 46: // del
                    return true;
                default:
                    return false;
            }
        }
    }
})();