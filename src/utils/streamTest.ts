// Teste de URLs de stream

const BASE_URL = 'https://vigilancia.conectae.com.br/watcher/client-api/v3';

export const testStreamUrls = (stream: any) => {
  if (!stream.name || !stream.playback_token) {
    console.log('❌ Stream sem name ou playback_token');
    return [];
  }

  const urls = [
    // Método 1: streaming_endpoint (se existir)
    stream.streaming_endpoint ? 
      `${stream.streaming_endpoint}/${stream.name}/index.m3u8?token=${stream.playback_token}` : null,
    
    // Método 2: Base URL sem /watcher/client-api/v3
    `${BASE_URL.replace('/watcher/client-api/v3', '')}/${stream.name}/index.m3u8?token=${stream.playback_token}`,
    
    // Método 3: Base URL só removendo /client-api/v3
    `${BASE_URL.replace('/client-api/v3', '')}/${stream.name}/index.m3u8?token=${stream.playback_token}`,
    
    // Método 4: Usando /streamer/ path
    `${BASE_URL.replace('/watcher/client-api/v3', '/streamer')}/${stream.name}/index.m3u8?token=${stream.playback_token}`,
    
    // Método 5: Usando mesmo domínio, path diferente
    `https://vigilancia.conectae.com.br/${stream.name}/index.m3u8?token=${stream.playback_token}`,
    
    // Método 6: Com /hls/ path
    `https://vigilancia.conectae.com.br/hls/${stream.name}/index.m3u8?token=${stream.playback_token}`,
  ].filter(Boolean);

  console.log(`🔍 Testando URLs para stream: ${stream.name}`);
  urls.forEach((url, i) => {
    console.log(`URL ${i + 1}:`, url);
  });

  return urls;
};