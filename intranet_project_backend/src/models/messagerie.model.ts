import { Schema, model } from 'mongoose';

export interface Message {
  emeteur: string;
  text: string;
}

export interface Messagerie {
  nomConversation: string;
  messages: Message[];
}

const messageSchema = new Schema<Message>(
  {
    emeteur: {
      type: String,
      required: true,
      trim: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const messagerieSchema = new Schema<Messagerie>(
  {
    nomConversation:{
      type: String,
      required: true,
      trim: true
    },

    messages: {
      type: [messageSchema],
      required: true,
      validate: {
        validator: function (messages: Message[]) {
          return messages.length > 0;
        },
        message: 'There must be at least one message in the messagerie.',
      },
    },
  },
  {
    timestamps: true,
  }
);

export default model<Messagerie>('MessagerieSchema', messagerieSchema);