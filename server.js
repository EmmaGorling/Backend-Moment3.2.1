const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.DB_PORT || 3000;
app.use(cors());
app.use(express.json());

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

// Routes
app.get('/api', async (req, res) => {
    res.json({message: 'Welcome to my API!'})
});

app.get('/workexperiences', async (req, res) => {
    try {
        let result = await Workexperience.find({});

        return res.json(result);
    } catch(error) {
        return res.status(500).json(error);
    }
});


app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});