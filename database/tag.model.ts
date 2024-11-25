import { model, models, Schema } from "mongoose";

export type ITag = {
  name: string;
  questions: number;
};

const TagSchema = new Schema<ITag>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      minLength: 1,
      maxLength: 30,
    },
    questions: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Tag = models?.tag || model<ITag>("Tag", TagSchema);

export default Tag;
