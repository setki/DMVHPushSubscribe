// To make the keys
// ----------------------------------------------------------------------------
const push = require('web-push');

let vapidkeys = push.generateVAPIDKeys();

console.log(vapidkeys);
