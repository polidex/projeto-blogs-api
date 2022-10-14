const express = require('express');
const userRouter = require('./routes/user.router');
const loginRouter = require('./routes/login.router');
const postRouter = require('./routes/post.router');
const requiredFields = require('./middlewares/requiredFields');
const categoriesRouter = require('./routes/categories.router');

// ...

const app = express();

app.use(express.json());

app.use('/login', requiredFields, loginRouter);

app.use('/user', userRouter);

app.use('/categories', categoriesRouter);

app.use('/post', postRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
