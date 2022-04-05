import mongoose from "mongoose";
import { giftSchema } from "./Gift.js";

const personSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, max: 254 },
    birthDate: { type: Date, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      //default: , // Not sure what to set this as for "Current User"
    },
    sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    gifts: [giftSchema],
    imageUrl: { type: String, max: 1024 },
  },
  {
    timestamps: true,
  }
);

const Model = mongoose.model("Person", personSchema);

export default Model;
