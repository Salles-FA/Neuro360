# Care Plus Neuro360 — App mobile (protótipo navegável)

## Contexto

O projeto está vazio (`src/App.tsx` só renderiza uma `div`). Existe um protótipo HTML de referência em
`src/imports/care_plus_neuro360_prototipo.html` que define o conceito (Início, Jornada, Rede, Apoio em crise,
Perfil etc.), mas usa uma paleta magenta/vinho. O brief pede um **redesenho** com direção visual nova:
minimalista, acessível, sem sobrecarga sensorial, **azul suave + verde sálvia**, cantos arredondados, fontes
sem serifa muito legíveis e bastante espaço em branco. Público: pacientes neurodivergentes (TEA, TDAH,
dislexia) e cuidadores.

Objetivo: entregar um app mobile navegável em React (uma moldura de celular centralizada), com Bottom
Navigation de 5 abas e as telas descritas, aplicando a nova paleta calmante.

## Decisões (defaults assumidos, brief reenviado sem seleção)

- **Paleta nova** (azul suave + verde sálvia), seguindo o brief — não o magenta do protótipo.
- **Todas as 5 abas construídas** e navegáveis: Início, Jornada, Rede Especializada, Equipe, Perfil.
- SOS Crise é uma **tela sobreposta em tela cheia** acionada pelo FAB, fora do fluxo das abas.

## Direção visual

- **Stance:** minimalista calmante (Apple/Aesop-like), um destaque por seção, muito whitespace.
- **Fontes (Google Fonts, via `@import` no topo de `src/index.css`):**
  - Corpo: **Atkinson Hyperlegible** (desenhada para máxima legibilidade — ideal para o público).
  - Títulos: **Nunito** (geométrica arredondada, acolhedora).
- **Tokens (em `src/index.css`, Tailwind v4 `@theme`):**
  - `--background`: azul-névoa muito claro (~`#f2f6f8`).
  - `--card`: branco.
  - `--primary`: azul suave (~`#5b8cae` / `#6ba0c4`), foreground branco.
  - `--accent` / secundário: verde sálvia (~`#8fae9b` / `#a7c4b5`).
  - `--muted-foreground`: cinza-azulado calmo.
  - `--danger` (SOS): vermelho suave dessaturado (~`#d98a8a` / coral suave), nunca vermelho vivo.
  - `--radius`: generoso (~18–20px); hairlines de baixa opacidade.
- Ícones: **lucide-react** (traço simples e leve). Instalar como dependência.

## Estrutura de arquivos

- `src/App.tsx` — shell: moldura de celular centralizada na viewport, estado de aba ativa + estado do overlay
  SOS, renderiza a tela ativa + `BottomNav` + `FAB` + `SOSOverlay`.
- `src/index.css` — `@import` das fontes (primeiro), tokens `@theme`, defaults de família de fonte,
  utilitário para esconder scrollbar.
- `src/components/` (um arquivo por peça, default exports conforme AGENTS.md):
  - `PhoneFrame.tsx` — moldura, status bar (9:41), área scrollável.
  - `BottomNav.tsx` — 5 abas com ícone + rótulo, estado ativo por cor + peso.
  - `SOSFab.tsx` — FAB vermelho suave "SOS Crise", canto inferior direito.
  - `SOSOverlay.tsx` — tela cheia, gradiente calmo, círculo de respiração animado (Inspire/Expire via
    CSS keyframes + texto sincronizado por estado React), 2 botões largos ("Ouvir sons calmantes",
    "Falar com suporte especializado agora"), botão fechar.
  - Telas em `src/screens/`:
    - `HomeScreen.tsx` — saudação; check-in emocional (5 emojis/estados selecionáveis via estado);
      cards horizontais com scroll "Próximas Terapias" (ex.: Fonoaudiologia 14h); card central em destaque
      "Coordenação de Cuidado" com acesso a relatórios.
    - `JourneyScreen.tsx` — timeline vertical com linhas conectoras entre cards de eventos clínicos
      (diagnósticos passados, marcos, progresso), ícones simples por tipo de evento.
    - `NetworkScreen.tsx` — barra de busca + chips de filtro (TEA, TDAH, Fonoaudiólogo, Psicólogo,
      selecionáveis por estado), lista de cards de especialistas (foto Unsplash, nome, especialidade,
      avaliação em estrelas, botão "Agendar").
    - `TeamScreen.tsx` — equipe de cuidado multidisciplinar do paciente (cards de profissionais + coordenador,
      contato de apoio/cuidador).
    - `ProfileScreen.tsx` — perfil + preferências de acessibilidade/sensoriais (chips: menos animações,
      alto contraste, textos objetivos) e consentimentos/privacidade.

## Interatividade (estado React real)

- Troca de aba via `BottomNav`.
- Check-in emocional: seleção de humor destacada.
- Chips de filtro da Rede: toggle selecionado.
- FAB abre `SOSOverlay`; overlay fecha; animação de respiração alterna "Inspire"/"Expire".

## Acessibilidade

- Contraste AA no corpo; estados sinalizados por mais que cor (peso/ícone).
- Respeitar `prefers-reduced-motion` na animação de respiração (fallback estático).
- Alvos de toque grandes; foco visível; `alt` descritivo nas fotos.

## Dependências a instalar

- `lucide-react` (ícones). `@import` de Google Fonts não precisa de pacote.

## Verificação

- Como é implementação nova ampla: confirmar que o dev server (Vite, já rodando na porta) compila sem erros
  e que o preview mostra a moldura do celular.
- Checar manualmente: navegação entre as 5 abas, seleção do check-in, toggle dos chips, abertura/fechamento
  do SOS e a animação de respiração.
- Se houver falha, inspecionar `figma logs`.
