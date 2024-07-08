const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')
const appointmentsRoutes = require('./routes/appointmentsRoutes')
const loginRoute = require('./routes/loginRoute')

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/auth/login', loginRoute)
app.use('/api/appointment', appointmentsRoutes)

// export NODE_ENV=development
    mongoose.connect("mongodb://localhost:27017/Service-Station")
        .then(() => console.log('MongoDB Compass Connected'))
        .catch((err) => console.log('MongoDB Compass connection error:', err))

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});