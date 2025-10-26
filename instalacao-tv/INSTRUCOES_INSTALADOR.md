# 👨‍💻 Instruções para o Instalador

## 📍 Você está aqui: `/instalacao-tv/`

Este diretório contém todas as versões prontas para instalar nas TVs Samsung da empresa.

---

## 🎯 O que fazer agora?

### 1️⃣ Escolha a versão
Abra a pasta da versão que deseja instalar:
- **v1.0.0** ← Versão atual (Janeiro 2025)

### 2️⃣ Leia o manual
Dentro da pasta da versão, abra:
- **GUIA_RAPIDO.md** - Para instalação rápida (10 min)
- **MANUAL_INSTALACAO.md** - Para instruções detalhadas

### 3️⃣ Prepare o pendrive
- Formate em FAT32
- Copie **TODOS** os arquivos da pasta v1.0.0 para a **RAIZ** do pendrive
- Execute `verificar.sh` para confirmar que está tudo certo

### 4️⃣ Instale na TV
Siga as instruções do manual escolhido.

---

## 📂 Estrutura

```
instalacao-tv/
├── README.md                    ← Informações gerais
├── INSTRUCOES_INSTALADOR.md    ← Este arquivo
└── v1.0.0/                      ← Versão 1.0.0
    ├── GUIA_RAPIDO.md          ← Comece aqui! ⭐
    ├── MANUAL_INSTALACAO.md    ← Manual completo
    ├── VERIFICACAO.md          ← Checklist
    ├── INFO_TECNICA.md         ← Detalhes técnicos
    ├── NOTAS_VERSAO.md         ← Changelog
    ├── verificar.sh            ← Script de verificação
    ├── index.html              ← App principal
    ├── tizen-manifest.xml      ← Manifesto Tizen
    ├── config.xml              ← Configuração
    ├── icon.png                ← Ícone
    ├── .env.example            ← Configuração opcional
    └── assets/                 ← Recursos (CSS + JS)
```

---

## ⚡ Instalação Rápida (Resumo)

1. **Pendrive FAT32** com arquivos da v1.0.0
2. **TV Samsung**: Ativar Developer Mode (Apps → 12345)
3. **Instalar**: Desligar TV → Conectar pendrive → Ligar TV
4. **Usar**: Apps → WillCat → PIN: 883210

---

## 🆘 Precisa de Ajuda?

- Leia o **MANUAL_INSTALACAO.md** completo
- Verifique **VERIFICACAO.md** para checklist
- Consulte **INFO_TECNICA.md** para detalhes técnicos

**Suporte:** rogerio.gigo@conectae.com.br

---

## ✅ Próximos Passos

1. [ ] Abrir pasta **v1.0.0**
2. [ ] Ler **GUIA_RAPIDO.md**
3. [ ] Preparar pendrive
4. [ ] Instalar na TV
5. [ ] Testar aplicativo

---

**Boa instalação! 🚀**
