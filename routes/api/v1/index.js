const express = require('express');

const router = express.Router();

// NOTE: 세분화 될 여지가 있다면 아래처럼 분리
// router.use("/lyrics", require('./lyrics'));
router.get('/', (req, res) => res.send({ version: 'v1' }));

module.exports = router;
