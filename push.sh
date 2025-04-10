#!/bin/bash

# Carrega variáveis do .env
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

COMMIT_MESSAGE="init"
VERSION_TYPE=""

# Parse dos argumentos
for arg in "$@"; do
  case $arg in
    --commit=*)
      COMMIT_MESSAGE="${arg#*=}"
      shift
      ;;
    --version=*)
      VERSION_TYPE="${arg#*=}"
      shift
      ;;
    *)
      ;;
  esac
done

REPO="https://$GH_TOKEN@github.com/amarkes/truff-login.git"

# Se foi passado um tipo de versão, atualiza o package.json
if [[ "$VERSION_TYPE" =~ ^(patch|minor|major)$ ]]; then
  echo "Atualizando versão ($VERSION_TYPE)..."
  npm version $VERSION_TYPE --no-git-tag-version
fi

# Commit e push
git config user.name "amarkes"
git config user.email "tmowna@gmail.com"
git add .
git commit -m "$COMMIT_MESSAGE"
git push "$REPO" HEAD:main


# Se foi passado um tipo de versão, atualiza o package.json
if [[ "$VERSION_TYPE" =~ ^(patch|minor|major)$ ]]; then
  echo "Atualizando versão ($VERSION_TYPE)..."
  git push "$REPO" --tags
fi


# Apenas commit normal
# bash push.sh --commit="ajuste no layout"

# Commit com incremento de versão patch 1.0.1
# bash push.sh --commit="nova funcionalidade" --version=patch

# Commit com incremento minor 0.1.0
# bash push.sh --commit="vários ajustes" --version=minor

# Commit com incremento 1.0.0
# bash push.sh --commit="vários ajustes" --version=major