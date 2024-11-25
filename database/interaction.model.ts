import { model, models, Schema, Types } from "mongoose";

export type IInteraction = {
  userId: Types.ObjectId;
  action: "upvote" | "downvote" | "answer" | "question" | "view";
  actionId: Types.ObjectId;
  actionType: "Question" | "Answer";
};

const InteractionSchema = new Schema<IInteraction>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    action: {
      type: String,
      required: true,
      enum: ["upvote", "downvote", "answer", "question", "view"],
    },
    actionId: {
      type: Schema.Types.ObjectId,
      refPath: "actionType",
      required: true,
    },
    actionType: {
      type: String,
      required: true,
      enum: ["Question", "Answer"],
    },
  },
  { timestamps: true },
);

const Interaction =
  models?.interaction || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
