const express = require('express')
const mongoose = require('mongoose')

const app = express();
app.use(express.json())

// export NODE_ENV=development
if (app.get('env') === 'development') {
    mongoose.connect('mongodb://localhost:27017/Sevice-Station')
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