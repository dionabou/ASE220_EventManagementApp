require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const path     = require('path');

const authRoutes  = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const userRoutes  = require('./routes/userRoutes');

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser:    true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => {
  console.error('❌ DB connection error:', err);
  process.exit(1);
});


app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, '../public')));


app.use('/api/auth',   authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/users',  userRoutes);


app.get(/^[^.]+$/, (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});