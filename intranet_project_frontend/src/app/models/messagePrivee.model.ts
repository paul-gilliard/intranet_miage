export interface MessagePrive {
  emeteur: string;
  text: string;
  recepteur: string;
  id: string;
  
}

export interface MessageriePrivee {
  messagesPrive: MessagePrive[];
  emeteur: string;
  recepteur: string;
  
}
