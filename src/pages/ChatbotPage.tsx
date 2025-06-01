import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faRobot, faUser } from '@fortawesome/free-solid-svg-icons';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: new Date().toISOString() + '-user',
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: new Date().toISOString() + '-bot',
        text: `I received your message: "${inputValue}". I am still under development, but I'm learning to help with health queries!`,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);

    setInputValue('');
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] bg-gray-900 flex items-center justify-center">
      <div className="flex flex-col w-full max-w-xl h-[calc(100vh-6rem)] bg-gray-100 shadow-lg rounded-lg mt-4 mb-4 sm:mt-8 sm:mb-8">
        {/* Header */}
        <header className="bg-green-600 text-white p-4 shadow-md rounded-t-lg">
          <h1 className="text-xl font-semibold flex items-center">
            <FontAwesomeIcon icon={faRobot} className="mr-2" /> Health AI Chatbot
          </h1>
        </header>

        {/* Prompt/Intro Section */}
        <div className="bg-green-50 border-l-4 border-green-400 p-4 text-green-900 text-sm sm:text-base font-medium">
          <p>Welcome! Ask any health-related question in your language. This AI assistant is here to help with medical queries, symptoms, and wellness advice. Please do not share personal or emergency information.</p>
        </div>

        {/* Message Display Area */}
        <div className="flex-grow p-4 space-y-4 overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow ${ 
                  msg.sender === 'user'
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-800'
                }`}
              >
                <div className="flex items-center mb-1">
                  <FontAwesomeIcon 
                    icon={msg.sender === 'user' ? faUser : faRobot} 
                    className={`mr-2 h-4 w-4 ${msg.sender === 'user' ? 'text-white' : 'text-green-500'}`} 
                  />
                  <span className="text-xs font-medium">
                    {msg.sender === 'user' ? 'You' : 'Health Bot'}
                  </span>
                </div>
                <p className="text-sm">{msg.text}</p>
                <p className={`text-xs text-right mt-1 ${msg.sender === 'user' ? 'text-green-200' : 'text-gray-400'}`}>
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white p-4 border-t border-gray-200 flex items-center rounded-b-lg">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your health query..."
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-600 text-white p-2 rounded-r-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;