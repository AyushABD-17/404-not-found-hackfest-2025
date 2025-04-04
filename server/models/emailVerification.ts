import bcrypt from "bcryptjs";
import mongoose, { Document, Schema } from "mongoose";
import { Model } from "mongoose";

const emailRegexPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export interface IEmailVerification extends Document {
  email: string;
  otp: string;
  name?: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}

const emailVerificationSchema: Schema<IEmailVerification> = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please enter your email"],
    lowercase: true,
    validate: {
      validator: function (value: string) {
        return emailRegexPattern.test(value);
      },
      message: "please enter a valid email",
    },
    unique: true,
  },
  otp:{
    type:String,
    required: true,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
}, { timestamps: true });


const emailVerificationModel: Model<IEmailVerification> = mongoose.model(
  "EmailVerification",
  emailVerificationSchema
);

export default emailVerificationModel;
