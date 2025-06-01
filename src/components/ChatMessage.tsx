import React from 'react';
import { User, Bot } from 'lucide-react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div 
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div 
        className={`flex max-w-[85%] md:max-w-[70%] ${
          isUser 
            ? 'bg-primary text-white rounded-l-lg rounded-tr-lg' 
            : 'bg-white text-gray-800 rounded-r-lg rounded-tl-lg shadow-md'
        } p-4`}
      >
        <div className={`flex-shrink-0 ${isUser ? 'order-last ml-3' : 'mr-3'}`}>
          {isUser ? (
            <User className="h-6 w-6 text-white" />
          ) : (
            <Bot className="h-6 w-6 text-primary" />
          )}
        </div>
        <div className="flex-1">
          <p className={`${isUser ? 'text-white' : 'text-gray-800'}`}>
            {message.content}
          </p>
          <p className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;