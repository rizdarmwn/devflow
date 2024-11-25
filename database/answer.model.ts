import { model, models, Schema, Types } from "mongoose";

export type IAnswer = {
  content: string;
  userId: Types.ObjectId;
  votes: {
    upvotes: Types.ObjectId[];
    downvotes: Types.ObjectId[];
  };
  questionId: Types.ObjectId;
};

const AnswerSchema = new Schema<IAnswer>(
  {
    content: {
      type: String,
      required: true,
      minLength: 30,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
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
    questionId: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
  },
  { timestamps: true },
);

const Answer = models?.answer || model<IAnswer>("Answer", AnswerSchema);

export default Answer;
