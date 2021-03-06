
export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
}

export const SEND_MESSAGE = 'SEND_MESSAGE';

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

export type ChatActionTypes = SendMessageAction;
