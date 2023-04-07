export interface Messagerie {
    nomConversation: String;
    messages: Message[];
}

export interface Message {
    emeteur: String;
    text: String;
}