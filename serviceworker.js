/* The Service Worker                                                                   */
/*  It will handle the subscribe                                                        */
/* See : https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications   */
/* ------------------------------------------------------------------------------------ */

self.addEventListener('push', function(e) {

    //if (e.data) {
    //    bodytxt = e.data.text();
    //} else {
    //    bodytxt = 'You are subscribed to DMVH newsletter.'; // Push message no payload;
    //}

    const msgimg   = "/images/dmvh_logo_1024.jpg";
    const msgtitle = "DMVH Newsletter";
    const msgtxt   = "You are subscribed to DMVH newsletter";

    var options = {
        body  : msgtxt,
        img   : msgimg,
        tag   : "new message",
        icon  : "/images/dmvh_ico_blue.png",
        badge : "/images/dmvh_ico_orange.png",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 2
        },
        actions: [
            {
                action: "explore",
                title: "See Archive",
                icon: "/images/subscribe_128.png"
            },
            {
                action: "'close",
                title: "Close",
                icon: "/images/ignore_128.png"
            },
        ]
    };

    e.waitUntil(
        self.registration.showNotification(msgtitle, options)
    );

//    navigator.serviceWorker.ready.then(function (serviceWorker) {
//        serviceWorker.showNotification(title, options);
//    });

});
