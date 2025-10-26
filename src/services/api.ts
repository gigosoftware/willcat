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
        console.error('Erro na API:', response.status, response.statusText);
        throw new Error(`API Error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.mosaics || [];
    } catch (error) {
      console.error('Erro na API:', error);
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
      console.error('Erro ao buscar mosaico:', error);
      throw error;
    }
  },

  getStreamUrl(stream: { streaming_endpoint?: string; name?: string; playback_token?: string }): string {
    if (!stream.name) return '';
    
    // Método 1: Se tem streaming_endpoint, usa ele
    if (stream.streaming_endpoint && stream.playback_token) {
      const url1 = `${stream.streaming_endpoint}/${stream.name}/index.m3u8?token=${stream.playback_token}`;
      console.log('Método 1 (streaming_endpoint):', url1);
      return url1;
    }
    
    // Método 2: Usa base URL removendo /watcher/client-api/v3
    if (stream.playback_token) {
      const baseStreamUrl = BASE_URL.replace('/watcher/client-api/v3', '');
      const url2 = `${baseStreamUrl}/${stream.name}/index.m3u8?token=${stream.playback_token}`;
      console.log('Método 2 (base URL):', url2);
      return url2;
    }
    
    // Método 3: Usa base URL com /watcher/
    if (stream.playback_token) {
      const baseUrl = BASE_URL.replace('/client-api/v3', '');
      const url3 = `${baseUrl}/${stream.name}/index.m3u8?token=${stream.playback_token}`;
      console.log('Método 3 (watcher path):', url3);
      return url3;
    }
    
    return '';
  }
};