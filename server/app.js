const createError = require('http-errors');
const express = require('express');
const paginate = require('express-paginate');
const cors = require('cors');

const app = express();

const postRoutes = require('./routes/post.routes');
const authRoutes = require('./routes/auth.routes');
const auth = require('./auth');

app.use(cors());

auth.registerPassportStrategies();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setup pagination middleware
app.use(paginate.middleware(10, 50));

app.get('/', (req, res, next) => {
    res.send("Hello from the API");
});

app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.status(err.statusCode || 500).json(err.message || 'Server Error');
});

module.exports = app;
