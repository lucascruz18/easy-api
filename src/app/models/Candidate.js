import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const CandidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    skype: {
      type: String,
      required: true,
    },
    telphone: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    portfolio: {
      type: String,
      required: false,
    },
    job_availability: {
      type: String,
      required: true,
    },
    best_time_to_work: {
      type: String,
      required: true,
    },
    hourly_wage: {
      type: String,
      required: true,
    },
    knowledge: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Knowledge',
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

CandidateSchema.plugin(mongoosePaginate);

export default mongoose.model('Candidate', CandidateSchema);
