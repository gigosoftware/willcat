// Teste de conectividade da API Flussonic Watcher

const BASE_URL = 'https://vigilancia.conectae.com.br/watcher/client-api/v3';
const TOKEN = 'KNxNtEM-nCP6J4p3yTpeB1AZ';

export const testApiConnection = async () => {
  console.log('🔍 Testando conectividade da API Flussonic Watcher...');
  console.log('URL:', BASE_URL);
  console.log('Token:', TOKEN.substring(0, 10) + '...');

  const methods = [
    {
      name: 'Query Parameter',
      url: `${BASE_URL}/mosaics?token=${TOKEN}`,
      options: {}
    },
    {
      name: 'Bearer Token',
      url: `${BASE_URL}/mosaics`,
      options: {
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    },
    {
      name: 'X-Token Header',
      url: `${BASE_URL}/mosaics`,
      options: {
        headers: {
          'X-Token': TOKEN,
          'Content-Type': 'application/json'
        }
      }
    },
    {
      name: 'Basic Auth',
      url: `${BASE_URL}/mosaics`,
      options: {
        headers: {
          'Authorization': `Basic ${btoa(`token:${TOKEN}`)}`,
          'Content-Type': 'application/json'
        }
      }
    }
  ];

  for (const method of methods) {
    try {
      console.log(`\n📡 Testando: ${method.name}`);
      const response = await fetch(method.url, method.options);
      
      console.log(`Status: ${response.status} ${response.statusText}`);
      
      if (response.ok) {
        const data = await response.json();
        console.log('✅ SUCESSO!', data);
        return { success: true, method: method.name, data };
      } else {
        const errorText = await response.text();
        console.log('❌ Falhou:', errorText.substring(0, 200));
      }
    } catch (error) {
      console.log('❌ Erro de rede:', error);
    }
  }

  console.log('\n🚫 Todos os métodos falharam. Usando dados mock.');
  return { success: false, method: null, data: null };
};