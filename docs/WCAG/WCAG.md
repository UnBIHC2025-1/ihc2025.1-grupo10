# Guia de Acessibilidade WCAG 2.2 e 3.0
## Pocket IHC - Versão 2.0

---

## 📋 Sumário Executivo

Este guia apresenta as principais novidades da WCAG 2.2 e as inovações futuras da WCAG 3.0, fornecendo orientações práticas para desenvolvedores, designers e profissionais de IHC. O foco está nas melhorias incrementais da versão 2.2 e nas mudanças revolucionárias propostas pela versão 3.0.

---

## 🎯 1. Introdução às WCAG 2.2 e 3.0

### 1.1 WCAG 2.2 - Evolução Incremental
A WCAG 2.2, publicada em 2023, mantém compatibilidade com versões anteriores e adiciona 9 novos critérios de sucesso, focando especialmente em:
- Acessibilidade móvel aprimorada
- Necessidades cognitivas e de aprendizagem
- Usuários com baixa visão

### 1.2 WCAG 3.0 - Revolução Estrutural
A WCAG 3.0 (em desenvolvimento) representa uma mudança paradigmática:
- Novo sistema de pontuação (Bronze, Silver, Gold)
- Abordagem centrada no usuário
- Testes mais diversos e inclusivos
- Expansão além do conteúdo web

---

## 🆕 2. Novidades da WCAG 2.2

### 2.1 Novos Critérios de Sucesso

#### **2.4.11 - Focus Not Obscured (Minimum) - Nível AA**
- **O que é**: O elemento focado não deve ser completamente obscurecido por conteúdo criado pelo autor
- **Impacto**: Melhora navegação por teclado
- **Implementação**: Garantir que elementos focados sejam sempre visíveis

#### **2.4.12 - Focus Not Obscured (Enhanced) - Nível AAA**
- **O que é**: Versão aprimorada do 2.4.11, nenhuma parte do elemento focado pode ser obscurecida
- **Diferença**: Mais rigoroso que o nível AA

#### **2.4.13 - Focus Appearance - Nível AAA**
- **O que é**: Indicadores de foco devem ter contraste e tamanho adequados
- **Especificações**: Contraste mínimo 3:1 e área mínima de 2px

#### **2.5.7 - Dragging Movements - Nível AA**
- **O que é**: Funcionalidades que requerem arrastar devem ter alternativas
- **Aplicação**: Sliders, reordenação de listas, seleção de área
- **Solução**: Botões, menus contextuais, atalhos de teclado

#### **2.5.8 - Target Size (Minimum) - Nível AA**
- **O que é**: Alvos de toque devem ter pelo menos 24x24 pixels
- **Exceções**: Links inline, controles nativos, tamanho determinado pelo user agent
- **Impacto**: Melhora usabilidade em dispositivos móveis

#### **3.2.6 - Consistent Help - Nível A**
- **O que é**: Mecanismos de ajuda devem aparecer na mesma ordem relativa
- **Exemplos**: Chat, telefone, email, formulário de contato
- **Benefício**: Facilita localização de ajuda para usuários com deficiências cognitivas

#### **3.3.7 - Redundant Entry - Nível A**
- **O que é**: Evitar solicitar informações já fornecidas no mesmo processo
- **Exceções**: Informações essenciais, confirmação de segurança
- **Implementação**: Autopreenchimento, seleção de dados anteriores

#### **3.3.8 - Accessible Authentication (Minimum) - Nível AA**
- **O que é**: Não exigir teste cognitivo para autenticação
- **Alternativas**: Reconhecimento de objetos, identificação pessoal
- **Exceções**: Quando essencial ou com mecanismo assistivo

#### **3.3.9 - Accessible Authentication (Enhanced) - Nível AAA**
- **O que é**: Versão mais rigorosa, sem testes cognitivos para nenhum processo
- **Diferença**: Não permite exceções do nível AA

### 2.2 Critério Removido
- **4.1.1 - Parsing**: Removido por redundância com outros critérios e melhoria dos navegadores

---

## 🚀 3. WCAG 3.0 - O Futuro da Acessibilidade

### 3.1 Mudanças Estruturais Fundamentais

#### **Sistema de Conformidade Renovado**
**Atual (WCAG 2.x)**: A, AA, AAA
**Futuro (WCAG 3.0)**: Bronze, Silver, Gold

| Nível | Descrição | Equivalência Aproximada |
|-------|-----------|------------------------|
| **Bronze** | Conformidade mínima | Similar ao AA atual |
| **Silver** | Conformidade aprimorada | Acima do AA atual |
| **Gold** | Conformidade premium | Além do AAA atual |

#### **Sistema de Pontuação**
- Pontuação numérica (0-5) por categoria funcional
- Média geral ≥ 3.5 para Bronze
- Sem "falhas críticas" que excluam grupos de usuários

### 3.2 Categorias Funcionais

A WCAG 3.0 organiza requisitos em categorias funcionais focadas no usuário:

1. **Texto e Linguagem**
   - Legibilidade
   - Compreensibilidade
   - Estrutura

2. **Visual**
   - Contraste
   - Espaçamento
   - Movimento

3. **Auditivo**
   - Legendas
   - Transcrições
   - Controle de áudio

4. **Interação**
   - Navegação
   - Entrada de dados
   - Controles

5. **Estrutural**
   - Marcação semântica
   - Navegação programática
   - Compatibilidade com tecnologias assistivas

### 3.3 Novos Tipos de Teste

#### **Testes Automatizados**
- Verificação automática de código
- Scripts de teste contínuo
- Integração com CI/CD

#### **Testes com Usuários**
- Validação com pessoas com deficiência
- Cenários de uso real
- Métricas de experiência

#### **Avaliação Holística**
- Análise da jornada completa do usuário
- Consideração do contexto de uso
- Impacto cumulativo das barreiras

---

## 🛠️ 4. Ferramentas de Acessibilidade

### 4.1 Ferramentas de Teste Automatizado

#### **axe-core**
- **Uso**: Biblioteca JavaScript para testes automatizados
- **Vantagens**: Integração fácil, poucos falsos positivos
- **Limitações**: Detecta ~30% dos problemas de acessibilidade
- **Como usar**:
  1. Instalar: `npm install axe-core`
  2. Configurar nos testes
  3. Executar auditorias automáticas

#### **WAVE (Web Accessibility Evaluation Tool)**
- **Uso**: Extensão de navegador e API
- **Vantagens**: Interface visual clara, relatórios detalhados
- **Melhor para**: Análise página por página
- **Passo a passo**:
  1. Instalar extensão do navegador
  2. Navegar até a página de teste
  3. Clicar no ícone WAVE
  4. Analisar erros, alertas e recursos

#### **Lighthouse Accessibility Audit**
- **Uso**: Integrado ao Chrome DevTools
- **Vantagens**: Parte do workflow de desenvolvimento
- **Limitações**: Cobertura limitada comparado a ferramentas específicas
- **Utilização**:
  1. Abrir DevTools (F12)
  2. Ir para aba Lighthouse
  3. Selecionar "Accessibility"
  4. Executar auditoria

### 4.2 Ferramentas de Teste Manual

#### **Navegação por Teclado**
- **Teclas principais**: Tab, Shift+Tab, Enter, Espaço, setas
- **Verificações**:
  - Todos os elementos interativos são acessíveis
  - Ordem de foco lógica
  - Indicadores de foco visíveis
  - Sem armadilhas de teclado

#### **Leitores de Tela**
- **NVDA** (Windows, gratuito)
- **JAWS** (Windows, pago)
- **VoiceOver** (macOS/iOS, nativo)
- **TalkBack** (Android, nativo)

**Teste básico com leitor de tela**:
1. Ativar o leitor de tela
2. Navegar usando apenas comandos do leitor
3. Verificar se todo conteúdo é anunciado corretamente
4. Testar formulários e interações

#### **Simuladores de Deficiência Visual**
- **Color Oracle**: Simulação de daltonismo
- **NoCoffee**: Simulação de baixa visão
- **Stark**: Plugin para Figma/Sketch

### 4.3 Ferramentas de Validação de Código

#### **HTML Validator**
- **W3C Markup Validator**
- **Verificação**: Estrutura HTML válida
- **Importância**: Base para acessibilidade programática

#### **Validadores de Contraste**
- **Colour Contrast Analyser (CCA)**
- **WebAIM Contrast Checker**
- **Stark Plugin**

**Processo de verificação de contraste**:
1. Identificar combinações de cores texto/fundo
2. Medir contraste usando ferramenta
3. Verificar se atende WCAG (4.5:1 para AA, 3:1 para textos grandes)
4. Ajustar cores se necessário

### 4.4 Novas Ferramentas para WCAG 3.0

#### **Ferramentas de Pontuação**
- Calculadoras de score Bronze/Silver/Gold
- Dashboards de conformidade
- Relatórios de progresso

#### **Ferramentas de Teste com Usuários**
- Plataformas de recrutamento de testadores
- Sistemas de feedback estruturado
- Métricas de experiência do usuário

---

## 📱 5. Implementação Prática

### 5.1 Checklist WCAG 2.2

#### **Novos Critérios - Implementação Imediata**

**Focus Management (2.4.11, 2.4.12, 2.4.13)**
- [ ] Verificar se elementos focados não são obscurecidos
- [ ] Implementar indicadores de foco com contraste adequado
- [ ] Testar navegação por teclado em modais e overlays

**Touch Targets (2.5.8)**
- [ ] Medir tamanho de alvos de toque (mínimo 24x24px)
- [ ] Ajustar botões pequenos
- [ ] Verificar em dispositivos móveis reais

**Dragging Alternatives (2.5.7)**
- [ ] Identificar funcionalidades que usam arrastar
- [ ] Implementar alternativas (botões, menus)
- [ ] Testar com usuários que não podem arrastar

**Help Consistency (3.2.6)**
- [ ] Mapear todos os mecanismos de ajuda
- [ ] Padronizar ordem e posicionamento
- [ ] Documentar padrões para equipe

**Authentication (3.3.8, 3.3.9)**
- [ ] Revisar processos de login
- [ ] Implementar alternativas a CAPTCHAs
- [ ] Considerar autenticação biométrica ou baseada em posse

### 5.2 Preparação para WCAG 3.0

#### **Estratégias de Transição**

**1. Adoção Gradual**
- Implementar princípios da WCAG 3.0 mesmo antes da versão final
- Focar em categorias funcionais
- Experimentar com sistema de pontuação

**2. Ferramental Atualizado**
- Avaliar ferramentas compatíveis com WCAG 3.0
- Treinar equipe nos novos métodos de teste
- Implementar testes com usuários reais

**3. Métricas Aprimoradas**
- Desenvolver sistema de pontuação interno
- Estabelecer benchmarks por categoria funcional
- Criar dashboards de acessibilidade

---

## 🏛️ 6. Integração com NBR e Gov.br

### 6.1 NBR 17060:2022
A norma brasileira complementa as WCAG com requisitos específicos:

**Principais adições**:
- Requisitos para idioma português
- Considerações culturais brasileiras
- Integração com legislação nacional

**Pontos de atenção**:
- Libras como língua oficial
- Formatos de data e hora brasileiros
- Terminologia técnica em português

### 6.2 eMAG - Modelo de Acessibilidade em Governo Eletrônico

**Seções específicas para WCAG 2.2**:
1. **Marcação**: Estrutura semântica aprimorada
2. **Comportamento**: Novos critérios de interação
3. **Conteúdo/Informação**: Requisitos de entrada redundante
4. **Apresentação/Design**: Critérios de foco e contraste

**Conformidade governamental**:
- Sites do governo devem seguir eMAG + WCAG 2.2
- Auditorias obrigatórias
- Selo de acessibilidade digital

---

## 📊 7. Casos de Uso e Exemplos Práticos

### 7.1 E-commerce - Implementação WCAG 2.2

**Problema**: Checkout com múltiplas etapas solicita dados repetidamente
**Solução WCAG 2.2 (3.3.7)**: 
```html
<!-- Etapa 1: Dados coletados -->
<form id="checkout-step1">
  <input type="email" id="email" name="email" value="">
  <input type="tel" id="phone" name="phone" value="">
</form>

<!-- Etapa 2: Dados reutilizados -->
<form id="checkout-step2">
  <input type="email" id="confirm-email" name="confirm-email" 
         value="usuario@exemplo.com" readonly>
  <p>Email confirmado automaticamente da etapa anterior</p>
</form>
```

### 7.2 Aplicativo Mobile - Target Size

**Problema**: Botões pequenos em interfaces mobile
**Solução WCAG 2.2 (2.5.8)**:
```css
/* Antes */
.btn-small {
  width: 20px;
  height: 20px;
}

/* Depois - WCAG 2.2 compliant */
.btn-small {
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
}

/* Área de toque expandida */
.btn-small::before {
  content: '';
  position: absolute;
  top: -12px;
  left: -12px;
  right: -12px;
  bottom: -12px;
}
```

### 7.3 Sistema de Drag & Drop - Alternativas

**Problema**: Reordenação de lista apenas por arrastar
**Solução WCAG 2.2 (2.5.7)**:
```html
<ul role="list" aria-label="Lista de tarefas reordenável">
  <li role="listitem">
    <span>Tarefa 1</span>
    <div class="controls">
      <button aria-label="Mover tarefa para cima" onclick="moveUp(this)">↑</button>
      <button aria-label="Mover tarefa para baixo" onclick="moveDown(this)">↓</button>
      <button aria-label="Mover para posição específica" onclick="moveTo(this)">⚹</button>
    </div>
  </li>
</ul>
```

---

## 🔮 8. Futuro da Acessibilidade

### 8.1 Tecnologias Emergentes

**Inteligência Artificial**:
- Geração automática de alt-text
- Transcrição de áudio em tempo real
- Tradução automática para linguagem simples

**Realidade Aumentada/Virtual**:
- Diretrizes específicas para XR
- Navegação espacial acessível
- Feedback háptico

**Internet das Coisas (IoT)**:
- Acessibilidade em dispositivos conectados
- Interfaces por voz
- Automação residencial inclusiva

### 8.2 Tendências WCAG 3.0

**Personalização**:
- Preferências do usuário como requisito
- Adaptação automática de interfaces
- Perfis de acessibilidade

**Inclusão Cognitiva**:
- Foco expandido em deficiências cognitivas
- Simplicidade como princípio core
- Suporte para neurodiversidade

**Medição Contínua**:
- Monitoramento em tempo real
- Analytics de acessibilidade
- Feedback loop com usuários

---

## 📚 9. Recursos e Referências

### 9.1 Documentação Oficial
- [WCAG 2.2 (W3C Brasil)](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/)
- [WCAG 3.0 Working Draft](https://w3c.github.io/silver/guidelines/)
- [eMAG - Governo Digital](https://www.gov.br/governodigital/pt-br/acessibilidade-digital)

### 9.2 Ferramentas Recomendadas
- **Automatizadas**: axe-core, WAVE, Lighthouse
- **Manuais**: NVDA, Color Contrast Analyser
- **Desenvolvimento**: axe-cli, Pa11y, AccessLint

### 9.3 Comunidades
- **Slack**: Web A11y Community
- **GitHub**: WCAG Guidelines Repository
- **LinkedIn**: Grupos de Acessibilidade Digital

---

## 🎯 10. Conclusão

A transição da WCAG 2.2 para 3.0 representa uma evolução significativa na forma como abordamos acessibilidade digital. Enquanto a WCAG 2.2 oferece melhorias incrementais importantes, especialmente para dispositivos móveis e usuários com deficiências cognitivas, a WCAG 3.0 promete uma transformação completa com seu sistema de pontuação mais nuanceado e foco na experiência real do usuário.

**Recomendações para equipes de desenvolvimento**:

1. **Implementar WCAG 2.2 imediatamente**: Os 9 novos critérios são essenciais para acessibilidade moderna
2. **Preparar-se para WCAG 3.0**: Começar a adotar mindset de categorias funcionais
3. **Investir in ferramentas**: Automatizar o máximo possível do processo de teste
4. **Incluir usuários reais**: Testes com pessoas com deficiência são insubstituíveis
5. **Educação contínua**: Acessibilidade é um campo em constante evolução

A acessibilidade não é apenas conformidade técnica, mas um compromisso ético com a inclusão digital. As WCAG 2.2 e 3.0 nos fornecem as ferramentas para criar experiências verdadeiramente universais.

---

*Última atualização: Junho 2025*
*Versão: 2.0*