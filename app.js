const express = require('express');
const app = express();
const PORT = 3000;

// Rute
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Middleware
const logger = require('./middleware/logger');

// Middleware untuk parsing body dan logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Static file serving untuk gambar yang diunggah
app.use('/uploads', express.static('uploads'));

// Penggunaan router
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
