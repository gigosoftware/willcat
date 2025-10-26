import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMosaicStore } from '../stores/useMosaicStore';
import { usePlayerStore } from '../stores/usePlayerStore';
import { useRemoteControl } from '../hooks/useRemoteControl';

export const Lounge = () => {
  const navigate = useNavigate();
  const { mosaics, selectedMosaics, loading, fetchMosaics, toggleMosaic, clearSelection, selectAll } = useMosaicStore();
  const { updateConfig } = usePlayerStore();
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    fetchMosaics();
  }, [fetchMosaics]);

  const totalItems = mosaics.length + 4; // +4 for Start, Settings, Select All, Clear All buttons

  const handleNavigation = (direction: 'up' | 'down' | 'left' | 'right') => {
    const cols = 4;
    const rows = Math.ceil(totalItems / cols);
    const currentRow = Math.floor(focusedIndex / cols);
    const currentCol = focusedIndex % cols;

    switch (direction) {
      case 'up':
        if (currentRow > 0) {
          setFocusedIndex(Math.max(0, focusedIndex - cols));
        }
        break;
      case 'down':
        if (currentRow < rows - 1) {
          setFocusedIndex(Math.min(totalItems - 1, focusedIndex + cols));
        }
        break;
      case 'left':
        if (currentCol > 0) {
          setFocusedIndex(focusedIndex - 1);
        }
        break;
      case 'right':
        if (currentCol < cols - 1 && focusedIndex < totalItems - 1) {
          setFocusedIndex(focusedIndex + 1);
        }
        break;
    }
  };

  const handleEnter = () => {
    if (focusedIndex < 4) {
      // Botões (0-3)
      if (focusedIndex === 0) {
        // Start button
        if (selectedMosaics.length > 0) {
          updateConfig({ lastSelectedMosaics: selectedMosaics });
          navigate('/vision');
        }
      } else if (focusedIndex === 1) {
        // Settings button
        navigate('/settings');
      } else if (focusedIndex === 2) {
        // Select All button
        selectAll();
      } else if (focusedIndex === 3) {
        // Clear All button
        clearSelection();
      }
    } else {
      // Mosaicos (4+)
      toggleMosaic(mosaics[focusedIndex - 4].id);
    }
  };

  useRemoteControl({
    onUp: () => handleNavigation('up'),
    onDown: () => handleNavigation('down'),
    onLeft: () => handleNavigation('left'),
    onRight: () => handleNavigation('right'),
    onEnter: handleEnter,
    onBack: () => navigate('/'),
  });

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mb-8"></div>
        <p className="text-tv-lg text-white">Carregando mosaicos...</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black p-8">
      <h1 className="text-tv-2xl font-bold text-white mb-8">
        Selecione os Mosaicos
      </h1>
      
      {/* Botões de Ação */}
      <div className="grid grid-cols-4 gap-8 mb-8">
        <button
          className={`p-8 rounded-xl transition-all duration-200
            ${focusedIndex === 0
              ? 'ring-4 ring-blue-500 scale-105 bg-green-800'
              : 'bg-green-900'
            }
            ${selectedMosaics.length === 0 ? 'opacity-50' : ''}
          `}
          disabled={selectedMosaics.length === 0}
        >
          <h3 className="text-tv-lg font-bold text-white">
            Iniciar ({selectedMosaics.length})
          </h3>
        </button>
        
        <button
          className={`p-8 rounded-xl transition-all duration-200
            ${focusedIndex === 1
              ? 'ring-4 ring-blue-500 scale-105 bg-gray-800'
              : 'bg-gray-900'
            }
          `}
        >
          <h3 className="text-tv-lg font-bold text-white">
            Configurações
          </h3>
        </button>
        
        <button
          className={`p-8 rounded-xl transition-all duration-200
            ${focusedIndex === 2
              ? 'ring-4 ring-blue-500 scale-105 bg-purple-800'
              : 'bg-purple-900'
            }
          `}
        >
          <h3 className="text-tv-lg font-bold text-white">
            Selecionar Todos
          </h3>
        </button>
        
        <button
          className={`p-8 rounded-xl transition-all duration-200
            ${focusedIndex === 3
              ? 'ring-4 ring-blue-500 scale-105 bg-red-800'
              : 'bg-red-900'
            }
          `}
        >
          <h3 className="text-tv-lg font-bold text-white">
            Limpar Todos
          </h3>
        </button>
      </div>
      
      {mosaics.length === 0 && (
        <div className="text-center py-16">
          <p className="text-tv-lg text-gray-400 mb-4">Nenhum mosaico encontrado</p>
          <p className="text-tv-sm text-gray-500">Verifique a conexão com a API</p>
        </div>
      )}
      
      {/* Grid de Mosaicos */}
      <div className="grid grid-cols-4 gap-8">
        {mosaics.sort((a, b) => a.title.localeCompare(b.title)).map((mosaic, index) => {
          const isSelected = selectedMosaics.includes(mosaic.id);
          const isFocused = focusedIndex === index + 4;
          
          return (
            <div
              key={mosaic.id}
              className={`p-8 rounded-xl transition-all duration-200 cursor-pointer min-h-[200px] flex items-center justify-center
                ${isFocused
                  ? 'ring-4 ring-blue-500 scale-105'
                  : ''
                }
                ${isSelected
                  ? 'bg-blue-800 border-2 border-blue-400'
                  : 'bg-gray-900 hover:bg-gray-800'
                }
              `}
            >
              <h3 className="text-tv-lg font-bold text-white text-center">
                {mosaic.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};