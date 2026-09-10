# Care Plus Neuro360

Aplicativo mobile de saúde premium para pacientes neurodivergentes (TEA, TDAH, dislexia) e seus cuidadores. Design minimalista, acessível e sem sobrecarga sensorial.

- O protótipo está acessível em: https://drift-steep-47544393.figma.site
- Uma versão explicativa do protótipo pode ser visualizada em: https://salles-fa.github.io/Neuro360/Neuro360_prototipo_navegavel_Discovery%20Care%20Plus.html

## Visão Geral

O Care Plus Neuro360 oferece:

- **5 telas navegáveis** via barra de navegação inferior: Início, Jornada, Rede Especializada, Equipe e Perfil
- **Botão SOS Crise** (FAB) com exercício de respiração guiada
- **Design acessível** com fontes de alta legibilidade (Atkinson Hyperlegible e Nunito), paleta de cores calmantes e amplo espaço em branco
- **Moldura de celular centralizada** e responsiva, simulando a experiência mobile no browser

## Stack

| Camada | Tecnologia |
|---|---|
| UI | React 19 |
| Estilização | Tailwind CSS v4 |
| Build | Vite 8 |
| Linguagem | TypeScript 5.7 |
| Formatação | oxfmt |

## Estrutura do Projeto

```
src/
├── main.tsx              # Entrypoint React
├── App.tsx               # Componente raiz e orquestração de navegação
├── index.css             # Tokens de tema, fontes e import do Tailwind
├── components/
│   ├── PhoneFrame.tsx    # Moldura de celular centralizada
│   ├── BottomNav.tsx     # Barra de navegação inferior (5 abas)
│   ├── SOSFab.tsx        # Botão flutuante SOS Crise
│   ├── SOSOverlay.tsx    # Tela de suporte com exercício de respiração
│   └── Icon.tsx          # Ícones SVG inline
└── screens/
    ├── HomeScreen.tsx    # Início — seleção de humor e resumo do dia
    ├── JourneyScreen.tsx # Jornada — linha do tempo e registros
    ├── NetworkScreen.tsx # Rede Especializada — busca de profissionais
    ├── TeamScreen.tsx    # Equipe — cuidadores e terapeutas
    └── ProfileScreen.tsx # Perfil — configurações e preferências
```

## Pré-requisitos

- **Node.js** >= 20
- **pnpm** >= 9 (recomendado) ou npm/yarn

> O projeto usa `.mise.toml` para fixar as versões do Node.js e pnpm. Se você usa [mise](https://mise.jdx.dev/), execute `mise install` antes de continuar.

## Desenvolvimento Local

```bash
# 1. Instalar dependências
pnpm install

# 2. Iniciar o servidor de desenvolvimento com hot reload
pnpm dev
```

O servidor sobe em `http://localhost:5173` por padrão (ou na porta definida pela variável de ambiente `$PORT`). Alterações nos arquivos fonte são refletidas automaticamente no browser.

## Build de Produção

```bash
# Gerar os artefatos otimizados em /dist
pnpm build

# Pré-visualizar o build de produção localmente
pnpm preview
```

Os arquivos gerados ficam em `dist/` e podem ser servidos por qualquer servidor de arquivos estáticos (Nginx, Apache, Netlify, Vercel, etc.).

## Formatação de Código

```bash
pnpm format
```

Utiliza [oxfmt](https://github.com/nicolo-ribaudo/oxfmt) para formatação consistente do código-fonte.

## Design Tokens

Definidos em `src/index.css`:

| Token | Valor | Uso |
|---|---|---|
| `--color-calm-blue` | `#5b8cae` | Cor primária |
| `--color-sage-green` | `#8fae9b` | Cor secundária / sucesso |
| `--color-sos` | `#e07b6a` | Botão SOS Crise |

**Fontes:**
- **Atkinson Hyperlegible** — corpo de texto (acessibilidade máxima)
- **Nunito** — títulos e destaques

## Acessibilidade

O projeto segue diretrizes de design para usuários neurodivergentes:

- Paleta de cores com baixo contraste agressivo e tons suaves
- Fontes de alta legibilidade com espaçamento generoso
- Cantos arredondados e ausência de elementos visuais abruptos
- Espaço em branco abundante para reduzir sobrecarga sensorial
- Exercício de respiração guiada integrado ao fluxo de crise
