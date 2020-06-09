const express = require('express');
const createError = require('http-errors');
const configs = require('./configs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));

app.use((req, res, next) => {
  next(createError(404));
});

app.listen(configs.PORT, () => {
  console.log(`[${configs.configStatus}] Connect ${configs.PORT} port`);
});
