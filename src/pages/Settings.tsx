import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlayerStore } from '../stores/usePlayerStore';
import { useRemoteControl } from '../hooks/useRemoteControl';

const INTERVALS = [10, 15, 30, 45, 60, 120, 300];

export const Settings = () => {
  const navigate = useNavigate();
  const { config, updateConfig } = usePlayerStore();
  const [focusedIndex, setFocusedIndex] = useState(0);

  const settings = [
    {
      label: 'Intervalo de Rotação',
      value: `${config.rotationInterval}s`,
      action: () => {
        const currentIndex = INTERVALS.indexOf(config.rotationInterval);
        const nextIndex = (currentIndex + 1) % INTERVALS.length;
        updateConfig({ rotationInterval: INTERVALS[nextIndex] });
      }
    },
    {
      label: 'Mostrar Títulos',
      value: config.showStreamTitles ? 'Sim' : 'Não',
      action: () => {
        updateConfig({ showStreamTitles: !config.showStreamTitles });
      }
    },
    {
      label: 'Modo Noturno',
      value: config.nightMode ? 'Ativo' : 'Inativo',
      action: () => {
        updateConfig({ nightMode: !config.nightMode });
      }
    }
  ];

  const handleNavigation = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      setFocusedIndex(Math.max(0, focusedIndex - 1));
    } else {
      setFocusedIndex(Math.min(settings.length - 1, focusedIndex + 1));
    }
  };

  const handleEnter = () => {
    settings[focusedIndex].action();
  };

  useRemoteControl({
    onUp: () => handleNavigation('up'),
    onDown: () => handleNavigation('down'),
    onEnter: handleEnter,
    onBack: () => navigate('/lounge'),
  });

  return (
    <div className="fixed inset-0 bg-black p-8">
      <h1 className="text-tv-2xl font-bold text-white mb-8">
        Configurações
      </h1>
      
      <div className="space-y-6">
        {settings.map((setting, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl transition-all duration-200 flex justify-between items-center
              ${focusedIndex === index
                ? 'ring-4 ring-blue-500 bg-gray-800'
                : 'bg-gray-900'
              }
            `}
          >
            <span className="text-tv-lg text-white">{setting.label}</span>
            <span className="text-tv-lg text-blue-400">{setting.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 text-tv-sm text-gray-400">
        <p>Use ↑↓ para navegar, ENTER para alterar, BACK para voltar</p>
      </div>
    </div>
  );
};