const Vendor = require('../DataBase/Models/Vendors');

const createVendor = async (req, res) => {
    try {
        const vendor = new Vendor(req.body);
        await vendor.save();
        res.status(201).json({ success: true, data: vendor });
    } catch (error) {
        console.error('Error creating vendor:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

const getAllVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.status(200).json({ success: true, data: vendors });
    } catch (error) {
        console.error('Error fetching vendors:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

const getVendorById = async (req, res) => {
    try {
        const vendor = await Vendor.findById(req.params.id);
        if (!vendor) {
            return res.status(404).json({ success: false, error: 'Vendor not found' });
        }
        res.status(200).json({ success: true, data: vendor });
    } catch (error) {
        console.error('Error fetching vendor by ID:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

const updateVendor = async (req, res) => {
    try {
        const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!vendor) {
            return res.status(404).json({ success: false, error: 'Vendor not found' });
        }
        res.status(200).json({ success: true, data: vendor });
    } catch (error) {
        console.error('Error updating vendor:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

const deleteVendor = async (req, res) => {
    try {
        const vendor = await Vendor.findByIdAndDelete(req.params.id);
        if (!vendor) {
            return res.status(404).json({ success: false, error: 'Vendor not found' });
        }
        res.status(200).json({ success: true, message: 'Vendor deleted successfully' });
    } catch (error) {
        console.error('Error deleting vendor:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

module.exports = { createVendor, getAllVendors, getVendorById, updateVendor, deleteVendor }