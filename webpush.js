// Simulate the WebPush as if it was laucnhed from code
// ----------------------------------------------------------------------------

const push = require('web-push');

// VAPID keys security
const vapidKeys = {
    publicKey: 'BAVIUVK1GtRFMFlbgd4vfHCnPrXIDiZmeSPohaAjHw2mE97d2X_kzLmFd_CLG7Ol5RAKP4a3MSaDhljLk1YX0F0',
    privateKey: 'ZpljSDgi6zbrOf2y5rgn3BpSXIDC5uuY0YY0ilhij_k'
};

// Set Push Notification Security
push.setVapidDetails('mailto:st@dmvh.eu', vapidKeys.publicKey, vapidKeys.privateKey);


// This is the same output of calling JSON.stringify on a PushSubscription
// It is the data of push in index.html that returns the subscribe confirmation.
// Should be stored in database and repulled for the push. But here hardcoded to simulate it

// Chrome ST : OK
//let wsuri = "https://fcm.googleapis.com/fcm/send/crHGzDUWXOk:APA91bGaR_4nQgiixCivIbIJw9Lpx5mMOxkug7-ZiV0q_phECOnjVb-zXwNulxWV0eXngjN83LpGpX5pexg2Bt1I8Mw0aKWfeZxvG745XFNzus6EWv9uoWeNvOrBR26o8Mq1uc-OfGxQ";
//let wskey = "BJYnc_4VJxssulF17JgjsJtV-ZW-aYWIbtI3L1SApKVTNr3mpZ03rspJeuRq38ahbi-vA082YP-DtJRtr3A7dzc";
//let wsauth = "clOB5U7V6gWGwCZBvG9ong";


//let wsuri = "https://fcm.googleapis.com/fcm/send/cPqnOBRUmcg:APA91bHXI7Dwra3SryL0s_jTlQ7dB9-vTRQU9U_tzu7AcD1G_ZWxqQMVRFpupbBqmgzYleCBvXeOSMtnoP54451d9gnCDtPN0T1SGMzhDZRaX747blRbS636A7t6hC1lkFYDprVkxIEY";
//let wskey = "BO4Njmkv9vjLr4a945LBkbW8har-nT7avbWv4R5lIm-cNxS-AX2wiam3ymX7NOTVudk7NnuoasUJ35LFmLYVbFc";
//let wsauth = "mwZyzTgk4H2aFOpjU12eTw";

// Chrome on Android
//let wsuri = "https://fcm.googleapis.com/fcm/send/fDjktWGwFAc:APA91bFJhssk_gwJ5n7alLK7HgDckZyKg1JVtkMppP8pIzwpDXGMaH4F5Bz5FqVifqZIYGG5Vw7O4Falg6BMEiWRGPHqtn5scQao7OCMueaZmahISnViMd0Opt8oJWMacpIBGU5PQttB";
//let wskey = "BC6qjH1vDA51QcPQw2t-8YtrciI36v5n0bW1aAtzjWT-eQHlQ6qKADToba09odjtcBbYQaBU3yJohg2TEHN-cCQ";
//let wsauth = "6gXodiWhQ1O4y0mRXjGoDA";


// Vivaldi
let wsuri = "https://fcm.googleapis.com/fcm/send/fMuAcgWiWw8:APA91bFe0zOCjfQaCg0UPX-x_EQ68B5AC5Hx1e3foA2TLkq40joOoG2PSgFpsRdPRTSIDjXPdZzXw6my6kZN0JlzutMroFF_aJqPjDvyKV7kfccR22HUkePKemFWEMk9rqUAy_p0JQHC";
let wskey = "BOBh4YEe8oX7mFMmRILJJpEH2nDYRteZ3DOxVB70lYMxXmUHs4iLs-Bxhv3vfY_6XezATIaOJmbisByANk36Xdw";
let wsauth = "VoavEDshPDG5hqsqpNXIZA";


// Chrome ST @ home
//let wsuri = "https://fcm.googleapis.com/fcm/send/dq4VVkFiGpE:APA91bEzJKpHFpGJkcPig82AIq-oAarRHN6aA2ondrqbDHlkNQgUs5dXBnGqvLOrQZfbxvNR9NNhVITR5Yy0gKJWOPY1CtWLzAVjh4EbmvLA-jVqkIoiIPqD-PYGRRLssgVHxgv2kkua";
//let wskey = "BCGsFXy3fa0MyJbS8xxqSVjnCWkEE39dpgHF7uF7nHwGw0x1NoqaCNySdjkY0QvUB7Gd9-4IWEvwH4lttqnFDHk";
//let wsauth = "7WC7obMzHcwT1BbbM9G7Hg";

// Edge ST  (OK)
//let wsuri = "https://wns2-db5p.notify.windows.com/w/?token=BQYAAACrD68HY87CaurpP3hG%2f4AGbCFdQzaszQREMkCjBvLL9C8U1bP7torzeEW4qAhsFMsc%2bn2Ica0ofn9URwQpbntSslD14zdhyGrKYCtZO%2fXDZ%2fKTPJnYc7hKEBG6Jw0vyjQ4n%2bOmqMDDylULR5VtkFAsC9UJPz7qOCi4OnovwblICyt0UcnFhoesR5RQE1noYyDwhNmcQ6KP0uElroDKDj%2f9uOXyoC6pvt0nqzROo3KoUQe85MpvRsGMxcJ8l0RBudYmAPui%2faxiGKLFgqS6YYA0Es%2bnnGAOEwrSs0mU1rkcJClP9ZmIdoXWt500iAEFe4lYIgteCks1MfWJLZg2nZG5";
//let wskey = "BGwh_SWvJT6H4jCA7qFwG1nTUzYMVd33mCgLiRfkNxXP0S2bA9JX7XDlOftNo_YMwOjrmLvc4DoHHnp4wV3bTUw";
//let wsauth = "5kFs4XHAFwCVYlPBYQ0cbA";


// Explorer CP
//let wsuri  = "https://fcm.googleapis.com/fcm/send/f_tFGwZ9lBY:APA91bHnsl-ML0mko8v8UCvY1DrIsndn_Ztamc7BUvAD8oScyF1zR6xmyZD6quu_-PLSX8bJxqFoIw6XStEE_QB1KscoYw4wTp_qglzvmwNEpZ0XrTo91DxANQHg1IvmD3WjooCc153x";
//let wskey  = "BJcR3HMUYiQoIOMJbIuvW7hO8ReprkOa_I1rjqOjj5Jta3UViPU5bixMzoaxlVxcpjFwXciqVgrBKMtuddMh2Lk";
//let wsauth = "7gy4jP_uXxVFuANl-SREMw";

// Mozilla ST
//let wsuri  = "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABh_…4KMkvkwYq005NVsq15rg4PSvLdKl3r6VV6oupdHwrWJB8bFN7fl_UjM3BX18";
//let wskey  = "BDw3j-CUVMZXsH3SLZhDHVXEXQC4h2SZ_iEwcY95g-dUik3-0s22QmaJQf3GfDDdVIMFqROWZEMIc5F4bjk0F8M";
//let wsauth = "K7rRDSumFSKN7bGaj345TA";

//var res = encodeURI(uri);


// The subscription data of the user to send the Push message to (see push in index)
const pushSubscription =
{
    endpoint: wsuri,
    expirationTime: null,
    keys: {
        p256dh: wskey,
        auth: wsauth
    }

};

const options = {
    headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "text/javascript" }
}

//webpush.registration.pushManager.subscribe({
//    userVisibleOnly: true,
//    applicationServerKey: vapidKeys.publicKey
//});

// The actual payload to push
// TODO - Check permissions granted
push.sendNotification(pushSubscription, 'Your Push Payload Text', options);