import { model, models, Schema, Types } from "mongoose";

export type ITagQuestion = {
  tagId: Types.ObjectId;
  questionId: Types.ObjectId;
};

const TagQuestionSchema = new Schema<ITagQuestion>(
  {
    tagId: {
      type: Schema.Types.ObjectId,
      ref: "Tag",
      required: true,
    },
    questionId: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
  },
  { timestamps: true },
);

const TagQuestion =
  models?.tagquestion || model<ITagQuestion>("TagQuestion", TagQuestionSchema);

export default TagQuestion;
