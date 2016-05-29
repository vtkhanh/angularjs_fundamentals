(function () {
    eventsApp.factory('eventData', EventData);
    EventData.$inject = ['$resource'];


    function EventData($resource) {
        let host = 'localhost:5000';
        let url = `http://${host}/data/event/:id`;
        let eventResource = $resource(url, { id: '@id' });
        return {
            getEvent: function (id) {
                return eventResource.get({ id: id });
            },
            getAllEvents: function () {
                console.log('get all events');
                
                return eventResource.query();
            },
            save: function (event) {
                event.id = 999;
                return eventResource.save(event);
            }
        };
    }
})();