function auth(req, res, next) {
    const userAuthenticated = true;
  
    if (userAuthenticated) {
      next();
    } else {
      res.status(403).send('Akses Ditolak');
    }
  }
  
  module.exports = auth;
  