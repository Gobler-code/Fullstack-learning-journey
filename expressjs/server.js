require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const noteRoutes = require('./routes/noteRoutes');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());

// routes
app.use('/api/notes', noteRoutes);

// error handler - always last
app.use(errorHandler);

// connect to DB and start server
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
});