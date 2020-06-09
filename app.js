const express = require('express');
const configs = require('./configs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));

app.listen(configs.PORT, () => {
  console.log(`[${configs.configStatus}] Connect ${configs.PORT} port`);
});
