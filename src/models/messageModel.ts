import * as mongoose from 'mongoose';
import { User } from './userModel';
import { IMessageModel } from 'shared/types/models/message';

const Schema = mongoose.Schema;

const MessageSchema = new Schema<IMessageModel>({
  content: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

MessageSchema.post('remove', (message: IMessageModel) => {
  User.findById(message.owner)
    .then(user => {
      if (user) {
        user.messages.push(message);
        user.save();
      }
    });
});

export const Message = mongoose.model<IMessageModel>('Message', MessageSchema);
