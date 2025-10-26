# 🚀 Deploy para TV Samsung (Tizen)

## 📋 Pré-requisitos

1. **Tizen Studio** instalado
2. **TV Samsung** em modo desenvolvedor
3. **Certificado** de desenvolvedor criado

## 🔧 Passos para Deploy

### 1. Build do Projeto
```bash
npm run build
```

### 2. Preparar Arquivos Tizen
```bash
# Copiar config.xml para dist
cp public/config.xml dist/
cp tizen-manifest.xml dist/

# Criar ícone (opcional)
# Adicionar icon.png na pasta dist/
```

### 3. Criar Certificado (primeira vez)
```bash
tizen certificate -a WillCatCert -p 1234 -c BR -s SP -ct "Sao Paulo" -o "Conectae" -n "Rogerio Gigo" -e rogerio.gigo@conectae.com.br
```

### 4. Criar Perfil de Segurança
```bash
tizen security-profiles add -n WillCatProfile -a ~/.tizen-studio-data/keystore/author/WillCatCert.p12 -p 1234
```

### 5. Empacotar Aplicação
```bash
tizen package -t wgt -s WillCatProfile -- dist
```

### 6. Conectar com a TV
```bash
# Descobrir IP da TV (Settings > General > Network > Network Status)
sdb connect <TV_IP>:26101

# Verificar conexão
sdb devices
```

### 7. Instalar na TV
```bash
tizen install -n WillCat.wgt -t <TV_IP>:26101
```

### 8. Executar na TV
```bash
tizen run -p KNxNtEM.willcat -t <TV_IP>:26101
```

## 🔍 Debug na TV

### Ver Logs
```bash
sdb shell dlogutil WillCat
```

### Desinstalar
```bash
tizen uninstall -p KNxNtEM.willcat -t <TV_IP>:26101
```

### Listar Apps
```bash
tizen list -t <TV_IP>:26101
```

## 📱 Configurar TV Samsung

### 1. Ativar Modo Desenvolvedor
1. Vá em **Settings** > **Support** > **Device Care**
2. **Self Diagnosis** > **Reset Smart Hub**
3. Digite **12345** quando solicitado
4. Aceite os termos
5. Vá em **Apps** e pressione **12345** no controle
6. Ative **Developer Mode**
7. Digite IP do seu Mac
8. Reinicie a TV

### 2. Permitir Conexões
- **Settings** > **General** > **Network**
- **Expert Settings** > **Power On with Mobile**
- Ativar todas as opções de rede

## ✅ Checklist Final

- [ ] Build funcionando (`npm run build`)
- [ ] Certificado criado
- [ ] TV em modo desenvolvedor
- [ ] TV e Mac na mesma rede
- [ ] Conexão sdb funcionando
- [ ] App empacotado (.wgt)
- [ ] App instalado na TV
- [ ] Controle remoto funcionando

## 🆘 Problemas Comuns

### Erro de Certificado
- Verificar se certificado foi criado corretamente
- Usar senha correta (1234)

### TV não conecta
- Verificar se estão na mesma rede
- Reiniciar TV e tentar novamente
- Verificar firewall do Mac

### App não instala
- Verificar se config.xml está correto
- Verificar se TV está em modo desenvolvedor
- Tentar desinstalar versão anterior

### Controle não funciona
- Verificar se hwkey-event está habilitado
- Testar com teclado USB na TV primeiro

## 🎯 Resultado Final

Após seguir todos os passos, o WillCat estará rodando nativamente na TV Samsung com:

- ✅ **Navegação com controle remoto**
- ✅ **Reprodução de vídeo em tempo real**
- ✅ **Interface otimizada para TV**
- ✅ **Rotação automática de mosaicos**
- ✅ **Performance nativa Tizen**