const User = require("../DataBase/Models/UserModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)

        res.status(200).json(user)

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createUser = async (req, res) => {
    const { name, email, password, city, state, country, phoneNumber } = req.body;
    try {
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            city,
            state,
            country,
            phoneNumber,
            role: 'user'
        });

        await newUser.save();

        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email },
            process.env.JWT_SECRET,
        );

        res.status(201).json({ token, user: newUser, message: 'User created successfully' });

    } catch (error) {
        console.error('Error in creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error in login controller:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Token is required' });
    }

    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (error, decodedToken) => {
        if (error) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        req.user = decodedToken;
        next();
    })
}

const getProfile = async (req, res) => {
    try {
        console.log('User object from request:', req.user);

        const user = await User.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = { getUser, getAllUsers, createUser, login, getProfile, verifyToken }