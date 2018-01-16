var proxy = require('express-http-proxy');
var app = require('express')();

app.use('/', proxy('3cjn1rwq.api.lncld.net', {
  https: true,
  proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
    // you can update headers
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    proxyReqOpts.headers['X-LC-Id'] = '3CJn1RwqYUdV53DwGEJpHA1C-gzGzoHsz';
    proxyReqOpts.headers['X-LC-Key'] = 'z2bruTumSx3Y1KBTDkarEkhh';
    return proxyReqOpts;
  }
}));

app.listen(5050);
