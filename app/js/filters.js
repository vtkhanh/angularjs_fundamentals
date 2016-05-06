(function () {

    eventsApp.filter('duration', Duration);
    eventsApp.filter('levelBadge', LevelBadge);
    eventsApp.filter('unsafe', Unsafe);
    
    Unsafe.$inject = ['$sce'];

    function Duration() {
        return function (time) {
            switch (time) {
                case 1:
                    return '1 hour';
                case 2:
                    return 'half day';
                case 3:
                    return 'full day';
                default:
                    return '30 minutes';
            }
        }
    }

    function LevelBadge() {
        return function (level) {
            switch (level) {
                case 'Introductory':
                    return '<i class="glyphicon glyphicon-pawn"></i>';
                case 'Intermediate':
                    return '<i class="glyphicon glyphicon-knight"></i>';
                case 'Advanced':
                    return '<i class="glyphicon glyphicon-queen"></i>';
            }
        }
    }

    function Unsafe($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    }
})();

