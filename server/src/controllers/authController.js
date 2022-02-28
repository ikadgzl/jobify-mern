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

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error('Provide all the credentials');
  }

  const existingUser = await User.findOne({ email }).select('+password');

  if (!existingUser || !(await existingUser.comparePasswords(password))) {
    throw new Error('Wrong credentials');
  }

  const token = existingUser.createJWT();

  delete existingUser.password;

  res.status(StatusCodes.OK).json({
    user: existingUser,
    token,
    location: existingUser.location
  });
};

export const update = async (req, res) => {
  const { email, name, lastName, location } = req.body;

  if (!email || !name || !lastName || !location) {
    throw new Error('Provide all the credentials');
  }

  const updatedUser = await User.findByIdAndUpdate(req.user, req.body, {
    new: true
  });

  const token = updatedUser.createJWT();

  res.status(StatusCodes.OK).json({
    user: updatedUser,
    token,
    location: updatedUser.location
  });
};
