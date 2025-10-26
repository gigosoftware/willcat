# 🧪 Como Testar o WillCat

## 📋 Pré-requisitos

1. **Instalar Node.js** (versão 18 ou superior)
2. **Abrir terminal** na pasta do projeto

## 🚀 Passos para Testar

### 1. Instalar Dependências
```bash
cd /Users/gigo/Desktop/developers/willcat
npm install
```

### 2. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```

### 3. Abrir no Navegador
- Acesse: `http://localhost:5173`
- Use **F11** para tela cheia (simular TV)

## 🎮 Como Navegar

### Tela de PIN
- Digite: **883210**
- Use números do teclado
- **Backspace** para apagar

### Tela de Seleção (Lounge)
- **Setas** para navegar entre mosaicos
- **Enter** para selecionar/desselecionar
- Selecione vários mosaicos
- Navegue até "Iniciar" e pressione **Enter**

### Tela de Reprodução (Vision)
- **Enter**: Play/Pause
- **Seta Esquerda/Direita**: Trocar mosaico
- **Backspace**: Voltar para seleção

### Configurações
- **Setas Cima/Baixo**: Navegar opções
- **Enter**: Alterar configuração
- **Backspace**: Voltar

## 🔧 Problemas Conhecidos

### Erro 401 na API
- **Normal durante desenvolvimento**
- O app usa dados de exemplo (mock)
- 3 mosaicos de teste são criados automaticamente

### Vídeos de Teste
- Usa stream de teste público
- Todos os mosaicos mostram o mesmo vídeo
- Para produção, conectar à API real

## 📱 Funcionalidades Testadas

✅ **PIN de entrada** (883210)  
✅ **Navegação com teclado**  
✅ **Seleção múltipla de mosaicos**  
✅ **Player de vídeo HLS**  
✅ **Rotação automática**  
✅ **Configurações persistentes**  
✅ **Interface otimizada para TV**  

## 🎯 Próximos Passos

1. **Testar no navegador** ✅
2. **Corrigir API real** (se necessário)
3. **Empacotar para Tizen**
4. **Testar na TV Samsung**

## 🆘 Solução de Problemas

### Não carrega mosaicos
- Verifique se `npm run dev` está rodando
- Abra DevTools (F12) para ver erros
- Os dados mock devem aparecer mesmo com erro 401

### Navegação não funciona
- Certifique-se de clicar na tela primeiro
- Use as setas do teclado
- Verifique se está em foco na janela do navegador

### Vídeo não reproduz
- Alguns navegadores bloqueiam autoplay
- Clique na tela e pressione Enter
- Verifique conexão com internet