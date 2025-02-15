const express = require("express");
const {connectDB} = require("./connect")
const urlRoute = require("./routes/url")
const cors = require("cors");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

const MongoURI = process.env.MONGO_URI;
connectDB(MongoURI).then(()=> console.log("mongoDB connected"))

// Middleware
app.use(express.json())

// Enable CORS for "localhost:5173"
const corsOptions = {
    origin: process.env.FRONTEND_URL
    // origin: "http://localhost:5173"
};
app.use(cors(corsOptions));

app.use("/url", urlRoute)
app.use("/", urlRoute)

app.listen(PORT, ()=>console.log(`Server started at ${PORT}`))