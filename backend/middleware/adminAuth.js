module.exports = function adminCheck(req, res, next) {
  const adminKey = req.headers['x-admin-key']; // custom header
  
  if (!adminKey) {
    return res.status(401).json({ 
      success: false,
      message: 'Access denied: Admin key required' 
    });
  }
  
  if (adminKey !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ 
      success: false,
      message: 'Access denied: Invalid admin key' 
    });
  }
  
  next();
};
