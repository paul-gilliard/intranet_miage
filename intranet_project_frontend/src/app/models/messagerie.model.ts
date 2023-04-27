export interface Messagerie {
    nomConversation: string;
    messages: Message[];
}

export interface Message {
    emeteur: string;
    text: string;
}