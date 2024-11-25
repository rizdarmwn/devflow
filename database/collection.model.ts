import { model, models, Schema, Types } from "mongoose";

export type ICollection = {
  userId: Types.ObjectId;
  questions: Types.ObjectId;
};

const CollectionSchema = new Schema<ICollection>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    questions: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
  },
  { timestamps: true },
);

const Collection =
  models?.collection || model<ICollection>("Collection", CollectionSchema);

export default Collection;
