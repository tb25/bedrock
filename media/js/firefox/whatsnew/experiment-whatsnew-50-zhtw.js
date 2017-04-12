(function() {
    'use strict';

    var greggs = new Mozilla.TrafficCop({
        id: 'experiment-firefox-whatsnew-50-zhtw',
        variations: {
            'v=a': 50, // send to device widget
            'v=b': 50 // QR code
        }
    });

    greggs.init();
})();
