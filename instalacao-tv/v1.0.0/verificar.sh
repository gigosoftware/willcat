#!/bin/bash

# Script de Verificação - WillCat v1.0.0
# Verifica se todos os arquivos necessários estão presentes

echo "=========================================="
echo "  WillCat v1.0.0 - Verificação de Arquivos"
echo "=========================================="
echo ""

# Contador de erros
ERROS=0

# Função para verificar arquivo
verificar_arquivo() {
    if [ -f "$1" ]; then
        echo "✅ $1"
    else
        echo "❌ $1 - FALTANDO!"
        ERROS=$((ERROS + 1))
    fi
}

# Função para verificar pasta
verificar_pasta() {
    if [ -d "$1" ]; then
        echo "✅ $1/"
    else
        echo "❌ $1/ - FALTANDO!"
        ERROS=$((ERROS + 1))
    fi
}

echo "Verificando arquivos obrigatórios..."
echo ""

# Arquivos principais
verificar_arquivo "index.html"
verificar_arquivo "tizen-manifest.xml"
verificar_arquivo "config.xml"
verificar_arquivo "icon.png"

echo ""
echo "Verificando pasta assets..."
verificar_pasta "assets"

if [ -d "assets" ]; then
    CSS_COUNT=$(ls assets/*.css 2>/dev/null | wc -l)
    JS_COUNT=$(ls assets/*.js 2>/dev/null | wc -l)
    
    if [ $CSS_COUNT -gt 0 ]; then
        echo "✅ assets/*.css ($CSS_COUNT arquivo(s))"
    else
        echo "❌ assets/*.css - FALTANDO!"
        ERROS=$((ERROS + 1))
    fi
    
    if [ $JS_COUNT -gt 0 ]; then
        echo "✅ assets/*.js ($JS_COUNT arquivo(s))"
    else
        echo "❌ assets/*.js - FALTANDO!"
        ERROS=$((ERROS + 1))
    fi
fi

echo ""
echo "Verificando arquivos opcionais..."
verificar_arquivo ".env.example"
verificar_arquivo "MANUAL_INSTALACAO.md"
verificar_arquivo "VERIFICACAO.md"

echo ""
echo "=========================================="

if [ $ERROS -eq 0 ]; then
    echo "✅ SUCESSO! Todos os arquivos necessários estão presentes."
    echo ""
    echo "Próximos passos:"
    echo "1. Copie TODOS os arquivos desta pasta para a RAIZ do pendrive"
    echo "2. Leia o MANUAL_INSTALACAO.md"
    echo "3. Instale na TV Samsung"
else
    echo "❌ ERRO! Faltam $ERROS arquivo(s)."
    echo ""
    echo "Execute o build novamente:"
    echo "  npm run build"
fi

echo "=========================================="
echo ""
