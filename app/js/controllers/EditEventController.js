(function () {
    eventsApp.controller('EditEventController', EditEventController);
    EditEventController.$inject = ['$scope', 'eventData'];

    function EditEventController($scope, eventData) {
        $scope.saveEvent = function (event, newEventForm) {
            if (newEventForm.$valid) {
                console.log('Post input is valid');
                eventData.save(event).$promise
                    .then(function (response) { console.log('success', response); })
                    .catch(function (error) { console.log('error', error); });
            }
            else {
                console.log('Post input is invalid');
            }
        }

        $scope.cancelEdit = function () {
            window.location = '/EventDetails.html';
        }
    }
} ());