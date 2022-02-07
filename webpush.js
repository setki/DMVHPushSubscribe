// 
// ----------------------------------------------------------------------------

const webpush = require("web-push");

// VAPID keys should only be generated once.
const vapidKeys = {
    publicKey:  "BAVIUVK1GtRFMFlbgd4vfHCnPrXIDiZmeSPohaAjHw2mE97d2X_kzLmFd_CLG7Ol5RAKP4a3MSaDhljLk1YX0F0",
    privateKey: "ZpljSDgi6zbrOf2y5rgn3BpSXIDC5uuY0YY0ilhij_k"
};

// Set Push Notification Security
webpush.setVapidDetails("mailto:st@dmvh.eu", vapidKeys.publicKey, vapidKeys.privateKey);

// This is the same output of calling JSON.stringify on a PushSubscription
// It is the data of push in index.html that returns the subscribe confirmation.
// Should be stored in database and repulled for the push. But here hardcoded to simulate it

// Chrome ST
//var wsuri = "https://fcm.googleapis.com/fcm/send/fAyGZA5rqKE:APA91bEUrsn4wJGXovbCKnJQi8nSviGOaLsr4TFTLqN1s9Uud-jF4ArgCo5Tm0jdRUpdxUSN0QZC2tShQ5etuBEVkS6ARFIk5jiDdl-0H63pP-_xK6SNGZ04NDOv-Hepx74ymqfc9qRZ";
//var wskey = "BMSiW8MPqXFQduJHiY6tJ5VTEe2z7wtL1QYObGIw13iG2lreI-Esz7muX-0xXUY8kGUA-cOEKhgSfIBs8LEmLBw";
//var wsauth = "j8z3hcZBLH1MUcnlskswHw";


// Edge ST  (OK)
var wsuri = "https://wns2-db5p.notify.windows.com/w/?token=BQYAAACrD68HY87CaurpP3hG%2f4AGbCFdQzaszQREMkCjBvLL9C8U1bP7torzeEW4qAhsFMsc%2bn2Ica0ofn9URwQpbntSslD14zdhyGrKYCtZO%2fXDZ%2fKTPJnYc7hKEBG6Jw0vyjQ4n%2bOmqMDDylULR5VtkFAsC9UJPz7qOCi4OnovwblICyt0UcnFhoesR5RQE1noYyDwhNmcQ6KP0uElroDKDj%2f9uOXyoC6pvt0nqzROo3KoUQe85MpvRsGMxcJ8l0RBudYmAPui%2faxiGKLFgqS6YYA0Es%2bnnGAOEwrSs0mU1rkcJClP9ZmIdoXWt500iAEFe4lYIgteCks1MfWJLZg2nZG5";
var wskey = "BGwh_SWvJT6H4jCA7qFwG1nTUzYMVd33mCgLiRfkNxXP0S2bA9JX7XDlOftNo_YMwOjrmLvc4DoHHnp4wV3bTUw";
var wsauth = "5kFs4XHAFwCVYlPBYQ0cbA";


// Explorer CP
//var wsuri  = "https://fcm.googleapis.com/fcm/send/f_tFGwZ9lBY:APA91bHnsl-ML0mko8v8UCvY1DrIsndn_Ztamc7BUvAD8oScyF1zR6xmyZD6quu_-PLSX8bJxqFoIw6XStEE_QB1KscoYw4wTp_qglzvmwNEpZ0XrTo91DxANQHg1IvmD3WjooCc153x";
//var wskey  = "BJcR3HMUYiQoIOMJbIuvW7hO8ReprkOa_I1rjqOjj5Jta3UViPU5bixMzoaxlVxcpjFwXciqVgrBKMtuddMh2Lk";
//var wsauth = "7gy4jP_uXxVFuANl-SREMw";

// Mozilla ST
//var wsuri  = "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABh_…4KMkvkwYq005NVsq15rg4PSvLdKl3r6VV6oupdHwrWJB8bFN7fl_UjM3BX18";
//var wskey  = "BDw3j-CUVMZXsH3SLZhDHVXEXQC4h2SZ_iEwcY95g-dUik3-0s22QmaJQf3GfDDdVIMFqROWZEMIc5F4bjk0F8M";
//var wsauth = "K7rRDSumFSKN7bGaj345TA";

//var res = encodeURI(uri);

const pushSubscription = 
{
    endpoint: wsuri,
    expirationTime: null,
    keys: {
        p256dh: wskey,
        auth: wsauth
    }

};

//const options = {
//    vapidDetails: {
//        subject: '< \'mailto\' Address or URL >',
//        publicKey: '< URL Safe Base64 Encoded Public Key >',
//        privateKey: '< URL Safe Base64 Encoded Private Key >'
//    },
//    timeout: <Number>
//        TTL: <Number>,
//            headers: {
//                '< header name >': '< header value >'
//  },
//                    contentEncoding: '< Encoding type, e.g.: aesgcm or aes128gcm >',
//                proxy: '< proxy server options >',
//                    agent: '< https.Agent instance >'
//}



//webpush.registration.pushManager.subscribe({
//    userVisibleOnly: true,
//    applicationServerKey: vapidKeys.publicKey
//});

// The actual payload to push
// Check permissions granted  TODO
webpush.sendNotification(pushSubscription, 'Your Push Payload Text');