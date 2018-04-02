const express = require('express');
const rabbit = require('./rpc_client.js');
const zero = require('./z-client.js');

const app = express();

app.get('/test', (req, res) => {
  console.log('request to test url:', req.method.toString()); // still 兩次, get, head

  if (req.method == 'GET') {
    console.log('start test');
    // Test RabbitMQ
    // const data = await rabbit.tryRabbitMQRPCFib(10);
    // console.log('data:', data);

    Test zeromq
    console.log('start to test zeromq');
    const data = await zero.testZMQReqResp();
    console.log('data:', data);
    console.log('end to test zeromq');
  }

  console.log('end to request to test url');

  res.send('Test Message queue');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
