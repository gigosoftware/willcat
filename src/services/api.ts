import { Mosaic } from '../types';

const BASE_URL = import.meta.env.VITE_WATCHER_BASE_URL;
const TOKEN = import.meta.env.VITE_WATCHER_TOKEN;

export const api = {
  async getMosaics(): Promise<Mosaic[]> {
    try {
      // Método 1: Query parameter (mais comum no Flussonic)
      let response = await fetch(`${BASE_URL}/mosaics?token=${TOKEN}`);
      
      // Se falhar, tenta método 2: Header Authorization
      if (!response.ok) {
        response = await fetch(`${BASE_URL}/mosaics`, {
          headers: {
            'Authorization': `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
          }
        });
      }
      
      // Se falhar, tenta método 3: Header X-Token
      if (!response.ok) {
        response = await fetch(`${BASE_URL}/mosaics`, {
          headers: {
            'X-Token': TOKEN,
            'Content-Type': 'application/json'
          }
        });
      }
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.mosaics || [];
    } catch (error) {
      return [];
    }
  },

  async getMosaic(id: number): Promise<Mosaic> {
    try {
      // Método 1: Query parameter
      let response = await fetch(`${BASE_URL}/mosaics/${id}?token=${TOKEN}`);
      
      // Se falhar, tenta header Authorization
      if (!response.ok) {
        response = await fetch(`${BASE_URL}/mosaics/${id}`, {
          headers: {
            'Authorization': `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
          }
        });
      }
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar mosaico ${id}: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      throw error;
    }
  },

  getStreamUrl(stream: { streaming_endpoint?: string; name?: string; playback_token?: string }): string {
    if (!stream.name || !stream.playback_token) return '';
    
    if (stream.streaming_endpoint) {
      return `${stream.streaming_endpoint}/${stream.name}/index.m3u8?token=${stream.playback_token}`;
    }
    
    const baseStreamUrl = BASE_URL.replace('/watcher/client-api/v3', '');
    return `${baseStreamUrl}/${stream.name}/index.m3u8?token=${stream.playback_token}`;
  }
};