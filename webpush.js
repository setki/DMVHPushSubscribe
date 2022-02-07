// 
// ----------------------------------------------------------------------------

const webpush = require("web-push");

// VAPID keys should only be generated only once.
const vapidKeys = {
    publicKey:  "BAVIUVK1GtRFMFlbgd4vfHCnPrXIDiZmeSPohaAjHw2mE97d2X_kzLmFd_CLG7Ol5RAKP4a3MSaDhljLk1YX0F0",
    privateKey: "ZpljSDgi6zbrOf2y5rgn3BpSXIDC5uuY0YY0ilhij_k"
};

// Set Push Notification Security
webpush.setVapidDetails('mailto:st@dmvh.eu', vapidKeys.publicKey, vapidKeys.privateKey);

// This is the same output of calling JSON.stringify on a PushSubscription
// It is the data of push in index.html that returns the subscribe confirmation.
// Should be stored in database and repulled for the push. But here hardcoded to simulate it

// Chrome ST
//var wsuri  = "https://fcm.googleapis.com/fcm/send/eGjeaghdLfA:APA91bEr7F-mZJOaplydWOpGYJt4j5xNd9rVvOsAlxglMzFXtdH5tEKWz9zUqZJg07blbfBm5JQRlMgg4R35QAtrsLYZdVVoWfhQ__sg0XgCK7xhAm2tgQMdzdSNIgnLzHhXl6R9oHoA";
//var wskey  = "BLqIXVVXSMQUL6tFrS_uAEaKf7sxARQAZCfeddOQh8XbY7umSmiWcWVP4qf96kXPytyuiugapV6zg9OT9tF07Sw";
//var wsauth = "WdgFZFYjCgVazoVrRvQsCQ";

// Edge ST  (OK)
var wsuri   = "https://wns2-db5p.notify.windows.com/w/?token=BQYAAACFrSzZWfLQI3wNO94SF0VN89ILfve7VDDJ9WXT3f7%2fA113%2f5V%2fxTvK2SDn%2b3luqv8XeIAiBwB1ge9K6ytnrYO0cQyzzAlYH1XFe%2bpLselLgtpCM8U0DYXDVMxKmlQGRf51Yur5jVexpuHnl0jkcyAa1%2fPc58SSR2RU%2bKUXHrCAUCZtvZ0W7cbZ5jbLuxxibaMR2ES5ZBDz02ZcMeUPhkTBCgNyY7u9xtEmHXfUGRQtX3rpcAKCCpYeEGp6m1Q91QXNOTI%2bx9C7SFnCubHPsUgozKlVNzjmKJ4XCFWtqq4oUcHH5sE6x696I44P1FdYoGWeWsrwPqT62tR4er7xbcVt";
var wskey   = "BL8DqMxQ4dHM6X9B71iU4tcGV7ArTW0gVneMTqKXpzbGTCHpXGKEvLShCtLCyH7Ur14N60wf--tQGeoXLvFo4WE";
var wsauth  = "4YHRcd5BBz8fRqasroCszw";

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

// The actual payload to push
// Check permissions granted  TODO
webpush.sendNotification(pushSubscription, "ST Push Info");
