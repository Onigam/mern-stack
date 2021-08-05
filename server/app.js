const createError = require('http-errors');
const express = require('express');
const paginate = require('express-paginate');
const cors = require('cors');

const app = express();

const posts = require('./routes/post.routes');
const auth = require('./auth');

auth.registerPassportStrategies();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//setup pagination middleware
app.use(paginate.middleware(10, 50));

app.get('/', (req, res, next) => {
    res.send("Hello from the API");
});

app.use('/api/posts', posts);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.status(err.statusCode || 500).json(err.message || 'Server Error');
});

module.exports = app;
