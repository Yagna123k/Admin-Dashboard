const Restaurant = require('../DataBase/Models/Restaurant');

const createRestaurant = async (req, res) => {
    try {
        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.status(201).json({ success: true, data: restaurant });
    } catch (error) {
        console.error('Error creating restaurant:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json({ success: true, data: restaurants });
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ success: false, error: 'Restaurant not found' });
        }
        res.status(200).json({ success: true, data: restaurant });
    } catch (error) {
        console.error('Error fetching restaurant by ID:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

const updateRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!restaurant) {
            return res.status(404).json({ success: false, error: 'Restaurant not found' });
        }
        res.status(200).json({ success: true, data: restaurant });
    } catch (error) {
        console.error('Error updating restaurant:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

const deleteRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ success: false, error: 'Restaurant not found' });
        }
        res.status(200).json({ success: true, message: 'Restaurant deleted successfully' });
    } catch (error) {
        console.error('Error deleting restaurant:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

module.exports = {
    createRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant
};
