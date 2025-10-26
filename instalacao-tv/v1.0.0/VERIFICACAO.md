# ✅ Checklist de Verificação - WillCat v1.0.0

Use este checklist para garantir que todos os arquivos necessários estão no pendrive antes de instalar na TV.

## 📋 Arquivos Obrigatórios

### Arquivos Principais
- [ ] `index.html` - Arquivo principal da aplicação
- [ ] `tizen-manifest.xml` - Manifesto do aplicativo Tizen
- [ ] `config.xml` - Configurações do widget
- [ ] `icon.png` - Ícone do aplicativo

### Pasta Assets
- [ ] `assets/` - Pasta contendo os recursos
- [ ] `assets/index-XXXXX.css` - Arquivo de estilos
- [ ] `assets/index-XXXXX.js` - Arquivo JavaScript principal

### Arquivos Opcionais
- [ ] `.env.example` - Exemplo de configuração (renomear para .env se quiser personalizar)
- [ ] `MANUAL_INSTALACAO.md` - Manual de instalação
- [ ] `VERIFICACAO.md` - Este arquivo

## 🔍 Verificação Rápida

### No Computador (antes de copiar)
```bash
# Conte os arquivos na pasta v1.0.0
# Deve ter pelo menos 7 arquivos/pastas
```

### No Pendrive (após copiar)
1. Abra o pendrive
2. Verifique se vê:
   - ✅ index.html
   - ✅ tizen-manifest.xml
   - ✅ config.xml
   - ✅ icon.png
   - ✅ Pasta "assets" com 2 arquivos dentro

## ⚠️ Problemas Comuns

### Arquivos não aparecem no pendrive
- Certifique-se de copiar para a **raiz** do pendrive
- Não crie subpastas adicionais
- Não copie a pasta "v1.0.0", copie o **conteúdo** dela

### Pendrive não é reconhecido pela TV
- Formate em **FAT32** (não NTFS ou exFAT)
- Use pendrive de até 32GB
- Teste em outra porta USB da TV

### Estrutura Correta
```
PENDRIVE:/ (raiz)
├── index.html
├── tizen-manifest.xml
├── config.xml
├── icon.png
├── .env.example
├── assets/
│   ├── index-Dr-0YPZU.css
│   └── index-DOP2s9P3.js
├── MANUAL_INSTALACAO.md
└── VERIFICACAO.md
```

### Estrutura INCORRETA ❌
```
PENDRIVE:/
└── v1.0.0/  ← NÃO FAÇA ISSO!
    ├── index.html
    └── ...
```

## 📏 Tamanho dos Arquivos

Tamanhos aproximados para referência:

- `index.html` - ~0.5 KB
- `tizen-manifest.xml` - ~1 KB
- `config.xml` - ~1 KB
- `icon.png` - ~5 KB
- `assets/index-XXXXX.css` - ~12 KB
- `assets/index-XXXXX.js` - ~700 KB

**Total aproximado:** ~720 KB (menos de 1 MB)

## ✅ Tudo Pronto?

Se todos os itens acima estão marcados, você está pronto para instalar!

Próximo passo: Leia o `MANUAL_INSTALACAO.md`

---

*Versão: 1.0.0*  
*Data: Janeiro 2025*
