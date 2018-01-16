var proxy = require('express-http-proxy');
var app = require('express')();

var server_port = process.env.PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var appId = process.env.APP_ID;
var appKey = process.env.APP_KEY;
var serviceDomain = process.env.SERVICE_DOMAIN;
app.use('/', proxy(serviceDomain, {
  https: true,
  proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
    // you can update headers
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    proxyReqOpts.headers['X-LC-Id'] = appId;
    proxyReqOpts.headers['X-LC-Key'] = appKey;
    return proxyReqOpts;
  }
}));

app.listen(server_port);
