import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faRobot, faUser, faMicrophone, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { generateAIResponse } from '../services/aiService';
import { Message } from '../types';
import { v4 as uuidv4 } from 'uuid';

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add welcome message
    if (messages.length === 0) {
      setMessages([{
        id: uuidv4(),
        role: 'assistant',
        content: "Hello! I'm your AI Health Assistant. I can help you with general health questions, symptom information, and finding healthcare resources. How can I assist you today?",
        timestamp: new Date()
      }]);
    }
  }, []);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: uuidv4(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await generateAIResponse([...messages, userMessage]);
      
      const assistantMessage: Message = {
        id: uuidv4(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: uuidv4(),
        role: 'assistant',
        content: "I apologize, but I'm having trouble processing your request. Please try again.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-col w-full max-w-4xl h-[calc(100vh-8rem)] bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Header */}
        <header className="bg-gradient-to-r from-green-600 to-green-500 text-white p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <FontAwesomeIcon icon={faRobot} className="text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Health AI Assistant</h1>
              <p className="text-green-100 text-sm">Available 24/7 for your health queries</p>
            </div>
          </div>
        </header>

        {/* Message Display Area */}
        <div className="flex-grow p-6 overflow-y-auto bg-gray-50">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex max-w-[80%] ${
                    msg.role === 'user'
                      ? 'bg-green-600 text-white rounded-t-xl rounded-l-xl'
                      : 'bg-white text-gray-800 rounded-t-xl rounded-r-xl shadow-md'
                  } p-4`}
                >
                  <div className={`flex-shrink-0 ${msg.role === 'user' ? 'order-last ml-3' : 'mr-3'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.role === 'user' ? 'bg-green-500' : 'bg-gray-100'
                    }`}>
                      <FontAwesomeIcon 
                        icon={msg.role === 'user' ? faUser : faRobot}
                        className={msg.role === 'user' ? 'text-white' : 'text-green-600'}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                    <p className={`text-xs mt-2 ${msg.role === 'user' ? 'text-green-200' : 'text-gray-400'}`}>
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center space-x-4">
            <button
              className="flex-shrink-0 text-gray-400 hover:text-green-600 transition-colors"
              title="Voice input (coming soon)"
            >
              <FontAwesomeIcon icon={faMicrophone} className="text-xl" />
            </button>
            <div className="flex-grow relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your health question..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                disabled={isLoading}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className={`flex-shrink-0 ${
                isLoading || !inputValue.trim()
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              } text-white rounded-full p-3 transition-colors`}
            >
              {isLoading ? (
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              ) : (
                <FontAwesomeIcon icon={faPaperPlane} />
              )}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            For medical emergencies, please call your local emergency services immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;