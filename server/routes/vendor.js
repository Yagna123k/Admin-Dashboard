const express = require('express');
const router = express.Router();
const {
    createVendor,
    getAllVendors,
    getVendorById,
    updateVendor,
    deleteVendor
} = require('../Controllers/vendor');

router.post('/', createVendor);

router.get('/', getAllVendors);

router.get('/:id', getVendorById);

router.put('/:id', updateVendor);

router.delete('/:id', deleteVendor);

module.exports = router;
