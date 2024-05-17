const express = require('express');
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require('cors');


const app = express();

require('dotenv').config();

app.use(cors())

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Welcome to the Super Admin Dashboard API');
});

const connectMongoDB = require("./DataBase/ConnectMongoDB")

connectMongoDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    });
})

app.use(express.json())
app.use(helmet());
app.use(morgan("combined"));

const userRoute = require("./routes/user")
const managementRoutes = require("./routes/management");
const clientRoutes = require( "./routes/client");
const vendorRoutes = require('./routes/vendor')
const riderRoutes = require('./routes/rider')
const restaurantRoutes = require('./routes/restaurant')
const { rateLimiter } = require("./middleware/rateLimiter.js");
const generalRoutes = require("./routes/general.js");
const salesRoutes = require("./routes/sales.js");


app.use("/management", managementRoutes);
app.use("/client", clientRoutes);
app.use("/user", userRoute)
app.use('/vendor', vendorRoutes)
app.use("/rider", riderRoutes)
app.use('/restaurant', restaurantRoutes)
app.use("/general", generalRoutes);
app.use("/sales", salesRoutes);
app.use(rateLimiter);