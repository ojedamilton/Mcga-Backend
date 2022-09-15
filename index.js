const express = require('express');
const app = express();
app.use(express.json());

app.listen(5000,()=> console.log('server on port 5000'));
app.get('/',(req,resp)=> resp.send('node with Express'));