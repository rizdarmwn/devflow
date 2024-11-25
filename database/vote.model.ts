import { model, models, Schema, Types } from "mongoose";

export type IVote = {
  userId: Types.ObjectId;
  contentId: Types.ObjectId;
  contentModel: "Question" | "Answer";
  type: "upvote" | "downvote";
};

const VoteSchema = new Schema<IVote>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    contentId: {
      type: Schema.Types.ObjectId,
      refPath: "contentModel",
      required: true,
    },
    contentModel: {
      type: String,
      required: true,
      enum: ["Question", "Answer"],
    },
    type: {
      type: String,
      enum: ["upvote", "downvote"],
    },
  },
  { timestamps: true },
);

const Vote = models?.vote || model<IVote>("Vote", VoteSchema);

export default Vote;
