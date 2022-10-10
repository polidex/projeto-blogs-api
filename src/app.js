const express = require('express');
const userRouter = require('./routes/user.router');

// ...

const app = express();

app.use(express.json());

app.use('/user', userRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
