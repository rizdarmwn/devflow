import { model, models, Schema, Types } from "mongoose";

export type IAccount = {
  userId: Types.ObjectId;
  password?: string;
  name: string;
  image?: string;
  provider: string;
  providerAccountId: string;
};

const AccountSchema = new Schema<IAccount>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    password: { type: String },
    name: { type: String, required: true },
    image: { type: String },
    provider: { type: String, required: true },
    providerAccountId: { type: String, required: true },
  },
  { timestamps: true },
);

const Account = models?.account || model<IAccount>("Account", AccountSchema);

export default Account;
