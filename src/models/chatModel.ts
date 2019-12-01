import * as mongoose from 'mongoose';
import { IMessageModel } from './messageModel';

export interface IChat {
  messages: IMessageModel[];
  type?: 'main-chat' | 'private-chat';
}

const Schema = mongoose.Schema;

const ChatSchema = new Schema<IChatModel>({
  id: Schema.Types.ObjectId,
  type: { type: String, default: 'private-chat' },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message',
  }],
});

export interface IChatModel extends IChat, mongoose.Document { }
export const Chat = mongoose.model<IChatModel>('Chat', ChatSchema);
