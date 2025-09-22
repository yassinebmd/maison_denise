import dotenv from 'dotenv';
dotenv.config();

export const verifyToken = (req, res, next) =>{
    const token =  req.get('authorization');
    const JWT_SECRET = process.env.JWT_SECRET;
    
    if (!token) return res.status(403).send('Token is required');
  
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).send('Invalid token');
      
      req.user = decoded;
      next();
    });
  }
  