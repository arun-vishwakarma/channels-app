const app = require('./backend/app');
const http = require('http');

// const channel = require('./backend/models/channel.json');
// console.log(channel[0].title);

const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port,()=>{console.log('Listening port '+port)});