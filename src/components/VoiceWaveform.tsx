import React, { useEffect, useRef } from 'react';
import { VoiceState } from '../types';

interface VoiceWaveformProps {
  voiceState: VoiceState;
}

const VoiceWaveform: React.FC<VoiceWaveformProps> = ({ voiceState }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (voiceState !== 'listening' || !canvasRef.current) {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make canvas responsive
    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Animation variables
    const bars = 30;
    const barWidth = canvas.width / (bars * 2);
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < bars; i++) {
        const x = canvas.width / 2 + (i * barWidth * 2);
        const centerX = canvas.width / 2;
        
        // Mirror the bars on the left side
        const leftX = centerX - (x - centerX);
        
        // Random height for animation effect
        const height = Math.random() * (canvas.height * 0.8) + (canvas.height * 0.2);
        
        // Gradient for the bars
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#0D6EFD');
        gradient.addColorStop(1, '#20C997');
        
        ctx.fillStyle = gradient;
        
        // Draw the bars (both left and right sides)
        ctx.fillRect(x, (canvas.height - height) / 2, barWidth, height);
        ctx.fillRect(leftX - barWidth, (canvas.height - height) / 2, barWidth, height);
      }
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resize);
    };
  }, [voiceState]);

  if (voiceState !== 'listening') {
    return null;
  }

  return (
    <div className="mt-4 mb-6 w-full h-16">
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        aria-label="Voice waveform visualization"
      />
    </div>
  );
};

export default VoiceWaveform;