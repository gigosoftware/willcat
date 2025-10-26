import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRemoteControl } from '../hooks/useRemoteControl';

const CORRECT_PIN = import.meta.env.VITE_PIN || '883210';

export const PinEntry = () => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleNumber = (num: string) => {
    if (pin.length < 6) {
      const newPin = pin + num;
      setPin(newPin);
      
      if (newPin.length === 6) {
        if (newPin === CORRECT_PIN) {
          navigate('/lounge');
        } else {
          setError(true);
          setTimeout(() => {
            setPin('');
            setError(false);
          }, 1000);
        }
      }
    }
  };

  const handleBack = () => {
    setPin(pin.slice(0, -1));
    setError(false);
  };

  useRemoteControl({
    onNumber: handleNumber,
    onBack: handleBack,
  });

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <h1 className="text-tv-3xl font-bold text-white mb-12">
        WillCat
      </h1>
      <p className="text-tv-base text-gray-400 mb-8">
        Digite o PIN para acessar
      </p>
      
      <div className="flex gap-4 mb-8">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-16 h-16 rounded-lg border-4 flex items-center justify-center transition-colors
              ${pin.length > i 
                ? error ? 'border-red-500 bg-red-500' : 'border-blue-500 bg-blue-500'
                : 'border-gray-700'
              }
            `}
          >
            {pin.length > i && (
              <span className="text-tv-base text-white">●</span>
            )}
          </div>
        ))}
      </div>

      {error && (
        <p className="text-tv-sm text-red-500">PIN incorreto!</p>
      )}
    </div>
  );
};