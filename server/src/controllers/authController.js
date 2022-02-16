import User from '../models/User.js';
import StatusCodes from 'http-status-codes';

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error('Provide all the credentials');
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error('User already exists');
  }

  const user = await User.create(req.body);
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastname,
      location: user.location
    },
    token,
    location: user.location
  });
};

export const login = async (req, res) => {};

export const update = async (req, res) => {};
