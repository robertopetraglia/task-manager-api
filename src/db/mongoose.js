const mongoose = require('mongoose');

//mongoose.set('debug', true)

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})