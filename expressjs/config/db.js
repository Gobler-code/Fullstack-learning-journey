const mongoose = require("mongoose");

const connectDB = () =>
    {return mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected');
      
    })
    .catch((error) => {
        console.log('MongoDB connection failed', error);
        process.exit(1); // stop the server completely
    })}

    module.exports = connectDB;