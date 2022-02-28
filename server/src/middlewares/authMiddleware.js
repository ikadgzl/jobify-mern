import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer'))
    throw new Error('Not authorized');

  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload.userId;
    next();
  } catch (error) {
    throw new Error('Not authorized');
  }
};
