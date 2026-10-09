# DISORDER — perguntas prováveis

Respostas curtas, honestas e naturais. Não assumir que a organização permite qualquer ferramenta ou asset externo; conferir as regras específicas da jam antes da submissão.

## Qual é o jogo, em uma frase?

Um FPS estilizado em que uma comédia de escritório vira apocalipse zumbi; sobreviver envolve combate e escolhas de recursos.

## Qual é o diferencial?

A identidade corporativa continua quando o gênero muda: o protagonista está de terno, a defesa é uma tampa de lixeira, uma arma é um grampeador e o boss é o Diretor Executivo. O humor aparece no visual e nas mecânicas, não só em diálogos.

## O que já está jogável?

A introdução de escritório e o Capítulo 1 do shooter, com seis áreas, arsenal de oito armas, Aura-Matic, eventos, tipos de inimigo e confronto final. Há dificuldades, modificadores, desafios e recordes locais. O projeto ainda está em polimento; “jogável” não significa livre de bugs ou balanceado definitivamente.

## É um modo infinito?

O capítulo normal atual é finito, com seis áreas e o Diretor no final. Há hordas automáticas dentro dessa progressão. Relatórios antigos mencionam uma rodada de hordas infinitas, mas não descrevem a campanha atual. Não prometer um modo infinito independente como conclusão desta apresentação.

## O boss só tem mais vida?

Não. Ele tem três fases, ataques com preparação e recuperação, invocações e repertório crescente. Mudanças ocorrem em 70% e 35% da vida. Timing, cobertura e reposicionamento importam. A adequação dos números ainda depende de playtest.

## Por que inimigos 2D num cenário 3D?

É uma escolha estilizada e econômica: recortes transparentes permitem variedade de silhueta e humor, sem exigir um pipeline caro de personagens animados. O posicionamento e o combate continuam no espaço 3D. A leitura e a performance precisam ser avaliadas em jogo.

## Toda eliminação dá Aura?

Todo inimigo comum dá um orbe de 1 Aura. Pesados dão 2; elites, 4 ou 5 conforme a dificuldade. Double Aura dobra esses drops. A equipe invocada pelo Diretor tem um orçamento total de 24 Aura para evitar farm infinito. O Diretor tem uma recompensa própria de 200 Aura.

## Aura e Desempenho são a mesma coisa?

Não. Aura existe hoje e pertence à run, junto com os upgrades comprados. Desempenho é uma proposta de moeda permanente — 1 ponto por eliminação — e não foi implementado no código atual. Hoje a persistência é de desbloqueios, desafios e recordes locais.

## A compra desta apresentação mexe no jogo?

Não. É uma simulação local em memória, com saldo de exemplo de 100 Aura. Usa três nomes e preços-base reais, mas não lê nem grava saves, não executa o código do jogo e não tem backend. Recarregar a apresentação restaura o exemplo.

## Foi tudo feito manualmente? Usou IA?

Não seria correto dizer que tudo foi manual. O projeto usa assistência de IA no desenvolvimento e imagens geradas para retratos e recortes ficcionais, conforme os créditos. Direção, escopo, decisões e revisão pertencem ao autor. Os assets de IA não são declarados como arte desenhada à mão nem automaticamente CC0. A elegibilidade dessas ferramentas deve ser conferida nas regras da jam.

## Usou modelos externos?

Sim. Os créditos identificam assets licenciados CC0 de Kenney e Poly Haven, mãos WRAD ARMS de wriks e cinco armas do pack de Quaternius. Há adaptações de materiais, escala e pegada, além de elementos autorais do projeto. Não reivindicar autoria da geometria original desses packs. Licenças CC0 citadas aplicam-se aos assets identificados, não a toda a arte ou ao código do jogo.

## E a música e os sons?

Os créditos registram música original por síntese, exportada em Ogg, e efeitos sintetizados em runtime. Não atribuir músicas comerciais ou samples baixados ao projeto. A apresentação é silenciosa por padrão; não contém um vídeo de gameplay ou áudio obrigatório.

## Qual tecnologia e por quê?

JavaScript, Three.js, Vite, HTML e CSS. Three.js faz a renderização; sistemas próprios controlam combate e progressão; Vite gera arquivos estáticos. Isso permite publicar no GitHub Pages sem backend em runtime. Blender é ferramenta de produção; arquivos `.blend` não são carregados pelo jogo.

## Funciona em qualquer computador fraco?

Não dá para garantir isso universalmente. Billboards, texturas compactas, pools, limites de efeitos, IA a 10 Hz e qualidade ajustável são decisões para controlar custo. Ainda é necessário testar máquinas reais e sessões longas. Não usar um resultado de diagnóstico como promessa de FPS mínimo para todos.

## Como funciona o save?

No armazenamento local do navegador, com validação e migração de versões. O perfil de meta guarda desbloqueios, desafios e recordes. Não é uma conta com sincronização em nuvem; apagar dados do navegador ou trocar de dispositivo pode perder o progresso local.

## Qual foi a maior dificuldade?

Transformar a virada de gênero em algo jogável e legível. Controle de câmera após cutscenes, coerência de mãos/armas e ritmo da economia exigiram revisões. O projeto continuou sendo ajustado em vez de apenas acumular novas features.

## O que falta?

Playtest humano continuado de equilíbrio e performance, revisão de consistência visual e estabilidade em diferentes navegadores e máquinas. A moeda permanente Desempenho é uma proposta futura, não promessa de data. Não há capítulo 2 apresentado aqui.

## Quanto tempo levou? Quem fez?

Responder com a cronologia e os integrantes reais do autor. Este material não inventa tamanho de equipe, horas trabalhadas, prazo da jam ou autoria individual total. Se não tiver um número verificado, dizer: “Não quero chutar esse dado; posso trazer a cronologia do projeto depois.”
