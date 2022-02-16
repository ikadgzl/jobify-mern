import { StatusCodes } from 'http-status-codes';

// TODO: Implement custom error classes
export const errorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: err.message });

    return;
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
};
