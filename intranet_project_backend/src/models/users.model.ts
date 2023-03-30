
import mongoose from 'mongoose';
import { Schema, model, Document } from 'mongoose';

interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

const User = model<UserDocument>('User', userSchema);

export default User;