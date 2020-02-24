import * as mongoose from 'mongoose';

import { IUserModel } from './userModel';
import { ChatModel } from './chatModel';

export interface Message {
  content: string;
  sender: IUserModel;
  owner: IUserModel | ChatModel;
}

const { Schema } = mongoose;

const MessageSchema = new Schema<MessageModel>({
  id: Schema.Types.ObjectId,
  content: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    refPath: 'onModel',
  },
  sender: {
    type: Schema.Types.ObjectId,
    refPath: 'onModel',
  },
  onModel: {
    type: String,
    required: true,
    enum: ['User', 'Chat'],
  },
});

export interface MessageModel extends Message, mongoose.Document { }
export const Message = mongoose.model<MessageModel>('Message', MessageSchema);
