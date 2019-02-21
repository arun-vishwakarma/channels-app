const express = require('express');
const router = express.Router();

const ChannelCtrl = require('../controllers/channels');
//const checkAuth = require('../middleware/auth-check');

router.get('/channel',ChannelCtrl.getAllChannels);
module.exports = router;
