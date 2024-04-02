const express = require('express');
const router = express.Router();
const riderController = require('../Controllers/rider');

router.post('/', riderController.createRider);

router.get('/', riderController.getAllRiders);

router.get('/:id', riderController.getRiderById);

router.put('/:id', riderController.updateRider);

router.delete('/:id', riderController.deleteRider);

module.exports = router;
