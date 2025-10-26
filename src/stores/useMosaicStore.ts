import { create } from 'zustand';
import { Mosaic } from '../types';
import { api } from '../services/api';
import { testApiConnection } from '../utils/apiTest';

interface MosaicStore {
  mosaics: Mosaic[];
  selectedMosaics: number[];
  loading: boolean;
  error: string | null;
  fetchMosaics: () => Promise<void>;
  toggleMosaic: (id: number) => void;
  clearSelection: () => void;
  selectAll: () => void;
}

export const useMosaicStore = create<MosaicStore>((set, get) => ({
  mosaics: [],
  selectedMosaics: [],
  loading: false,
  error: null,

  fetchMosaics: async () => {
    set({ loading: true, error: null });
    
    // Testa conectividade da API primeiro
    const apiTest = await testApiConnection();
    
    try {
      const mosaics = await api.getMosaics();
      set({ mosaics, loading: false });
    } catch (error) {
      set({ error: 'Erro ao carregar mosaicos', loading: false });
    }
  },

  toggleMosaic: (id: number) => {
    const { selectedMosaics } = get();
    const isSelected = selectedMosaics.includes(id);
    set({
      selectedMosaics: isSelected
        ? selectedMosaics.filter(m => m !== id)
        : [...selectedMosaics, id]
    });
  },

  clearSelection: () => set({ selectedMosaics: [] }),

  selectAll: () => {
    const { mosaics } = get();
    set({ selectedMosaics: mosaics.map(m => m.id) });
  },
}));