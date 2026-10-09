# DISORDER — apresentação interativa para game jam

Projeto **separado** do jogo oficial. Não modifica o repositório, assets originais, saves, GitHub ou GitHub Pages do DISORDER. O versionamento e a publicação desta apresentação usam um repositório independente.

## Repositório e publicação

Repositório público, por autorização do autor: [gustvxlz/disorder-apresentacao](https://github.com/gustvxlz/disorder-apresentacao).

GitHub Pages ativado com fonte **GitHub Actions**. Endereço da apresentação: [gustvxlz.github.io/disorder-apresentacao](https://gustvxlz.github.io/disorder-apresentacao/). A tentativa inicial com repositório privado foi recusada pelo plano da conta; o autor autorizou torná-lo público. Nenhum plano pago foi contratado. O jogo oficial usa outro repositório e outro endereço, que não foram alterados.

O fluxo `.github/workflows/pages.yml` tem execução manual, sem disparar ações a cada envio. Para publicar uma atualização, primeiro enviar os arquivos ao repositório e depois executar **Publicar apresentação no Pages** na aba Actions, usando a branch `codex/presentation`. Aguardar a conclusão antes de conferir o site.

A publicação do site envia somente HTML/CSS/JS, as imagens utilizadas e o PDF de backup. Ferramentas de produção e documentos de ensaio não entram no site, mas os arquivos versionados podem ser consultados no repositório público. Renderizações temporárias de revisão não são versionadas. As notas incorporadas ao JavaScript também são acessíveis a quem abrir o site. Consulte a [documentação do GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Abrir e apresentar

1. Copiar a pasta **DISORDER_APRESENTACAO inteira** para o computador ou pendrive. Não copiar só `index.html`.
2. Abrir `index.html` com duplo clique em um navegador atual com JavaScript habilitado.
3. Clicar em TELA CHEIA; se o navegador recusar, usar F11/menu do navegador. ESC conserva a saída nativa da tela cheia.
4. Clicar em INICIAR APRESENTAÇÃO ou usar seta direita. A apresentação é silenciosa por padrão.

São **12 telas**, com roteiro de **6 minutos**, mais demo opcional de **2–3 minutos**. Canvas principal 1920 × 1080 / 16:9; as três primeiras telas usam uma moldura corporativa 4:3. A escala se ajusta ao tamanho disponível sem mudar a ordem dos conteúdos.

## Atalhos e interações

- →, Espaço ou Enter: avançar. ←: voltar.
- Tela 7: o primeiro avanço revela o Diretor; o segundo segue adiante.
- M: abrir/fechar o mapa e saltar para qualquer tela.
- Tab e Enter/Espaço: operar botões. Quando um botão está focado, Enter/Espaço ativa esse botão; não avança uma segunda vez.
- Armas e dossiês: clique ou Tab/Enter para selecionar.
- Aura-Matic: três compras simuladas; saldo inicial 100, níveis e preço crescente; REINICIAR restaura o exemplo.
- Galeria offline: →/← mudam a captura; VOLTAR À APRESENTAÇÃO fecha. ESC mantém o comportamento nativo do navegador/diálogo.

Interações não são passos obrigatórios do roteiro, exceto a revelação curta do Diretor. A passagem básica completa funciona só com setas. Nenhuma interação lê ou grava dados do jogo.

## Notas privadas

Abrir `APRESENTADOR.html` e clicar no link. Ele abre `index.html?presenter=true`, com ideia principal, fala sugerida, próxima tela, tempo-alvo e cronômetro pausável. O relógio começa quando se sai da capa. Navegar nesse modo não altera a janela do público: são duas instâncias independentes, sem sincronização automática. Se usar dois monitores, manter a janela com notas no monitor privado; nunca projetá-la.

O roteiro completo também está em `SPEAKER_NOTES.md`. O plano curto de 3 minutos está em `REHEARSAL.md`.

## Offline e limites da verificação

HTML, CSS, scripts clássicos e imagens usam caminhos relativos dentro desta pasta. Não há CDN, fonte remota, imports de módulos, fetch, API, service worker, banco de dados ou backend. Não depende de Node, Python, Vite ou do diretório do jogo para rodar. As fontes são fontes de sistema, com alternativas locais.

Os únicos destinos externos são links opcionais para o jogo e seu GitHub, abertos em outra aba. Sem conexão, basta não usar esses links; telas, compras simuladas, notas e galeria continuam sendo recursos locais.

A revisão automatizada foi feita por HTTP **local**, servindo apenas esta pasta, porque o navegador de automação bloqueia URLs `file://`. Os recursos locais e suas referências foram auditados. Abrir por duplo clique e desconectar fisicamente a rede no computador do evento continuam sendo verificações humanas necessárias; não foram falsamente registrados como testes executados. Não é preciso instalar ou iniciar o servidor de teste para usar os arquivos normalmente.

## Backup e emergência

- `backup/DISORDER_APRESENTACAO.pdf`: 12 páginas estáticas 16:9, com o Diretor revelado e a loja no estado demonstrativo. Abrir diretamente, sem internet.
- `backup/slides/01.jpg` até `12.jpg`: capturas das telas para visualizador de imagens ou outro fallback.
- `DEMO_SCRIPT.md`: preparação, demo curta e emergência de 10 segundos.

O PDF é um backup visual estático das telas, não contém animações, compras ou seletor de armas. O HTML continua sendo a versão editável e interativa. Não foi criado PPTX, pois o PDF já atende ao backup solicitado.

Não foi encontrado vídeo local de gameplay na fonte consultada. Não há player fictício: a alternativa é uma galeria com dez capturas reais. A apresentação usa onze capturas diferentes do jogo ao todo, incluindo o detalhe da Aura-Matic, e artes reais do protagonista, inimigos e Diretor.

## Conteúdo honesto

Desempenho permanente é **proposta**, visivelmente separado das funções implementadas. A meta atual é de desbloqueios, desafios e recordes. A campanha atual é finita. Os números de run da tela 9 são exemplos, não um resultado capturado. Há polimento/playtest pendente.

As fontes foram código e créditos atuais do jogo; relatórios antigos não prevaleceram sobre as regras implementadas. Consulte `assets/README.md` para proveniência visual e `Q_AND_A.md` para responder sobre IA e assets externos. Conferir as regras específicas da jam antes da submissão.

## Estrutura

`index.html`: 12 telas e controles. `styles.css`: identidade e layouts. `content.js`: conteúdo e notas. `interactions.js`: seletores, revelação, loja e galeria. `presentation.js`: navegação, escala, fullscreen e modo apresentador. `assets/`: cópias locais. `backup/`: PDF e capturas. `tools/`: auditoria/exportação de produção, não necessários para apresentar.

Não há dependências para instalar nem build a executar. O jogo oficial permanece somente leitura.
