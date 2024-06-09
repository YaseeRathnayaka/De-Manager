const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/users')
const auth = require('./routes/login')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())

app.use('/users', users)
app.use('/auth', auth)

// export NODE_ENV=development
if (app.get('env') === 'development') {
    mongoose.connect('mongodb://localhost:27017/Service-Station')
        .then(() => console.log('MongoDB Compass Connected'))
        .catch((err) => console.log('MongoDB Compass connection error:', err))
}else{
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('MongoDB Atlas Connected'))
        .catch((err) => console.log('MongoDB Atlas connection error:', err))
}

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});