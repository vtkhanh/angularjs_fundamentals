(function () {
    'use strict';
    eventsApp.directive('gravatar', Gravatar);
    Gravatar.$inject = ['gravatarUrlBuilder'];
    
    function Gravatar(gravatarUrlBuilder) {
        return {
            restrict: 'E',
            template: '<img/>',
            replace: true,
            link: function (scope, element, attrs, controller) {
                attrs.$observe('email', function (newEmail, oldEmail) {
                    if (newEmail !== oldEmail) {
                        attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newEmail));
                    }
                });
            }
        }        
    }
})();