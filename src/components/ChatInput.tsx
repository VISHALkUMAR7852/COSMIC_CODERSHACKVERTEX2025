import React, { useState } from 'react';
import { Send, Mic, MicOff } from 'lucide-react';
import { VoiceState } from '../types';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  voiceState: VoiceState;
  onToggleVoice: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  onSendMessage, 
  voiceState, 
  onToggleVoice 
}) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md">
      <button
        type="button"
        onClick={onToggleVoice}
        className={`p-2 rounded-full ${
          voiceState === 'listening' 
            ? 'bg-red-100 text-red-600 animate-pulse' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        } transition-colors`}
        aria-label={voiceState === 'listening' ? 'Stop listening' : 'Start voice input'}
      >
        {voiceState === 'listening' ? (
          <MicOff className="h-6 w-6" />
        ) : (
          <Mic className="h-6 w-6" />
        )}
      </button>
      
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={
          voiceState === 'listening' 
            ? 'Listening...' 
            : 'Type your health question...'
        }
        className="flex-1 p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
        disabled={voiceState === 'listening'}
      />
      
      <button
        type="submit"
        disabled={!message.trim() && voiceState !== 'listening'}
        className={`p-2 rounded-full ${
          !message.trim() && voiceState !== 'listening'
            ? 'bg-gray-100 text-gray-400'
            : 'bg-primary text-white hover:bg-primary/90'
        } transition-colors`}
        aria-label="Send message"
      >
        <Send className="h-6 w-6" />
      </button>
    </form>
  );
};

export default ChatInput;