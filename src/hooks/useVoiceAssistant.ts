import { useState, useCallback, useEffect } from 'react';

interface UseVoiceAssistantProps {
  onResult: (transcript: string) => void;
  onStart?: () => void;
  onEnd?: () => void;
}

export const useVoiceAssistant = ({ onResult, onStart, onEnd }: UseVoiceAssistantProps) => {
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize speech recognition
  const recognition = useCallback(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      return recognition;
    }
    return null;
  }, []);

  const startListening = useCallback(() => {
    const recognitionInstance = recognition();
    if (!recognitionInstance) {
      setError('Speech recognition is not supported in your browser');
      return;
    }

    recognitionInstance.onstart = () => {
      setIsListening(true);
      onStart?.();
    };

    recognitionInstance.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    };

    recognitionInstance.onerror = (event: any) => {
      setError(event.error);
      setIsListening(false);
      onEnd?.();
    };

    recognitionInstance.onend = () => {
      setIsListening(false);
      onEnd?.();
    };

    try {
      recognitionInstance.start();
    } catch (error) {
      setError('Error starting speech recognition');
    }
  }, [recognition, onResult, onStart, onEnd]);

  const stopListening = useCallback(() => {
    const recognitionInstance = recognition();
    if (recognitionInstance) {
      recognitionInstance.stop();
    }
    setIsListening(false);
    onEnd?.();
  }, [recognition, onEnd]);

  useEffect(() => {
    return () => {
      if (isListening) {
        stopListening();
      }
    };
  }, [isListening, stopListening]);

  return {
    isListening,
    error,
    startListening,
    stopListening
  };
};