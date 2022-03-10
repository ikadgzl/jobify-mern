import mongoose from 'mongoose';

const jobSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide company name'],
      maxlegth: 50
    },

    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxlegth: 50
    },

    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending'
    },

    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'internship'],
      default: 'full-time'
    },

    jobLocation: {
      type: String,
      required: true,
      default: 'my-city'
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: ['true', 'Please provide user']
    }
  },
  { timestamps: true }
);

export default mongoose.model('Job', jobSchema);
