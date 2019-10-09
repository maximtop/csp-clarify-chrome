const mainServer = require('./src/main/server');
const trustedServer = require('./src/restricted/server');

// start main server
mainServer.start(3000);
// start restricted server
trustedServer.start(5000);
