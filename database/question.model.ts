import { model, models, Schema, Types } from "mongoose";

type IQuestion = {
  title: string;
  content: string;
  author: Types.ObjectId;
  views: number;
  votes: {
    upvotes: Types.ObjectId[];
    downvotes: Types.ObjectId[];
  };
  answers: number;
  tags: Types.ObjectId[];
};

const QuestionSchema = new Schema<IQuestion>(
  {
    title: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 100,
    },
    content: {
      type: String,
      required: true,
      minLength: 30,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    votes: {
      upvotes: {
        type: [{ type: Schema.Types.ObjectId, unique: true, ref: "User" }],
        default: [],
      },
      downvotes: {
        type: [{ type: Schema.Types.ObjectId, unique: true, ref: "User" }],
        default: [],
      },
    },
    answers: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [{ type: Schema.Types.ObjectId, required: true, ref: "Tag" }],
      default: [],
    },
  },
  { timestamps: true },
);

const Question =
  models?.question || model<IQuestion>("Question", QuestionSchema);

export default Question;
