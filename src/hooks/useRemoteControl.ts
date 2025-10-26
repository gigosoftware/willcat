import { useEffect } from 'react';

interface RemoteControlHandlers {
  onUp?: () => void;
  onDown?: () => void;
  onLeft?: () => void;
  onRight?: () => void;
  onEnter?: () => void;
  onBack?: () => void;
  onNumber?: (num: string) => void;
}

export const useRemoteControl = (handlers: RemoteControlHandlers) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          handlers.onUp?.();
          break;
        case 'ArrowDown':
          e.preventDefault();
          handlers.onDown?.();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handlers.onLeft?.();
          break;
        case 'ArrowRight':
          e.preventDefault();
          handlers.onRight?.();
          break;
        case 'Enter':
          e.preventDefault();
          handlers.onEnter?.();
          break;
        case 'Backspace':
          e.preventDefault();
          handlers.onBack?.();
          break;
        default:
          if (e.key >= '0' && e.key <= '9') {
            e.preventDefault();
            handlers.onNumber?.(e.key);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlers]);
};