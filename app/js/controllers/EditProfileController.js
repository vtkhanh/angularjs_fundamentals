(function () {
    'use strict';

    eventsApp.controller('EditProfileController', EditProfileController);
    EditProfileController.$inject = ['$scope', 'gravatarUrlBuilder'];
    
    function EditProfileController($scope, gravatarUrlBuilder) {
        $scope.user = {};

        $scope.getGravatarUrl = gravatarUrlBuilder.buildGravatarUrl;
    }

} ());
