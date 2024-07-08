const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')
const appointmentsRoutes = require('./routes/appointmentsRoutes')
const loginRoute = require('./routes/loginRoute')

const app = express();
app.use(cors({
    exposedHeaders: ['x-auth-token']
}));
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/auth/login', loginRoute)
app.use('/api/appointment', appointmentsRoutes)

// export NODE_ENV=development
    mongoose.connect("mongodb+srv://raveeshadilanka1204:Raveesha@cluster0.ayy3eww.mongodb.net/Service_Station")
        .then(() => console.log('MongoDB Compass Connected'))
        .catch((err) => console.log('MongoDB Compass connection error:', err))

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});