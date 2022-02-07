/* The Service Worker                                                                   */
/*  It wil lhandle the subscribe                                                        */
/* See : https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications   */
/* ------------------------------------------------------------------------------------ */

self.addEventListener('push', function (e) {
    var options = {
        body: 'You will be subscribed to DMVH newsletter!',
        icon: 'images/DMVH-ICO.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: 'Confirm',
                icon: 'images/favicon-blue-128-128.png'
            },
            {
                action: 'close', title: 'Close',
                icon: 'images/ignore_128.png'
            },
        ]
    };
    e.waitUntil(    
        self.registration.showNotification('DMVH Newsletter', options)
    );
});

//self.addEventListener('notificationclose', function (e) {
//    var notification = e.notification;
//    var primaryKey = notification.data.primaryKey;

//    console.log('Closed notification: ' + primaryKey);
//});

//self.addEventListener('notificationclick', function (e) {
//    var notification = e.notification;
//    var primaryKey = notification.data.primaryKey;
//    var action = e.action;

//    if (action === 'close') {
//        notification.close();
//    } else {
//        clients.openWindow('http://www.dmvh.eu');
//        notification.close();
//    }
//});
