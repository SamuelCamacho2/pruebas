const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/simplejwt', {
    useNewUrlParser: true,
}).then(db => console.log('DB is connected'))