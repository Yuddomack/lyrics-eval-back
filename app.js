const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const fs = require('fs');
const timeout = require('connect-timeout');
const { PORT, LOG_FORMAT, TIMEOUT_LIMIT, configStatus } = require('./configs');
const { sequelize } = require('./models');

const app = express();
sequelize.sync();

// REVIE: 필요하다면 설정부 분리
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
morgan.token('body', (req) => JSON.stringify(req.body));
app.use(
  morgan(LOG_FORMAT, {
    stream: fs.createWriteStream(
      `logs/${new Date().toDateString()}.${configStatus}.log`,
      {
        flags: 'a',
      }
    ),
  })
);
app.use(timeout(TIMEOUT_LIMIT));
app.use((req, res, next) => {
  if (!req.timedout) {
    next();
  }
});
app.use('/', require('./routes'));

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = configStatus === 'dev' ? err : {};
  res.status(err.status || 500);
  res.send(configStatus === 'dev' ? { err } : { err: err.status });
});

app.listen(PORT, () => {
  console.log(`[${configStatus}] Connect ${PORT} port`);
});
