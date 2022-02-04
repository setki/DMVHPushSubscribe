/* The Service Worker                                                                   */
/* See : https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications   */
/* ------------------------------------------------------------------------------------ */

self.addEventListener('push', function (e) {
    var options = {
        body: 'This notification was generated from a push!',
        icon: 'images/DMVH-LOGO_400.jpg',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: 'Subscribe',
                icon: 'images/subscribe_128.jpg'
            },
            {
                action: 'close', title: 'Close',
                icon: 'images/ignore_128.jpg'
            },
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Demo Push Notification', options)
    );
});
