import mongoose, { Schema, model } from 'mongoose';

interface User extends Document {
  name: string;
  email: string;
  password: string;
  promo: string;
  statut: string; //FI ou FA (pour stage)
}

const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^([\w-.]+@etu\.u-bordeaux\.fr)$/, 'Please use a valid @etu.u-bordeaux.fr email address']
    },
    password: {
      type: String,
      minlength: 8,
      trim: true
    },
    promo: {
      type: String,
      trim: true,
    },
    statut: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre<User>('save', async function (next) {
  const user = this;
  const emailExists = mongoose.models.User.findOne({ email: user.email });
  if (emailExists) {
    const error = new Error('Email already exists');
    next(error);
  }
  next();
});

export default model<User>('User', userSchema);