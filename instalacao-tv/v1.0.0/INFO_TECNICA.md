# 🔧 Informações Técnicas - WillCat v1.0.0

## 📊 Especificações do Aplicativo

### Informações Gerais
- **Nome:** WillCat
- **Versão:** 1.0.0
- **Plataforma:** Samsung Tizen OS
- **Versão Mínima Tizen:** 6.0
- **Tipo:** Web Application (HTML5)
- **Orientação:** Landscape (Paisagem)

### Identificadores
- **Package ID:** KNxNtEM
- **Application ID:** KNxNtEM.willcat
- **Widget ID:** http://conectae.com.br/willcat

### Tecnologias Utilizadas
- **Frontend:** React 18.2.0
- **Roteamento:** React Router DOM 6.20.1
- **Estado:** Zustand 4.4.7
- **Streaming:** HLS.js 1.4.12
- **Estilização:** Tailwind CSS 3.3.5
- **Build:** Vite 5.0.0
- **Linguagem:** TypeScript 5.2.2

---

## 🌐 Configuração de API

### Endpoints
- **Base URL:** https://vigilancia.conectae.com.br/watcher/client-api/v3
- **Token:** KNxNtEM-nCP6J4p3yTpeB1AZ
- **Método de Autenticação:** Query Parameter (?token=...)

### APIs Utilizadas
- `GET /mosaics` - Lista todos os mosaicos
- `GET /mosaics/{id}` - Detalhes de um mosaico específico
- Streaming HLS via token de playback

### Formato de Stream
- **Protocolo:** HLS (HTTP Live Streaming)
- **Formato:** .m3u8
- **Codecs Suportados:** H.264, H.265, AAC
- **Autenticação:** Token por query parameter

---

## 💾 Armazenamento e Configuração

### Variáveis de Ambiente (.env)
```env
VITE_WATCHER_BASE_URL=https://vigilancia.conectae.com.br/watcher/client-api/v3
VITE_WATCHER_TOKEN=KNxNtEM-nCP6J4p3yTpeB1AZ
VITE_PIN=883210
```

### LocalStorage (Configurações do Usuário)
```javascript
{
  "rotationInterval": 10,        // segundos (5-300)
  "showStreamTitles": true,      // boolean
  "nightMode": false,            // boolean
  "lastSelectedMosaics": [],     // array de IDs
  "maximizedStreamIndex": null   // number ou null
}
```

---

## 🎨 Interface e UX

### Resoluções Suportadas
- **Full HD:** 1920x1080 (recomendado)
- **4K UHD:** 3840x2160
- **HD:** 1280x720

### Layouts de Mosaico
- **1x7:** 7 câmeras em linha
- **2x2:** 4 câmeras em grid
- **3x3:** 9 câmeras em grid
- **4x4:** 16 câmeras em grid

### Tamanhos de Fonte (TV-optimized)
- `tv-xs`: 0.875rem (14px)
- `tv-sm`: 1rem (16px)
- `tv-base`: 1.125rem (18px)
- `tv-lg`: 1.5rem (24px)
- `tv-xl`: 2rem (32px)
- `tv-2xl`: 2.5rem (40px)
- `tv-3xl`: 3rem (48px)

---

## ⚡ Performance

### Requisitos de Rede
- **Mínimo:** 10 Mbps
- **Recomendado:** 20 Mbps
- **Ideal:** 50+ Mbps (para múltiplas câmeras HD)

### Otimizações
- Lazy loading de mosaicos
- Cache de configurações no localStorage
- Debounce em navegação
- Preload de próximo mosaico

### Limites
- **Máximo de câmeras simultâneas:** 16 (grid 4x4)
- **Intervalo de rotação:** 5s a 300s (5 minutos)
- **Timeout de carregamento:** 30 segundos

---

## 🔒 Segurança e Permissões

### Permissões Tizen Necessárias
```xml
<tizen:privilege name="http://tizen.org/privilege/tv.inputdevice"/>
<tizen:privilege name="http://tizen.org/privilege/internet"/>
```

### Acesso de Rede
- **CORS:** Habilitado para domínio da API
- **Subdomínios:** Permitidos
- **Protocolo:** HTTPS obrigatório

### Controle de Acesso
- PIN de 6 dígitos (padrão: 883210)
- Sem autenticação de usuário (single-user app)
- Token de API embutido no build

---

## 📦 Estrutura de Arquivos

### Arquivos de Configuração
```
tizen-manifest.xml    - Manifesto do aplicativo Tizen
config.xml            - Configurações do widget W3C
.env                  - Variáveis de ambiente (opcional)
```

### Arquivos de Build
```
index.html            - Ponto de entrada HTML
assets/
  ├── index-*.css     - Estilos compilados (~12 KB)
  └── index-*.js      - JavaScript compilado (~700 KB)
icon.png              - Ícone do aplicativo (512x512)
```

### Tamanho Total
- **Descompactado:** ~720 KB
- **Compactado (gzip):** ~220 KB

---

## 🐛 Debug e Logs

### Console Logs (Produção)
- Logs removidos para otimização
- Apenas erros críticos são registrados

### Modo Desenvolvedor
Para habilitar logs detalhados:
1. Edite `src/services/api.ts`
2. Adicione `console.log` onde necessário
3. Rebuild: `npm run build`

### Ferramentas de Debug
- **Tizen Studio:** Device Manager + Web Inspector
- **Chrome DevTools:** Remote debugging via IP
- **Network Monitor:** Análise de requisições

---

## 🔄 Ciclo de Vida do Aplicativo

### Inicialização
1. Carrega configurações do localStorage
2. Exibe tela de PIN
3. Valida PIN (883210)
4. Busca mosaicos da API
5. Exibe tela de seleção (Lounge)

### Reprodução
1. Usuário seleciona mosaicos
2. Clica em "Iniciar"
3. Carrega detalhes do primeiro mosaico
4. Inicia reprodução automática
5. Timer de rotação ativa
6. Alterna entre mosaicos selecionados

### Finalização
1. Usuário pressiona Return/Back
2. Para reprodução
3. Limpa timers
4. Volta para seleção

---

## 📈 Métricas e Monitoramento

### Eventos Rastreáveis
- Tempo de carregamento de mosaicos
- Erros de streaming
- Frequência de troca de mosaicos
- Uso de funcionalidades (maximizar, pausar)

### Indicadores de Performance
- FPS (Frames Per Second): 30-60 fps
- Latência de stream: < 5 segundos
- Tempo de resposta da API: < 2 segundos

---

## 🔧 Manutenção e Suporte

### Atualização de Versão
1. Incrementar versão em `package.json`
2. Atualizar `tizen-manifest.xml`
3. Build: `npm run build`
4. Copiar para nova pasta (ex: v1.1.0)
5. Reinstalar nas TVs

### Backup de Configurações
Configurações são salvas no localStorage da TV.
Para backup manual, anote:
- PIN personalizado
- Intervalo de rotação
- Mosaicos favoritos

### Troubleshooting Avançado
- **Limpar cache:** Desinstalar e reinstalar app
- **Reset configurações:** Limpar localStorage via DevTools
- **Logs de rede:** Usar Tizen Studio Web Inspector

---

## 📞 Contato Técnico

**Desenvolvedor:** Conectae  
**Email:** rogerio.gigo@conectae.com.br  
**Repositório:** https://github.com/gigosoftware/willcat  
**Versão:** 1.0.0  
**Data de Build:** Janeiro 2025

---

*Documento técnico atualizado em: Janeiro 2025*
