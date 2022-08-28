var express = require('express');
var router = express.Router();
var rabbitMQservice = require('../services/rabbit-mq');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    success: true,
    message: "users base route"
  })
});

router.post("/save", (req, res) => {
  rabbitMQservice.MessageSender(req.app.locals.channel, req.app.locals.queue, req.body);
  res.json({
    success: true,
    data: req.body
  });
});

module.exports = router;
