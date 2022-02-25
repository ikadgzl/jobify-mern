import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name'],
      minlength: 3,
      maxleegth: 20,
      trim: true
    },

    email: {
      type: String,
      required: [true, 'Please provide email'],
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: 'Please provide VALID email'
      }
    },

    password: {
      type: String,
      required: [true, 'Please provide password'],
      minlength: 6,
      select: false
    },

    lastName: {
      type: String,
      maxlength: 20,
      trim: true,
      default: 'lastName'
    },

    location: {
      type: String,
      maxlength: 20,
      trim: true,
      default: 'myLocation'
    }
  },
  { timestamps: true }
);

UserSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME
  });
};

UserSchema.methods.comparePasswords = async function (password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model('User', UserSchema);
