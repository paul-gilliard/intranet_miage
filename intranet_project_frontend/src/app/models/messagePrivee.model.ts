export interface MessagePrive {
  emeteur: string;
  text: string;
}

export interface MessageriePrivee {
  messagesPrive: MessagePrive[];
  emeteur: string;
  recepteur: string;
}
