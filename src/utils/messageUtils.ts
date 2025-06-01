import { v4 as uuidv4 } from 'uuid';
import { Message } from '../types';

export const createUserMessage = (content: string): Message => ({
  id: uuidv4(),
  role: 'user',
  content,
  timestamp: new Date()
});

export const createAssistantMessage = (content: string): Message => ({
  id: uuidv4(),
  role: 'assistant',
  content,
  timestamp: new Date()
});

// Simple persistence of chat history to localStorage
export const saveMessages = (messages: Message[]) => {
  try {
    localStorage.setItem('healthAssistantMessages', JSON.stringify(messages));
  } catch (error) {
    console.error('Failed to save messages to localStorage:', error);
  }
};

export const loadMessages = (): Message[] => {
  try {
    const saved = localStorage.getItem('healthAssistantMessages');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Failed to load messages from localStorage:', error);
    return [];
  }
};