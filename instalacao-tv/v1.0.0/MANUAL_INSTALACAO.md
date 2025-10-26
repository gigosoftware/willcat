# Manual de Instalação - WillCat v1.0.0
## Sistema de Monitoramento para TV Samsung (Tizen OS)

---

## 📋 Pré-requisitos

### Hardware Necessário
- TV Samsung com Tizen OS (versão 6.0 ou superior)
- Pendrive formatado em FAT32 (mínimo 1GB)
- Computador para preparar os arquivos

### Verificar Compatibilidade da TV
1. Pressione o botão **Home** no controle remoto
2. Vá em **Configurações** > **Suporte** > **Sobre esta TV**
3. Verifique se a versão do Tizen é 6.0 ou superior

---

## 📦 Preparação do Pendrive

### Passo 1: Formatar o Pendrive
1. Conecte o pendrive no computador
2. Formate em **FAT32** (não use NTFS ou exFAT)
3. Nomeie o pendrive como "WILLCAT" (opcional)

### Passo 2: Copiar Arquivos
1. Copie **TODOS** os arquivos desta pasta (v1.0.0) para a **raiz** do pendrive
2. Estrutura final no pendrive deve ser:
```
PENDRIVE:/
├── index.html
├── tizen-manifest.xml
├── config.xml
├── icon.png
├── .env.example
├── assets/
│   ├── index-XXXXX.css
│   └── index-XXXXX.js
└── MANUAL_INSTALACAO.md (este arquivo)
```

---

## 🔧 Configuração (Opcional)

### Alterar PIN de Acesso
1. Renomeie `.env.example` para `.env`
2. Edite o arquivo `.env` no bloco de notas
3. Altere a linha: `VITE_PIN=883210` para o PIN desejado (6 dígitos)
4. Salve o arquivo

### Configuração Padrão
- **PIN**: 883210
- **API**: https://vigilancia.conectae.com.br/watcher/client-api/v3
- **Token**: KNxNtEM-nCP6J4p3yTpeB1AZ

---

## 📺 Instalação na TV Samsung

### Método 1: Instalação Direta (Recomendado)

#### Passo 1: Habilitar Modo Desenvolvedor
1. Na TV, pressione o botão **Home** no controle
2. Vá em **Apps** (Aplicativos)
3. Pressione **1 2 3 4 5** rapidamente no controle remoto
4. Uma janela "Developer Mode" aparecerá
5. Ative o **Developer Mode** (ON)
6. Digite o IP do seu computador (não é obrigatório para instalação via pendrive)
7. Reinicie a TV quando solicitado

#### Passo 2: Instalar via Pendrive
1. **Desligue a TV completamente** (tire da tomada)
2. Conecte o pendrive na **porta USB da TV**
3. Ligue a TV novamente
4. A TV detectará automaticamente o aplicativo
5. Siga as instruções na tela para instalar
6. Aguarde a mensagem "Instalação concluída"

#### Passo 3: Executar o Aplicativo
1. Pressione o botão **Home**
2. Vá em **Apps**
3. Procure por **WillCat**
4. Selecione e pressione **OK** para abrir

---

### Método 2: Instalação via Tizen Studio (Avançado)

Se o Método 1 não funcionar, use o Tizen Studio:

#### Passo 1: Instalar Tizen Studio
1. Baixe em: https://developer.tizen.org/development/tizen-studio/download
2. Instale o Tizen Studio no computador
3. Instale o pacote "TV Extensions"

#### Passo 2: Conectar TV ao Computador
1. TV e computador devem estar na **mesma rede Wi-Fi**
2. Na TV, habilite o **Developer Mode** (veja Método 1)
3. Anote o **IP da TV** (Configurações > Rede > Status da Rede)

#### Passo 3: Instalar via Tizen Studio
1. Abra o **Tizen Studio**
2. Vá em **Tools** > **Device Manager**
3. Clique em **Remote Device Manager**
4. Adicione a TV usando o IP anotado
5. Conecte à TV
6. Clique com botão direito na TV conectada
7. Selecione **Install Application**
8. Navegue até a pasta do pendrive e selecione todos os arquivos
9. Aguarde a instalação

---

## 🎮 Como Usar o Aplicativo

### Primeira Execução
1. Abra o aplicativo **WillCat**
2. Digite o PIN: **883210** (ou o PIN que você configurou)
3. Use os números do controle remoto

### Tela de Seleção (Lounge)
- **Setas**: Navegar entre mosaicos e botões
- **OK**: Selecionar/Desselecionar mosaico ou executar botão
- **Botões disponíveis**:
  - **Iniciar**: Inicia reprodução dos mosaicos selecionados
  - **Configurações**: Ajusta intervalo de rotação e modo noturno
  - **Selecionar Todos**: Marca todos os mosaicos
  - **Limpar Todos**: Desmarca todos os mosaicos

### Tela de Reprodução (Vision)
- **OK**: Play/Pause da rotação automática
- **Seta Esquerda**: Mosaico anterior
- **Seta Direita**: Próximo mosaico
- **Seta Baixo**: Maximizar câmera (foco na primeira câmera)
- **Seta Cima**: Voltar para grid completo
- **Return/Back**: Voltar para seleção de mosaicos

### Tela de Configurações
- **Setas**: Navegar entre opções
- **OK**: Alterar valores
- **Intervalo de Rotação**: 5s a 300s (5 minutos)
- **Modo Noturno**: Reduz brilho automaticamente (22h-6h)
- **Mostrar Títulos**: Exibe nomes das câmeras

---

## 🔍 Solução de Problemas

### Aplicativo não aparece na TV
- ✅ Verifique se o pendrive está formatado em FAT32
- ✅ Confirme que todos os arquivos foram copiados
- ✅ Tente desligar a TV da tomada por 30 segundos
- ✅ Verifique se o Developer Mode está ativado

### PIN não funciona
- ✅ Use os números do controle remoto, não as setas
- ✅ PIN padrão é: **883210**
- ✅ Se alterou o PIN, verifique o arquivo `.env`

### Mosaicos não aparecem
- ✅ Verifique conexão de internet da TV
- ✅ Teste acessar: https://vigilancia.conectae.com.br
- ✅ Aguarde alguns segundos para carregar

### Vídeos não reproduzem
- ✅ Verifique se a TV tem acesso à internet
- ✅ Teste a velocidade da conexão (mínimo 10 Mbps)
- ✅ Reinicie o aplicativo

### Rotação automática não funciona
- ✅ Selecione pelo menos 2 mosaicos
- ✅ Pressione OK para iniciar reprodução
- ✅ Verifique se não está em modo Pausado

---

## 📞 Suporte Técnico

### Informações de Contato
- **Email**: rogerio.gigo@conectae.com.br
- **Empresa**: Conectae
- **Versão**: 1.0.0

### Logs e Diagnóstico
Para reportar problemas, informe:
1. Modelo da TV Samsung
2. Versão do Tizen OS
3. Descrição detalhada do problema
4. Quando o problema ocorre (PIN, seleção, reprodução)

---

## 📝 Notas Importantes

### Segurança
- O PIN é apenas para controle de acesso local
- Não compartilhe o token da API publicamente
- Mantenha o firmware da TV atualizado

### Performance
- Recomendado: Internet de 20 Mbps ou superior
- Máximo de 16 câmeras simultâneas (grid 4x4)
- Rotação automática otimizada para 10-30 segundos

### Atualizações
- Novas versões estarão em pastas separadas (v1.1.0, v1.2.0, etc)
- Para atualizar, repita o processo de instalação com a nova versão
- Configurações personalizadas precisam ser reaplicadas

---

## ✅ Checklist de Instalação

- [ ] Pendrive formatado em FAT32
- [ ] Todos os arquivos copiados para o pendrive
- [ ] Developer Mode ativado na TV
- [ ] TV desligada da tomada antes de conectar pendrive
- [ ] Pendrive conectado na porta USB da TV
- [ ] TV ligada e aguardando instalação
- [ ] Aplicativo WillCat aparece em Apps
- [ ] PIN testado e funcionando
- [ ] Mosaicos carregando corretamente
- [ ] Vídeos reproduzindo normalmente

---

## 🎉 Instalação Concluída!

Parabéns! O WillCat está instalado e pronto para uso.

**Dica**: Adicione o WillCat aos favoritos da TV para acesso rápido!

---

*Manual criado em: Janeiro 2025*  
*Versão do Manual: 1.0.0*  
*Compatível com: Samsung Tizen OS 6.0+*
