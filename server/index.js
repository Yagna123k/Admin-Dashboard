const express = require('express');
const app = express();

const cors = require('cors');
require('dotenv').config();

app.use(cors())

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Welcome to the Super Admin Dashboard API');
});

const connectMongoDB = require("./DataBase/ConnectMongoDB")

connectMongoDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})

app.use(express.json())

const userRoute = require("./routes/user")
const managementRoutes = require("./routes/management");
const clientRoutes = require( "./routes/client");
const vendorRoutes = require('./routes/vendor')
const riderRoutes = require('./routes/rider')
const restaurantRoutes = require('./routes/restaurant')

app.use("/management", managementRoutes);
app.use("/client", clientRoutes);
app.use("/user", userRoute)
app.use('/vendor', vendorRoutes)
app.use("/rider", riderRoutes)
app.use('/restaurant', restaurantRoutes)