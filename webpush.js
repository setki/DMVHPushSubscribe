// 
// ----------------------------------------------------------------------------

const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
    publicKey:  'BAVIUVK1GtRFMFlbgd4vfHCnPrXIDiZmeSPohaAjHw2mE97d2X_kzLmFd_CLG7Ol5RAKP4a3MSaDhljLk1YX0F0',
    privateKey: 'ZpljSDgi6zbrOf2y5rgn3BpSXIDC5uuY0YY0ilhij_k'
};

// Set Push Notification Security
webpush.setVapidDetails('mailto:st@dmvh.eu', vapidKeys.publicKey, vapidKeys.privateKey);

// This is the same output of calling JSON.stringify on a PushSubscription
// It is the data of push in index.html that returns the subscribe confirmation.
// Should be stored in database and repulled for the push. But here hardcoded to simulate it
const pushSubscription = 
{
    "endpoint": "https://fcm.googleapis.com/fcm/send/cIgytaNg-Kg:APA91bF9JQR5OtBV_8NEj9XNqZLxyxd2k43VhPQ1RBzf4oNcTulHUg2J5BT3ep7FYZH8dWQSEma9mYhsQVlVKhpemuWcIlyecK7v4B5Fh_ir3bXZXwpBg_E8vJVDwFBme6U-eMTQcQ2_",
    "expirationTime": null,
    "keys": {
        "p256dh": "BNyqPYGibH9jqE5w254Y_0DNN7p8_Gdn1AbsvOiLTfJwUeUIHndOge3-vU4h6-1o5QgRdqDvqjjzysk13gaAvbA",
        "auth": "r1jmzmAoECx8vW7-wRkwMA"
    }
};


// The actual payload to push
webpush.sendNotification(pushSubscription, 'ST Push Info');

