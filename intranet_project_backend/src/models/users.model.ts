
import mongoose from 'mongoose';
import { Schema, model, Document } from 'mongoose';

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
      // required: true,
      trim: true,
    },
    email: {
      // TO DO rajouter une contrainte REGEX pour accepter que les adresses universitaires
      type: String,
      //required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      //required: true,
      minlength: 8,
      trim: true
    },
    promo: {
      type: String,
      //required: true,
      trim: true,
    },
    statut: {
      type: String,
      //required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// const User = model<UserDocument>('User', userSchema);
userSchema.pre<User>('save', async function (next) {
  const user = this;
  const emailExists = await mongoose.models.User.findOne({ email: user.email });
  if (emailExists) {
    const error = new Error('Email already exists');
    next(error);
  }
  next();
});

export default model<User>('User', userSchema);


// export default User;