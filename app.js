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

app.use((err, req, res, next) => {
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = configs.configStatus === 'dev' ? err : {};
  res.status(err.status || 500);
  res.send(configs.configStatus === 'dev' ? { err } : { err: err.status });
});

app.listen(configs.PORT, () => {
  console.log(`[${configs.configStatus}] Connect ${configs.PORT} port`);
});
