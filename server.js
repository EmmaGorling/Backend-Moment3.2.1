const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const { type } = require('os');
require('dotenv').config();

const app = express();
const port = process.env.DB_PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.DB_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error when trying to connect to MongoDB' + error);
});

// Workexperience schema
const WorkexperienceSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobtitle: {
        type: String,
        required: true
    },
    startdate: {
        type: Date,
        required: true
    },
    enddate: {
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: true
    }
});

const Workexperience = mongoose.model('Workexperience', WorkexperienceSchema);


app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});