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

app.use("/user", userRoute)