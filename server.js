const express = require('express');
const router = require('./src/routes/homeRouter');
const app = express();
const routers = require('./src/routes/index')
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(express.urlencoded())
app.use(require('morgan')('dev'))

app.use('/', routers.homeRouter);
app.use('/test', routers.testRouter);

app.listen(port, () => console.log(`Connection to PORT ${ 4000 }`));
