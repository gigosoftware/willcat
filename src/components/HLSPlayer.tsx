import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface HLSPlayerProps {
  src: string;
  className?: string;
  muted?: boolean;
}

export const HLSPlayer = ({ src, className = '', muted = true }: HLSPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!videoRef.current || !src) return;

    setLoading(true);
    setError(false);
    const video = videoRef.current;

    if (hlsRef.current) {
      hlsRef.current.destroy();
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        maxBufferLength: 30,
        maxMaxBufferLength: 60,
        maxBufferSize: 60 * 1000 * 1000,
      });

      hlsRef.current = hls;
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.muted = muted;
        setLoading(false);
        setError(false);
        video.play().catch(console.error);
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.error('HLS Fatal Error:', data);
          setError(true);
          setLoading(false);
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.muted = muted;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(console.error);
      });
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [src, muted]);

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className={`w-full h-full object-contain ${className}`}
        muted={muted}
        playsInline
      />
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <p className="text-white text-sm">Erro no stream</p>
        </div>
      )}
    </div>
  );
};