/* The Service Worker                                                                   */
/*  It wil lhandle the subscribe                                                        */
/* See : https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications   */
/* ------------------------------------------------------------------------------------ */

self.addEventListener('push', function(e) {

    if (e.data) {
        bodytxt = e.data.text();
    } else {
        bodytxt = 'You are subscribed to DMVH newsletter.'; // Push message no payload;
    }

    var options = {
        body: bodytxt,
        icon: 'images/dmvh_ico_blue.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            { action: 'explore', title: 'See Archive',
                icon: 'images/subscribe_128.png'
            },
            { action: 'close', title: 'Close',
                icon: 'images/ignore_128.png'
            },
        ]
    };
    e.waitUntil(
        self.registration.showNotification('DMVH Newsletter - ' + primaryKey, options)
    );
});
