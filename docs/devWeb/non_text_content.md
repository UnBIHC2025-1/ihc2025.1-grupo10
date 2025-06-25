# Desenvolvimento

"Nessa fase, é importante garantir que a equipe de desenvolvimento saiba como implementar acessibilidade, verificá-la e usar as ferramentas disponíveis no mercado para testes e padronizações. Também é importante que a equipe saiba como as pessoas com deficiência usam os sítios web e aplicativos". Nesse caso, foram incluídas técnicas relacionadas ao desenvolvimento e também formas de verificar.

---

## Imagens

- [ ] **Adicionar `alt="descrição clara"`** em imagens que transmitem informação relevante. [NBR - 5.2.1] / [1]
- [ ] Para botões com imagem, usar **`<button> <img src="..." alt=" descrição da funcionalidade do elemento" > <button>`** ou **`aria-label="descrição da funcionalidade do elemento"`**. [NBR - 5.2.2] / [1]
- [ ] Para imagens decorativas, usar **`alt=""`** ou aplicar imagem como `background-image` via CSS. [NBR - 5.2.3] / [1]
- [ ] **Incluir a descrição no `alt`** para imagens que contém texto. [1]
- [ ] Para imagens complexas, usar `<figure>` ou linkado. [NBR - 5.2.4]
- [ ] Para imagens com texto, usar **`alt="texto exato da imagem"`** e evitar imagens de texto quando possível. [NBR - 5.2.5]
- [ ] Para mapas de imagem, usar **`area alt="Nome do link"`** ou **`aria-label`** dentro do `<map>`. [NBR - 5.2.6]
- [ ] Implementar descrições longas contextuais para infográficos e diagramas complexos usando **`aria-describedby`**. [2]
- [ ] Priorizar formatos vetoriais (SVG) que escalam melhor em dispositivos móveis. [2]
- [ ] Considerar modo escuro ao definir `alt` text, especificando cores quando relevante. [2]
- [ ] **WCAG 3.0 - Futuro**:
    - IA integrada para `alt` text automático com validação humana.
    - Descrições adaptativas baseadas no contexto do usuário.
    - Suporte nativo para realidade aumentada e objetos 3D.

---

## Vídeos e áudio

- [ ] **Adicionar legendas** para áudio em vídeos existentes. [2]
- [ ] **Evitar conteúdo com *flashes* (gatilhos para convulsões)** ou manter abaixo dos limites. [3]
- [ ] Áudio gravado deve ter transcrição ou ser identificado como alternativa a vídeo sem som ou texto. [NBR - 5.14.1]
- [ ] Vídeos com áudio devem ter legendas descritivas ou ser identificados como alternativa a um texto. [NBR - 5.14.2]
- [ ] Vídeos devem ter audiodescrição ou áudio suficiente para compreensão sem apoio visual. [NBR - 5.14.4]
- [ ] Áudios automáticos com mais de 3 s devem ter controle de pausa, parada ou volume independente. [NBR - 5.14.7]
- [ ] Todo conteúdo ao vivo com áudio deve ter legendas disponíveis. [NBR - 5.14.9]
- [ ] Legendas personalizáveis com opções de tamanho, cor e posicionamento.
- [ ] Transcrições interativas sincronizadas com marcadores de tempo.
- [ ] Controles de velocidade para diferentes necessidades cognitivas.
- [ ] **WCAG 3.0 - Futuro**:
    - Legendas geradas por IA em tempo real com alta precisão.
    - Audiodescrição adaptativa baseada no nível de deficiência visual.
    - Tradução automática de legendas e audiodescrição.
    - Interfaces neurais para controle direto de mídia.

---

## Controles

- [ ] **Adicionar `href`** para links. [4]
- [ ] **Adicionar underline** nos links. [5]
- [ ] **Adicionar estados de foco** em campos de entrada, botões, e elementos interativos. [6]
- [ ] **Adicionar `type="button"`** nos botões. [4]
- [ ] **Adicionar skip-link** (link para pular) para o conteúdo principal. [7]
- [ ] **Identifique e comunique** links que abrem em uma nova guia ou janela. [8]
- [ ] Use **`button`** ou **`role="button"`** para indicar botões corretamente. [NBR - 5.8.1]
- [ ] Use botões apenas para executar ações, não para navegar. [NBR - 5.8.2]
- [ ] Dê rótulos claros e acessíveis que indiquem a função dos botões. [NBR - 5.8.3]
- [ ] Use os mesmos ícones, textos ou estilos para funções repetidas em diferentes páginas. [NBR - 5.8.5]
- [ ] Garanta que botões e links tenham ao menos 24px ou espaçamento equivalente. [NBR - 5.8.7]
- [ ] Não mude de página ou conteúdo ao apenas focar um elemento. [NBR - 5.8.9]
- [ ] Avise se um campo muda o conteúdo ao ser preenchido ou selecionado. [NBR - 5.8.10]
- [ ] Não acione uma função só com o clique inicial (down-event); finalize no soltar (up-event). [NBR - 5.8.11]
- [ ] Ofereça alternativa com clique único para gestos como pinça ou arrastar. [NBR - 5.8.12]
- [ ] Permita alternativa sem arrastar para controlar o conteúdo. [NBR - 5.8.13]
- [ ] Evite depender de movimentos físicos; ofereça outra forma de controle. [NBR - 5.8.14]
- [ ] Focus Not Obscured (Minimum) - Foco nunca deve ficar completamente oculto.
- [ ] Focus Not Obscured (Enhanced) - Foco deve permanecer totalmente visível.
- [ ] Focus Appearance - Indicadores de foco mais robustos e personalizáveis.
- [ ] Dragging Movements - Alternativas para gestos de arrastar em dispositivos móveis.
- [ ] Target Size (Minimum) - Alvos de toque com pelo menos 24×24 pixels.
- [ ] **WCAG 3.0 - Futuro**:
    - Controles adaptativos que se ajustam às capacidades do usuário.
    - Feedback háptico inteligente para dispositivos móveis.
    - Comando por voz universal integrado nativamente.
    - Controle ocular padronizado para interfaces web.
    - Gestos 3D para realidade virtual e aumentada.

---

## Formulário

- [ ] **Adicionar `label`** para os campos de entradas associadas ao elemento correspondente. [9]
- [ ] **Adicionar `<fieldset>` e `<legend>`** para seção no formulário. [4]
- [ ] **Adicionar `autocomplete`** para campos de entrada. [10]
- [ ] **Exibir `errors`** (erros) de entrada acima do formulário, após envio. [11]
- [ ] **Adicionar `aria-describedby`** para os campos de entrada. [11]
- [ ] **Exibir mensagens de erro e sucesso** não só visualmente. [5]
- [ ] Posicione rótulos de forma previsível em relação ao campo. [NBR - 5.9.2]
- [ ] Rótulos devem descrever claramente o propósito do campo. [NBR - 5.9.4]
- [ ] Posicione textos de ajuda próximos aos campos relacionados. [NBR - 5.9.5]
- [ ] Indique visual e programaticamente os campos obrigatórios. [NBR - 5.9.7]
- [ ] Use tipos de entrada apropriados, como `type="email"`, `type="number"`. [NBR - 5.9.8]
- [ ] Ofereça sugestões para correção de erros de preenchimento. [NBR - 5.9.10]
- [ ] Formulários críticos devem permitir revisão antes do envio. [NBR - 5.9.12]
- [ ] Ofereça alternativa para validação que exija visão, audição ou movimento. [NBR - 5.9.16]
- [ ] Evite autenticação com desafios cognitivos sem alternativa acessível. [NBR - 5.9.18]
- [ ] Accessible Authentication (Minimum) - Evitar testes cognitivos para autenticação.
- [ ] Accessible Authentication (Enhanced) - Eliminar completamente testes cognitivos.
- [ ] Formulários adaptativos que simplificam baseado na capacidade do usuário.
- [ ] Validação em tempo real com feedback imediato e construtivo.
- [ ] **WCAG 3.0 - Futuro**:
    - Preenchimento assistido por IA que aprende com o usuário.
    - Validação semântica avançada que compreende contexto.
    - Formulários conversacionais com interface de chat.
    - Entrada multimodal (voz, gestos, olhar) simultânea.
    - Campos que se adaptam ao tipo de deficiência detectada.

---

## Mídia

- [ ] **Impedir `autoplay`** para vídeos e áudios. [12]
- [ ] **Adicionar `type`** para botões e entradas. [4]
- [ ] **Adicionar pausa** para todas as mídias. [13]
- [ ] **Adicionar transcrição** para áudios. [1]
- [ ] Controles de mídia persistentes mesmo em tela cheia.
- [ ] Indicadores visuais para conteúdo em reprodução.
- [ ] Opções de redução de movimento para usuários sensíveis.
- [ ] **WCAG 3.0 - Futuro**:
    - Controles neurais para pessoas com limitações motoras severas.
    - Adaptação automática de qualidade baseada em capacidades cognitivas.
    - Mídia espacial com navegação 3D acessível.
    - Sincronização multi-dispositivo para experiências distribuídas.

---

## Semântica

- [ ] Uso de elementos **nativos HTML**.
- [ ] Fluxo contínuo e **Lógico**.
- [ ] Tem **descrições** que podem ser **facilmente compreendidas**.
- [ ] Tem a **semântica correta**.
- [ ] É **objetivo** nos **rótulos**.
- [ ] Uso extensivo de ARIA 1.2 com novos roles e propriedades.
- [ ] Landmarks semânticos mais específicos e contextuais.
- [ ] Relacionamentos complexos entre elementos bem definidos.
- [ ] **WCAG 3.0 - Futuro**:
    - Web Semântica integrada com ontologias de acessibilidade.
    - Marcação automática baseada em análise de conteúdo.
    - Contexto semântico adaptativo baseado no usuário.
    - Interoperabilidade com IA para melhor compreensão do conteúdo.

---

## Texto

- [ ] **Evitar** o uso de **textos dentro de imagens**.
- [ ] **Redimensiona os textos na página**, aumentando o zoom em até 200%.
- [ ] **Alturas** das fontes **não é fixa**.
- [ ] Zoom até 400% sem perda de funcionalidade.
- [ ] Espaçamento de texto personalizável (1.5x altura da linha, 2x espaçamento de parágrafo).
- [ ] Reflow responsivo que mantém funcionalidade em 320px de largura.
- [ ] Contraste aprimorado para textos pequenos e imagens.
- [ ] **WCAG 3.0 - Futuro**:
    - Web Semântica integrada com ontologias de acessibilidade.
    - Marcação automática baseada em análise de conteúdo.
    - Contexto semântico adaptativo baseado no usuário.
    - Interoperabilidade com IA para melhor compreensão do conteúdo.

---

## Teclado

- [ ] **Funcionalidades** da página web estão **disponíveis por teclado**.
- [ ] Quando se tem o **mouseover é permitido o uso de teclado**.
- [ ] **Foco visível**, remova elementos focalizáveis invisíveis.
- [ ] Adicione o **`.hover, .focus { }`** para tornar o foco visível.
- [ ] Permite/visa o uso de **Atalhos de teclado** como o `TAB`.
- [ ] **Primeiro** item interativo da página é um link para o **conteúdo principal**.
- [ ] Character Key Shortcuts - Atalhos de caractere único devem ser desabilitáveis.
- [ ] Timeout warnings - Avisos antes de timeout em sessões.
- [ ] Consistent Help - Ajuda contextual consistente em todo o site.
- [ ] **WCAG 3.0 - Futuro**:
    - Teclados virtuais adaptativos para diferentes deficiências.
    - Atalhos personalizáveis por IA baseados em padrões de uso.
    - Navegação preditiva que antecipa próximos destinos.
    - Interfaces cerebrais para controle direto por pensamento.

---

## Título

- [ ] A **hierarquia** de conteúdo da página é definida por sua **lógica**, não pelo tamanho do texto. [17]
- [ ] Use **elementos de título `h1 h2 h3`** para apresentar o conteúdo. [17]
- [ ] **Não pular níveis lógicos**.
- [ ] **Toda página contém um título `h1`** descrevendo a página. [17][19]
- [ ] Headings descritivos que realmente descrevem o conteúdo da seção.
- [ ] Navegação por headings otimizada para leitores de tela.
- [ ] Títulos únicos que não se repetem desnecessariamente.
- [ ] Todo frame ou iframe possui um título único, que o identifica.
- [ ] **WCAG 3.0 - Futuro**:
    - Hierarquia dinâmica que se reorganiza baseada no contexto.
    - Títulos gerados automaticamente por IA semântica.
    - Estrutura visual adaptativa para diferentes tipos de deficiência.
    - Navegação por conceitos além da estrutura hierárquica.

---

## Tabela

- [ ] **Use o `table`** para elementos em formato de tabela. [4]
- [ ] Insira cabeçalhos para explicar os dados, **use `th` com `scope` correto**. [15]
- [ ] **Use o `caption`** elemento para fornecer um título para a tabela. [17]
- [ ] Headers complexos com múltiplos níveis de associação.
- [ ] Summaries descritivos para tabelas de dados complexos.
- [ ] Navegação otimizada por células em dispositivos móveis.
- [ ] **WCAG 3.0 - Futuro**:
    - Tabelas que se transformam em diferentes visualizações.
    - Navegação por voz natural através de dados.
    - Filtragem semântica baseada em linguagem natural.
    - Visualização adaptativa baseada em capacidades cognitivas.

---

## Modais

- [ ] Deve ser **fácil fechar**. [19]
- [ ] Permite o **uso da tecla escape `ESC`**. [19]
- [ ] A interação é uma **tarefa simples**. [19]
- [ ] **Evita** modais em **tela cheia**. [19]
- [ ] **Não abrir um modal a partir de outro modal**. [19]
- [ ] Gestão de foco aprimorada com armadilhas de foco mais robustas.
- [ ] Anúncios contextuais quando modais são abertos.
- [ ] Histórico preservado para navegação por modal.
- [ ] **WCAG 3.0 - Futuro**:
    - Modais adaptativos que mudam de forma baseado no contexto.
    - Interfaces sem modal com interações mais naturais.
    - Feedback multi-sensorial para ações em modais.
    - Modais conversacionais com interação por voz.

---

## Dispositivo Móvel e tocável

- [ ] O site pode ser **rotacionado** para qualquer orientação. [15]
- [ ] **Impedir** rolagem horizontal. [16]
- [ ] **Garantir** que botões e links possam ser ativados facilmente. [18]
- [ ] **Garantir** espaço suficiente entre elementos interativos. [7]
- [ ] Target Size expandido - Alvos de toque mínimo de 24×24px.
- [ ] Orientação adaptativa sem forçar orientação específica.
- [ ] Gestos alternativos para todas as funcionalidades baseadas em movimento.
- [ ] Pointer Events - Suporte para diferentes tipos de ponteiros.
- [ ] **WCAG 3.0 - Futuro**:
    - Interfaces hápticas avançadas com feedback tátil preciso.
    - Reconhecimento de gestos 3D no ar.
    - Adaptação automática ao tipo de dispositivo e capacidades.
    - Interfaces distribuídas entre múltiplos dispositivos.
    - Realidade aumentada acessível com controles universais.

---

## Ferramentas e extras

- [ ] Permite **pausar, parar ou ocultar conteúdo em movimento**.
- [ ] Usar **Breadcrumbs** informando a localização atual nas páginas.
- [ ] Colocar página ou **área de esclarecimento de dúvidas e dicas de acessibilidade**.
- [ ] Áreas clicáveis com no mínimo **44px (pixels) de altura e 44px de largura**.
- [ ] No caso de **captcha** garanta que seja simples de entender e tenha alternativas para pessoas com deficiência.
- [ ] Incluir um **campo de busca**.
- [ ] **WCAG 3.0 - Futuro**:
    - IA de acessibilidade integrada que monitora e corrige problemas automaticamente.
    - Testes automáticos contínuos com validação em tempo real.
    - Personalization engine que aprende preferências do usuário.
    - APIs de acessibilidade universais para integração entre plataformas.

---

## Referência Bibliográfica

> <a id="RP1" href="#TEC1">1.</a> WCAG 2.2 Understanding Docs. SC 1.1.1 Non-text Content (Level A) . Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html). Acesso em: 9 Mai. 2024.

> <a id="RP2" href="#TEC2">2.</a> WCAG 2.2 Understanding Docs. SC 1.2.2 Captions (Prerecorded) (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html). Acesso em: 9 Mai. 2024.

> <a id="RP3" href="#TEC3">3.</a> WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Acesso em: 9 Mai. 2024.

> <a id="RP4" href="#TEC4">4.</a> WCAG 2.2 Understanding Docs. SC 1.3.1 Info and Relationships (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html). Acesso em: 9 Mai. 2024.

> <a id="RP5" href="#TEC5">5.</a> WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html). Acesso em: 9 Mai. 2024.

> <a id="RP6" href="#TEC6">6.</a> WCAG 2.2 Understanding Docs. SC 2.4.7 Focus Visible (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html). Acesso em: 9 Mai. 2024.

> <a id="RP7" href="#TEC7">7.</a> WCAG 2.2 Understanding Docs. SC 2.4.1 Bypass Blocks (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html). Acesso em: 9 Mai. 2024.

> <a id="RP8" href="#TEC8">8.</a> WCAG 2.2 Understanding Docs. G201 Giving users advanced warning when opening a new window. Disponível em: [https://www.w3.org/WAI/WCAG22/Techniques/general/G201](https://www.w3.org/WAI/WCAG22/Techniques/general/G201). Acesso em: 9 Mai. 2024.

> <a id="RP9" href="#TEC9">9.</a> WCAG 2.2 Understanding Docs. SC 3.2.2 On Input (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/on-input.html](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html). Acesso em: 9 Mai. 2024.

> <a id="RP10" href="#TEC10">10.</a> WCAG 2.2 Understanding Docs. SC 1.3.5 Identify Input Purpose (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). Acesso em: 9 Mai. 2024.

> <a id="RP11" href="#TEC11">11.</a> WCAG 2.2 Understanding Docs. SC 3.3.1 Error Identification (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html). Acesso em: 9 Mai. 2024.

> <a id="RP12" href="#TEC12">12.</a> WCAG 2.2 Understanding Docs. SC 1.4.2 Audio Control (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html). Acesso em: 9 Mai. 2024.

> <a id="RP13" href="#TEC13">13.</a> WCAG 2.2 Understanding Docs. SC 2.1.1 Keyboard (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html). Acesso em: 9 Mai. 2024.

> <a id="RP14" href="#TEC14">14.</a> WCAG 2.2 Understanding Docs. SC 1.3.4 Orientation (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/orientation.html](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html). Acesso em: 9 Mai. 2024.

> <a id="RP15" href="#TEC15">15.</a> WCAG 2.2 Understanding Docs. SC 4.1.1 Orientation (Level). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/parsing.html](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html). Acesso em: 9 Mai. 2024.

> <a id="RP16" href="#TEC16">16.</a> WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/reflow.html](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Acesso em: 9 Mai. 2024.

> <a id="RP17" href="#TEC17">17.</a> WCAG 2.2 Understanding SC 2.4.6 Headings and Labels (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html). Acesso em: 9 Mai. 2024.

> <a id="RP18" href="#TEC18">18.</a> WCAG 2.2 Understanding Docs. SC 2.5.5 Target Size (Enhanced) (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html). Acesso em: 9 Mai. 2024.

> <a id="RP19" href="#TEC19">19.</a> GUIA DE BOAS PRÁTICAS PARA ACESSIBILIDADE DIGITAL. Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html). Acesso em: 9 Mai. 2024.

> 20. Norma_ABNT17225. Disponível em: [https://www.abntcolecao.com.br/mpf/norma.aspx?ID=567818](https://www.abntcolecao.com.br/mpf/norma.aspx?ID=567818).

---

## Bibliografia

> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2024.