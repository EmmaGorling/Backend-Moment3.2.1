const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error when trying to connect to MongoDB' + error);
});

