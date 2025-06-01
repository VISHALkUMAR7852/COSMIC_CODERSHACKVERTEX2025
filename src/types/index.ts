export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface HealthSession {
  id: string;
  messages: Message[];
  createdAt: Date;
}

export type VoiceState = 'idle' | 'listening' | 'processing';

export interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  password?: string;
}

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}