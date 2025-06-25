
# Ferramentas de Acessibilidade


Para auxiliar e facilitar o desenvolvimento de soluções acessíveis, apresentamos abaixo
cada ferramenta com indicação de uso e instruções práticas de como aplicá-la no dia a dia.


1. [Framework de Testes de Acessibilidade (Android)]( https://github.com/google/Accessibility-Test-Framework-for-Android )

Quando usar:
  Durante o desenvolvimento de apps Android, para testar componentes UI.

Como usar:
  - No arquivo build.gradle do módulo, adicione:
      implementation 'com.google.android.apps.common:accessibility-test-framework:2.2.0'
  - Crie uma classe de teste Android (JUnit) e importe as APIs do framework.
  - Chame AccessibilityChecks.enable() antes de interagir com elementos no teste.
  - Execute o teste no emulador ou dispositivo e veja falhas no log.

-------------------------------
2. [ Wave – Web Accessibility Evaluation Tool]( https://github.com/google/Accessibility-Test-Framework-for-Android )
-------------------------------
Quando usar:
  Para avaliação rápida de páginas estáticas ou em desenvolvimento.

Como usar:
  - Acesse wave.webaim.org.
  - No campo de URL, cole o endereço da sua página e clique em “WAVE”.
  - Observe os ícones coloridos sobrepostos (erro, alerta, estrutura) e clique para detalhes.
  - Anote os itens críticos (alt ausente, contraste ruim) e corrija no código HTML/CSS.

-------------------------------------
3. [ DynoVisual Sitemap Generator]( https://dynomapper.com/)
-------------------------------------
Quando usar:
  Para mapear visualmente a estrutura de sites de médio a grande porte.

Como usar:
  - Visite dynomapper.com e faça login.
  - Crie um novo projeto, insira a URL base e defina profundidade de rastreamento.
  - Inicie a geração do sitemap e aguarde a conclusão.
  - Exporte o diagrama em PNG ou SVG e use-o para revisar navegação e hierarquia.

------------------------------
4. [ JAWS – Leitor de Telas (Windows)](https://www.tecassistiva.com.br/catalogo/jaws/)
------------------------------
Quando usar:
  Para testar suporte a leitores de tela em apps desktop e web no Windows.

Como usar:
  - Instale o JAWS no Windows e abra o Speech Viewer.
  - Navegue pela aplicação usando apenas teclado (Tab, setas, Enter).
  - Verifique se labels de botões, campos e cabeçalhos são anunciados corretamente.
  - Corrija atributos aria-label ou alt onde necessário.

------------------------------
5. [ ACHECKS – Caixa de Ferramentas](https://www.achecks.org/)
------------------------------
Quando usar:
  Para combinar testes automáticos e inspeções manuais em uma só interface.

Como usar:
  - Instale a extensão do AChecks no navegador ou acesse o portal online.
  - Carregue a página e execute o escaneamento automático.
  - Use a lista de verificação manual guiada para validar questões semânticas (listas, botões, formulários).
  - Gere o relatório final e comunique a equipe de front-end.

------------------------------
6. [ AXE-core – Engine de Testes ](https://github.com/dequelabs/axe-core)
------------------------------
Quando usar:
  Em pipelines de CI/CD para checagem de acessibilidade em aplicações web.

Como usar:
  - Adicione via npm:
      npm install axe-core --save-dev
  - Nos seus testes automatizados (Jest, Mocha, Cypress), importe e injete o axe no DOM.
  - Chame axe.run() e avalie o objeto de retorno para falhas.
  - Faça com que o teste falhe se existirem violações críticas.

------------------------------
7. [ Lighthouse – Auditoria no Chrome  ](https://developer.chrome.com/docs/lighthouse?hl=pt-br)
------------------------------
Quando usar:
  Para revisão integrada de performance, SEO e acessibilidade.

Como usar:
  - Abra o site no Chrome e pressione F12 para abrir o DevTools.
  - Selecione a aba “Lighthouse”, marque “Accessibility” e clique em “Generate report”.
  - Analise sugestões de melhoria (ex.: textos alternativos, contraste) na seção “Opportunities”.

------------------------------
8. [ WebAim Contrast Checker ](https://webaim.org/resources/contrastchecker/)
------------------------------
Quando usar:
  Ao escolher paletas de cores para texto e fundo.

Como usar:
  - Acesse webaim.org/resources/contrastchecker.
  - Insira as cores em hexadecimal para texto e background.
  - Verifique se a razão atende aos níveis AA (≥4.5:1) ou AAA (≥7:1).
  - Ajuste no design ou CSS conforme necessidade.

------------------------------
9. [Ases – Auditoria Brasileira](https://asesweb.governoeletronico.gov.br/)
------------------------------
Quando usar:
  Para conformidade com padrões eMAG e ABNT em sites governamentais.

Como usar:
  - Acesse o portal Ases e cadastre sua instituição.
  - Envie a URL para análise e aguarde a geração do relatório.
  - Revise itens obrigatórios (descrições de imagens, semântica HTML) e corrija.

------------------------------
10. [Accessibility Insight](https://accessibilityinsights.io/)
------------------------------
Quando usar:
  Em auditorias profundas, com inspeção manual e automática.

Como usar:
  - Instale a extensão no Chrome/Edge ou o aplicativo desktop.
  - Execute o “FastPass” para um relatório rápido.
  - Siga o guia passo a passo para testar cenários específicos (menus, formulários).
  - Exporte o relatório em HTML para arquivar evidências.

------------------------------
11. [Stark – Plugin de Design](https://www.getstark.co/)
------------------------------
Quando usar:
  Na fase de design, dentro de ferramentas como Figma e Sketch.

Como usar:
  - No Figma/Sketch, instale o plugin Stark.
  - Selecione layers de texto ou elementos de UI.
  - Cheque contraste e visualize simulações de daltonismo.
  - Faça ajustes no design antes de passar ao desenvolvimento.
