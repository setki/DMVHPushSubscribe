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

    //"endpoint": "https://fcm.googleapis.com/fcm/send/eL_-P1wKezU:APA91bHjnWdEnMMymS8FNnfqohpnA8QkD0SDqHeOf1elpX1Hd0TcZo7qE7bZ7fIvbFSG-82YFT5gTH3tHCZ4rB-N2cQNgGNGG_9IzMLT5Q3pL0UA5BZZL4yFf9NRTl7LBONF1fWDP5uW",
    //"expirationTime": null,
    //"keys": {
    //    "p256dh": "BIOkNM2pgr3-XzcEGVd4_-nK-m7D2FvkQt3aGJqrQVQLMM7LafSxF0-tcs3WDINidxno35z2xTwUN46hvl1ikJk",
    //    "auth": "-zrXw0ZMRFpY1zm8QBL4HA"
    //}

    "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABh_…4KMkvkwYq005NVsq15rg4PSvLdKl3r6VV6oupdHwrWJB8bFN7fl_UjM3BX18",
    "expirationTime": null,
    "keys": {
        "auth": "K7rRDSumFSKN7bGaj345TA",
        "p256dh": "BDw3j-CUVMZXsH3SLZhDHVXEXQC4h2SZ_iEwcY95g-dUik3-0s22QmaJQf3GfDDdVIMFqROWZEMIc5F4bjk0F8M"
    }

    //{
    //"endpoint": "https://fcm.googleapis.com/fcm/send/f_tFGwZ9lBY:APA91bHnsl-ML0mko8v8UCvY1DrIsndn_Ztamc7BUvAD8oScyF1zR6xmyZD6quu_-PLSX8bJxqFoIw6XStEE_QB1KscoYw4wTp_qglzvmwNEpZ0XrTo91DxANQHg1IvmD3WjooCc153x",
    //    "expirationTime": null,
    //        "keys": {
    //    "p256dh": "BJcR3HMUYiQoIOMJbIuvW7hO8ReprkOa_I1rjqOjj5Jta3UViPU5bixMzoaxlVxcpjFwXciqVgrBKMtuddMh2Lk",
    //        "auth": "7gy4jP_uXxVFuANl-SREMw"
    //}

};

// The actual payload to push
webpush.sendNotification(pushSubscription, 'ST Push Info');

