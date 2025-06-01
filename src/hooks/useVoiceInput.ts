import { useState, useEffect, useCallback } from 'react';
import { VoiceState } from '../types';

const useVoiceInput = (onTranscript: (text: string) => void) => {
  const [voiceState, setVoiceState] = useState<VoiceState>('idle');
  const [error, setError] = useState<string | null>(null);
  
  // Mock implementation since we can't use the actual Web Speech API in this environment
  const toggleVoiceInput = useCallback(() => {
    if (voiceState === 'idle') {
      setVoiceState('listening');
      
      // Simulate voice recognition after a delay
      setTimeout(() => {
        const mockTranscripts = [
          "I've been having headaches for the past week.",
          "What are the symptoms of type 2 diabetes?",
          "My child has a fever of 101 degrees, what should I do?",
          "Can you tell me about high blood pressure?",
        ];
        
        const randomTranscript = mockTranscripts[Math.floor(Math.random() * mockTranscripts.length)];
        onTranscript(randomTranscript);
        setVoiceState('idle');
      }, 3000);
    } else if (voiceState === 'listening') {
      setVoiceState('idle');
    }
  }, [voiceState, onTranscript]);

  // In a real implementation, we would:
  // 1. Check for browser support
  // 2. Initialize SpeechRecognition API
  // 3. Handle start/stop of voice recording
  // 4. Process results and handle errors
  
  useEffect(() => {
    // Check if browser supports speech recognition
    // This is a mock check since we're in a controlled environment
    const isSpeechRecognitionSupported = true;
    
    if (!isSpeechRecognitionSupported) {
      setError('Your browser does not support voice input. Please try using Chrome or Edge.');
    }
    
    return () => {
      // Cleanup speech recognition if needed
      if (voiceState === 'listening') {
        setVoiceState('idle');
      }
    };
  }, []);

  return {
    voiceState,
    toggleVoiceInput,
    error
  };
};

export default useVoiceInput;