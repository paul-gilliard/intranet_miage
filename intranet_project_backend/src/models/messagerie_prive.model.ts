import { Schema, model, Document } from 'mongoose';

export interface MessagePrive {
  emeteur: string;
  text: string;
}

export interface Messagerie {
  messages: MessagePrive[];
  emeteur: string;
  recepteur: string;
}

const messageSchema = new Schema<MessagePrive>(
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

const messageriePriveSchema = new Schema<Messagerie>(
  {
    messages: {
      type: [messageSchema],
      required: true,
      validate: {
        validator: function (messages: MessagePrive[]) {
          return messages.length > 0;
        },
        message: 'There must be at least one message in the messagerie.',
      },
    },
    emeteur: {
        type: String,
        required: true,
        trim: true,
      },
    recepteur: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<Messagerie>('messageriePriveSchema', messageriePriveSchema);
