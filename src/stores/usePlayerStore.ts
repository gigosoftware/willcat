import { create } from 'zustand';
import { AppConfig } from '../types';
import { loadConfig, saveConfig } from '../utils/config';

interface PlayerStore {
  config: AppConfig;
  currentMosaicIndex: number;
  isPlaying: boolean;
  updateConfig: (config: Partial<AppConfig>) => void;
  setCurrentMosaic: (index: number) => void;
  togglePlayback: () => void;
  nextMosaic: () => void;
  prevMosaic: () => void;
}

export const usePlayerStore = create<PlayerStore>((set, get) => {
  const config = loadConfig();
  return {
    config,
    currentMosaicIndex: 0,
    isPlaying: false,

  updateConfig: (newConfig) => {
    const config = { ...get().config, ...newConfig };
    set({ config });
    saveConfig(config);
  },

  setCurrentMosaic: (index) => set({ currentMosaicIndex: index }),

  togglePlayback: () => set((state) => ({ isPlaying: !state.isPlaying })),

  nextMosaic: () => {
    const { config } = get();
    const maxIndex = config.lastSelectedMosaics.length - 1;
    set((state) => ({
      currentMosaicIndex: state.currentMosaicIndex >= maxIndex ? 0 : state.currentMosaicIndex + 1
    }));
  },

  prevMosaic: () => {
    const { config } = get();
    const maxIndex = config.lastSelectedMosaics.length - 1;
    set((state) => ({
      currentMosaicIndex: state.currentMosaicIndex <= 0 ? maxIndex : state.currentMosaicIndex - 1
    }));
  },
  };
});