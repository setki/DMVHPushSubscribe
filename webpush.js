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
// It is the data of push in index.html that returns to subscribe
// Should be pulled from database. Here hardcoded to simulate the dataretrieve
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

// The actual payload to push
webpush.sendNotification(pushSubscription, 'ST Push Info');

