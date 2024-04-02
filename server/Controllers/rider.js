// riderController.js

const Rider = require('../DataBase/Models/rider');

// Controller to create a new rider
const createRider = async (req, res) => {
    try {
        const rider = new Rider(req.body);
        await rider.save();
        res.status(201).json({ success: true, data: rider });
    } catch (error) {
        console.error('Error creating rider:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

// Controller to get all riders
const getAllRiders = async (req, res) => {
    try {
        const riders = await Rider.find();
        res.status(200).json({ success: true, data: riders });
    } catch (error) {
        console.error('Error fetching riders:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

// Controller to get a rider by ID
const getRiderById = async (req, res) => {
    try {
        const rider = await Rider.findById(req.params.id);
        if (!rider) {
            return res.status(404).json({ success: false, error: 'Rider not found' });
        }
        res.status(200).json({ success: true, data: rider });
    } catch (error) {
        console.error('Error fetching rider by ID:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

// Controller to update a rider
const updateRider = async (req, res) => {
    try {
        const rider = await Rider.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!rider) {
            return res.status(404).json({ success: false, error: 'Rider not found' });
        }
        res.status(200).json({ success: true, data: rider });
    } catch (error) {
        console.error('Error updating rider:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

// Controller to delete a rider
const deleteRider = async (req, res) => {
    try {
        const rider = await Rider.findByIdAndDelete(req.params.id);
        if (!rider) {
            return res.status(404).json({ success: false, error: 'Rider not found' });
        }
        res.status(200).json({ success: true, message: 'Rider deleted successfully' });
    } catch (error) {
        console.error('Error deleting rider:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

module.exports = { createRider, getAllRiders, getRiderById, updateRider, deleteRider };
