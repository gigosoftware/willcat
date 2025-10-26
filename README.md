# WillCat - Sistema de Monitoramento para TV Samsung (Tizen OS)

Sistema simplificado de monitoramento de câmeras otimizado para TVs Samsung com Tizen OS.

## 🚀 Desenvolvimento

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 🎮 Controles

### Desenvolvimento (Teclado)
- **Setas**: Navegação
- **Enter**: Confirmar/Play-Pause
- **Backspace**: Voltar
- **0-9**: Números (PIN)

### TV Samsung (Controle Remoto)
- **Setas direcionais**: Navegação
- **OK**: Confirmar/Play-Pause
- **Return**: Voltar
- **Números**: PIN

## 📱 Funcionalidades

1. **PIN de Entrada**: 883210
2. **Seleção de Mosaicos**: Grid navegável
3. **Player Fullscreen**: Rotação automática
4. **Configurações**: Intervalo e títulos

## 🔧 Empacotamento Tizen

```bash
# Build para Tizen
npm run build:tizen

# Instalar na TV
tizen install -n WillCat.wgt -t <TV_IP>
```

## 🌐 API

- **Base URL**: https://vigilancia.conectae.com.br/watcher/client-api/v3
- **Token**: KNxNtEM-nCP6J4p3yTpeB1AZ

### 🔍 Debug da API

Para verificar se a API está funcionando:

1. Abra o DevTools (F12)
2. Vá para a aba Console
3. Recarregue a página
4. Veja os logs de teste de conectividade

O sistema testa 4 métodos de autenticação:
- Query Parameter (?token=...)
- Bearer Token (Authorization: Bearer ...)
- X-Token Header (X-Token: ...)
- Basic Auth (Authorization: Basic ...)