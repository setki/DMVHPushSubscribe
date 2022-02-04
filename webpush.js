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
    "endpoint": "https://fcm.googleapis.com/fcm/send/eL_-P1wKezU:APA91bHjnWdEnMMymS8FNnfqohpnA8QkD0SDqHeOf1elpX1Hd0TcZo7qE7bZ7fIvbFSG-82YFT5gTH3tHCZ4rB-N2cQNgGNGG_9IzMLT5Q3pL0UA5BZZL4yFf9NRTl7LBONF1fWDP5uW",
    "expirationTime": null,
    "keys": {
        "p256dh": "BIOkNM2pgr3-XzcEGVd4_-nK-m7D2FvkQt3aGJqrQVQLMM7LafSxF0-tcs3WDINidxno35z2xTwUN46hvl1ikJk",
        "auth": "-zrXw0ZMRFpY1zm8QBL4HA"
    }
};


// The actual payload to push
webpush.sendNotification(pushSubscription, 'ST Push Info');

