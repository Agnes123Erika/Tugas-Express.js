const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const logger = require('./middleware/logger');

app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/uploads', express.static('uploads'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
