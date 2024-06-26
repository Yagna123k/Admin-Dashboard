const express = require('express');
const router = express.Router();
const {
    createRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant
} = require('../Controllers/restaurant');

router.post('/', createRestaurant);

router.get('/', getAllRestaurants);

router.get('/:id', getRestaurantById);

router.put('/:id', updateRestaurant);

router.delete('/:id', deleteRestaurant);

module.exports = router;
