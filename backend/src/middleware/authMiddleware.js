const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // const token = req.headers['authorization'];
  // if (!token) {
  //   return res.status(403).json({ message: 'No token provided' });
  // }
  // jwt.verify(token, 'cle_secrete_mouahahahahahaha', (err, decoded) => {
  //   if (err) {
  //     return res.status(500).json({ message: 'Failed to authenticate token' });
  //   }
  //   req.userId = decoded.userId;
  //   req.userRole = decoded.role;
  //   next();
  // });
  next();
  console.log("hello 2")
  return true;
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.userRole !== 'Admin') {
      return res.status(403).json({ message: 'Requires Admin Role' });
    }
    next();
  });
};

module.exports = {
  verifyToken,
  verifyAdmin
};
