const express = require('express');
const userRouter = require('./routes/userRouter');

const app = express();
app.use(express.json());
app.use('/api/v1/users', userRouter);

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));
module.exports = app;
