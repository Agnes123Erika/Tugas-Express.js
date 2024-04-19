function auth(req, res, next) {
    const userAuthenticated = true; // Implementasi sebenarnya perlu disesuaikan
  
    if (userAuthenticated) {
      next();
    } else {
      res.status(403).send('Akses Ditolak');
    }
  }
  
  module.exports = auth;
  