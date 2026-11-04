import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const AudioController: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  // Play peaceful resonant chime (Chamomile sound)
  const playCalmChime = (frequency = 528) => {
    if (isMuted) return;
    try {
      initAudio();
      const ctx = audioCtxRef.current;
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      // Soft gentle attack and slow exponential decay
      gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.08);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.6);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.7);
    } catch {
      // Audio autoplay policy fallback
    }
  };

  const toggleSound = () => {
    if (isMuted) {
      setIsMuted(false);
      setTimeout(() => playCalmChime(528), 100);
    } else {
      setIsMuted(true);
    }
  };

  useEffect(() => {
    // Attach subtle chime to interactive buttons
    const handleButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('button, a')) {
        playCalmChime(660);
      }
    };

    window.addEventListener('click', handleButtonClick);
    return () => window.removeEventListener('click', handleButtonClick);
  }, [isMuted]);

  return (
    <button
      onClick={toggleSound}
      title={isMuted ? 'Enable calming soundscapes' : 'Mute soundscapes'}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-botanical-teal/20 bg-botanical-ivory/80 backdrop-blur-md hover:bg-botanical-sand-light transition-all duration-300 text-botanical-charcoal group"
    >
      {isMuted ? (
        <>
          <VolumeX className="w-3.5 h-3.5 text-botanical-charcoal/60 group-hover:text-botanical-teal transition-colors" />
          <span className="hidden sm:inline text-[11px] text-botanical-charcoal/70">Audio: Off</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5 text-botanical-teal animate-pulse" />
          <span className="hidden sm:inline text-[11px] text-botanical-teal font-semibold">Sound: Live</span>
          <Sparkles className="w-3 h-3 text-botanical-yellow" />
        </>
      )}
    </button>
  );
};
