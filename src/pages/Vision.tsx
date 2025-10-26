import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMosaicStore } from '../stores/useMosaicStore';
import { usePlayerStore } from '../stores/usePlayerStore';
import { useRemoteControl } from '../hooks/useRemoteControl';
import { HLSPlayer } from '../components/HLSPlayer';
import { api } from '../services/api';

export const Vision = () => {
  const navigate = useNavigate();
  const { mosaics } = useMosaicStore();
  const { 
    config, 
    currentMosaicIndex, 
    isPlaying, 
    togglePlayback,
    nextMosaic,
    prevMosaic,
    updateConfig
  } = usePlayerStore();

  const [currentMosaic, setCurrentMosaicData] = useState<any>(null);
  const [timer, setTimer] = useState(config.rotationInterval);
  const timerRef = useRef<number | null>(null);

  const selectedMosaics = mosaics.filter(m => config.lastSelectedMosaics.includes(m.id));
  const activeMosaic = selectedMosaics[currentMosaicIndex];

  // Inicializa em modo play
  useEffect(() => {
    if (!isPlaying) {
      togglePlayback();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (activeMosaic) {
      api.getMosaic(activeMosaic.id).then(setCurrentMosaicData);
    }
  }, [activeMosaic]);

  // Timer de rotação
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setTimer(config.rotationInterval);

    if (!isPlaying || selectedMosaics.length <= 1) {
      return;
    }

    timerRef.current = window.setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          nextMosaic();
          return config.rotationInterval;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, currentMosaicIndex, selectedMosaics.length, config.rotationInterval]);

  useRemoteControl({
    onEnter: togglePlayback,
    onLeft: prevMosaic,
    onRight: nextMosaic,
    onBack: () => {
      if (config.maximizedStreamIndex !== null) {
        updateConfig({ maximizedStreamIndex: null });
      } else {
        navigate('/lounge');
      }
    },
    onUp: () => {
      if (config.maximizedStreamIndex !== null) {
        updateConfig({ maximizedStreamIndex: null });
      }
    },
    onDown: () => {
      // Maximiza primeira câmera ativa
      const activeStreamIndex = currentMosaic?.streams.findIndex((s: any) => s.name && s.alive !== false);
      if (activeStreamIndex >= 0) {
        updateConfig({ maximizedStreamIndex: activeStreamIndex });
      }
    },
  });

  if (!activeMosaic) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <p className="text-tv-lg text-white">Nenhum mosaico selecionado</p>
      </div>
    );
  }
  
  if (!currentMosaic) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mb-8"></div>
        <p className="text-tv-lg text-white">Carregando mosaico...</p>
        <p className="text-tv-sm text-gray-400 mt-2">{activeMosaic.title}</p>
      </div>
    );
  }

  const getGridClass = (type: string) => {
    switch (type) {
      case '1x7': return 'grid-cols-7 grid-rows-1';
      case '2x2': return 'grid-cols-2 grid-rows-2';
      case '3x3': return 'grid-cols-3 grid-rows-3';
      case '4x4': return 'grid-cols-4 grid-rows-4';
      default: return 'grid-cols-2 grid-rows-2';
    }
  };

  return (
    <div className={`fixed inset-0 bg-black transition-all duration-500 ${
      config.nightMode ? 'brightness-75 contrast-125' : 'brightness-100'
    }`}>
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-black bg-opacity-75 p-3">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h1 className="text-tv-lg font-bold">
              {activeMosaic.title} ({currentMosaicIndex + 1} de {selectedMosaics.length})
            </h1>
          </div>
          
          <div className="text-white text-right">
            <p className="text-tv-sm">
              {isPlaying ? '▶️' : '⏸️'} {isPlaying ? 'Reproduzindo' : 'Pausado'}
            </p>
          </div>
        </div>
        
        {/* Barra de Progresso */}
        {isPlaying && selectedMosaics.length > 1 && (
          <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(timer / config.rotationInterval) * 100}%` }}
            ></div>
          </div>
        )}
      </div>

      {/* Video Grid */}
      {config.maximizedStreamIndex !== null ? (
        // Câmera maximizada
        <div className="w-full h-full relative">
          {(() => {
            const stream = currentMosaic.streams[config.maximizedStreamIndex];
            const streamUrl = api.getStreamUrl(stream);
            return (
              <div className="w-full h-full relative bg-gray-900">
                {streamUrl && stream.alive !== false ? (
                  <HLSPlayer src={streamUrl} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-white text-tv-lg">
                      {!streamUrl ? 'URL inválida' : 'Stream offline'}
                    </p>
                  </div>
                )}
                
                {config.showStreamTitles && stream.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4">
                    <p className="text-white text-tv-sm">{stream.title}</p>
                  </div>
                )}
                
                <div className="absolute top-20 right-4 bg-black bg-opacity-75 p-2 rounded">
                  <p className="text-white text-tv-xs">Câmera {config.maximizedStreamIndex + 1}</p>
                </div>
              </div>
            );
          })()} 
        </div>
      ) : (
        // Grid normal
        <div className={`w-full h-full grid gap-1 ${getGridClass(currentMosaic.type)}`}>
          {currentMosaic.streams.map((stream: any, index: number) => {
            const streamUrl = api.getStreamUrl(stream);
            
            return (
              <div key={index} className="relative bg-gray-900">
                {streamUrl && stream.alive !== false ? (
                  <HLSPlayer src={streamUrl} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-white text-tv-sm">
                      {!streamUrl ? 'URL inválida' : stream.alive === false ? 'Stream offline' : 'Sem stream'}
                    </p>
                  </div>
                )}
                
                {config.showStreamTitles && stream.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-2">
                    <p className="text-white text-tv-xs truncate">{stream.title}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Controls hint */}
      <div className="absolute bottom-4 left-4 text-white text-tv-xs opacity-75">
        <p>ENTER: Play/Pause | ← →: Trocar mosaico | ↓: Maximizar | ↑: Voltar grid | BACK: Voltar</p>
      </div>
    </div>
  );
};