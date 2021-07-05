const express = require('express');
const router = express.Router();
const apiCtrl = require('../controllers/api');

router.post('/current', apiCtrl.current);
router.post('/next', apiCtrl.next);
router.post('/set', apiCtrl.set);

module.exports = router;