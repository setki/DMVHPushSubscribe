/* The Service Worker                                                                   */
/*  It will handle the subscribe                                                        */
/* See : https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications   */
/* ------------------------------------------------------------------------------------ */

self.addEventListener('push', function(event) {

    //if (event.data) {
    //    bodytxt = event.data.text();
    //} else {
    //    bodytxt = 'You are subscribed to DMVH newsletter.'; // Push message no payload;
    //}

    var options = {
        body: 'You are subscribed to DMVH newsletter',
        icon: 'images/dmvh_ico_blue.png',
        img: 'images/dmvh_logo_1024.jpg',
        tag: 'new message',
        badge: 'images/dmvh_ico_orange.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore',
                icon: 'images/subscribe_128.png',
                title: 'See Archive'
            },
            {
                action: 'close',
                icon: 'images/ignore_128.png',
                title: 'Close'
            },
        ]
    };

    event.waitUntil(
        self.registration.showNotification('DMVH Newsletter', options)
    );

//    navigator.serviceWorker.ready.then(function (serviceWorker) {
//        serviceWorker.showNotification(title, options);
//    });

});