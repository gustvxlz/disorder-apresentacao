/* Dados locais. Scripts clássicos permitem abrir index.html diretamente, sem servidor. */
window.DISORDER_CONTENT = {
  loop: [
    'Leia a rua: cobertura, suprimentos e caminhos para o próximo confronto.',
    'Escolha a arma, controle a distância e reconheça os avisos dos ataques.',
    'Cada inimigo comum deixa um orbe de 1 Aura. A coleta tem magnetismo e feedback.',
    'Troque Aura por armas, suprimentos ou upgrades com preços crescentes.',
    'Enfrente novos encontros, eventos e, no fim do capítulo, o Diretor Executivo.'
  ],
  weapons: {
    extinguisher:{title:'EXTINTOR',role:'A ferramenta improvisada do início.',detail:'Ataque corpo a corpo pesado.\nTampa de lixeira disponível para defesa.'},
    knife:{title:'FACA',role:'Resposta rápida quando o perigo encosta.',detail:'Corte curto, recuperação rápida.\nUma alternativa sem gastar munição.'},
    pistol:{title:'PISTOLA',role:'Precisão e controle de recursos.',detail:'12 tiros por carregador.\nHeadshot com multiplicador de 2×.'},
    shotgun:{title:'ESPINGARDA',role:'Controle de grupos a curta distância.',detail:'10 pellets independentes.\nUm disparo pode atingir vários alvos.'},
    smg:{title:'SMG · HORA EXTRA',role:'Pressão contínua contra grupos próximos.',detail:'Disparo automático.\nA dispersão aumenta ao manter a rajada.'},
    revolver:{title:'REVÓLVER · RESCISÃO',role:'Poucos tiros. Argumentos fortes.',detail:'Cadência lenta e recuo pesado.\nHeadshot com multiplicador de 3×.'},
    rifle:{title:'RIFLE · ATA FINAL',role:'Combate a média e longa distância.',detail:'Tiros precisos em ritmo controlado.\nNão é uma arma automática.'},
    stapler:{title:'GRAMPEADOR INDUSTRIAL',role:'O protocolo agora é ofensivo.',detail:'Rajada de três grampos com empurrão.\nCurto alcance e munição própria.'}
  },
  enemies: {
    common:{type:'COMUM',title:'EXECUTIVO',image:'zombie-executive.png',behavior:'Persegue e pressiona de perto.',counter:'Mantenha distância. Use a tampa para abrir espaço.'},
    fast:{type:'RÁPIDO',title:'ENTREGA EXPRESSA',image:'zombie-courier.webp',behavior:'Fecha a distância com uma investida.',counter:'Leia a preparação do ataque. Responda depois da aproximação.'},
    heavy:{type:'PESADO',title:'TRABALHO BRAÇAL',image:'zombie-worker.webp',behavior:'Resistente, com pisão e investida.',counter:'Evite o alcance do pisão. Use o cenário para reposicionar.'},
    ranged:{type:'À DISTÂNCIA',title:'RH PÓS-VIDA',image:'boss-hr.webp',behavior:'Ataca com projéteis de gosma.',counter:'Priorize a ameaça à distância e desvie dos projéteis.'},
    elite:{type:'ELITE',title:'FUNCIONÁRIO DO MÊS',image:'zombie-executive.png',behavior:'Variação mais resistente e agressiva.',counter:'Não é uma espécie nova: é um modificador. Recompensa maior de Aura.'},
    special:{type:'ESPECIAL',title:'O GRITADOR',image:'boss-intern.webp',behavior:'Usa o grito para pressionar o confronto.',counter:'Ataque com preparação visível. Explosivos e blindados ampliam o repertório.'}
  },
  upgrades: [
    {id:'health',name:'PLANO DE SAÚDE',base:12,effect:'+25 de vida máxima por nível'},
    {id:'firearm',name:'ARGUMENTO BALÍSTICO',base:12,effect:'+10% de dano de armas por nível'},
    {id:'reload',name:'PAUSA NÃO REMUNERADA',base:10,effect:'Recarga mais rápida, com ganho decrescente'}
  ],
  gallery: [
    {file:'office.png',caption:'ESCRITÓRIO / atmosfera corporativa em 640 × 480 e 4:3.'},
    {file:'extinguisher.jpg',caption:'VIRADA / exterior real, extintor improvisado e tampa para defesa.'},
    {file:'pistol.jpg',caption:'PRECISÃO / pistola e leitura da arma em primeira pessoa.'},
    {file:'shotgun.jpg',caption:'CONTROLE DE GRUPOS / espingarda com dez pellets por disparo.'},
    {file:'smg.jpg',caption:'ARSENAL / SMG automática para pressão a curta distância.'},
    {file:'revolver.jpg',caption:'ARSENAL / revólver de cadência lenta e impacto forte.'},
    {file:'rifle.jpg',caption:'ARSENAL / rifle para médio e longo alcance.'},
    {file:'stapler.jpg',caption:'HUMOR EM MECÂNICA / grampeador industrial.'},
    {file:'knife.jpg',caption:'ARSENAL / faca: ataque curto sem consumir munição.'},
    {file:'boss.jpg',caption:'CONFRONTO FINAL / arena real do Diretor Executivo.'}
  ],
  notes: [
    {time:20,idea:'Apresentar a identidade: trabalho ruim vira sobrevivência.',speech:'DISORDER começa com um problema bem cotidiano: você só quer terminar um expediente ruim. Só que o expediente termina antes do mundo. É um jogo indie em primeira pessoa que usa esse contraste para transformar comédia de escritório em um FPS de apocalipse zumbi.',transition:'Começo explicando o jogo em uma frase.'},
    {time:25,idea:'Deixar claro o gênero, o protagonista e a promessa jogável.',speech:'A base é um FPS estilizado com humor ácido. O protagonista não é um soldado: é um funcionário cansado, de terno gasto e gravata vermelha. Essa identidade aparece nas armas improvisadas, nos inimigos corporativos e até nos nomes dos upgrades. O capítulo jogável conecta combate, escolhas de recursos e novas tentativas.',transition:'Para entender por que esse contraste funciona, vamos voltar ao escritório.'},
    {time:30,idea:'Estabelecer a rotina e preparar a virada visual.',speech:'O início é um escritório burocrático, com uma apresentação baixa resolução em quatro por três. Você encontra rotina, personagens e o desconforto de um lugar onde ninguém quer estar. A demissão deveria ser o fim do problema. Na saída, ela vira o começo de outro. O escritório não é só prólogo: ele define a piada e a identidade do mundo.',transition:'Pausa curta. Avanço para abrir a imagem em dezesseis por nove.'},
    {time:35,idea:'Mostrar a mudança de gênero e explicar a decisão recorrente do jogador.',speech:'A imagem abre e o ritmo muda. Agora o loop é explorar, combater, coletar Aura, melhorar e avançar. Explorar significa ler cobertura, suprimentos e ameaças; não só procurar o próximo botão. A cada confronto você decide entre comprar uma arma, reforçar sua build ou guardar recursos. O capítulo atual tem seis áreas e um confronto final, não uma campanha infinita.',transition:'O primeiro lado dessa decisão é escolher a ferramenta certa.'},
    {time:35,idea:'Demonstrar funções diferentes, não recitar todos os números.',speech:'O arsenal vai do extintor e da faca ao grampeador industrial. A pistola privilegia precisão; a SMG mantém pressão; o revólver troca cadência por impacto; o rifle controla a distância. A espingarda dispara dez pellets independentes, então um tiro pode atingir mais de um inimigo. Munição, recuo, headshots, a tampa de defesa e feedback de impacto tornam a escolha mais importante que apenas dano bruto.',transition:'Armas diferentes fazem sentido quando os inimigos pedem respostas diferentes.'},
    {time:30,idea:'Explicar leitura de comportamento e o uso de billboards.',speech:'Os inimigos são recortes transparentes em um mundo três-dimensional. Isso é uma decisão de linguagem e de custo, não uma tentativa de esconder que são sprites. O comum pressiona de perto; o rápido fecha distância; o pesado traz investida e pisão; o RH ataca de longe. Elites reforçam tipos existentes. Especiais, como gritadores, explosivos e blindados, mudam a prioridade. A preparação dos ataques dá ao jogador uma chance de responder.',transition:'Toda essa hierarquia termina na diretoria.'},
    {time:40,idea:'Revelar o Diretor e destacar fases e leitura, não só HP.',speech:'Quem dá a última aprovação é o Diretor Executivo. Revelo o dossiê. Ele é a caricatura de uma reunião que saiu completamente do controle. A luta tem três fases: começa com investidas, pisões, arremessos e papéis; depois invoca a equipe; no fim entram reunião, cortes e demissão em massa. As fases aceleram a pressão, mas preservam avisos e recuperação. O desafio é ler o espaço e o timing, não só esvaziar uma barra.',transition:'Para chegar a essa reunião, o jogador precisa financiar a própria sobrevivência.'},
    {time:40,idea:'Demonstrar uma compra e a economia previsível da run.',speech:'Todo inimigo comum morto deixa um orbe de uma Aura. Pesados valem dois; elites, quatro ou cinco; Double Aura dobra esses drops. O Diretor tem uma recompensa própria, e a equipe invocada possui um limite para não virar farm infinito. Aqui faço uma compra simulada: o saldo cai e o próximo nível encarece. Os nomes e preços-base são reais, mas essa tela não toca no save. A Aura-Matic pausa o combate e transforma a coleta em decisão de build.',transition:'A Aura pertence à run. O que fica depois dela é uma camada diferente.'},
    {time:30,idea:'Separar claramente o que existe e o que é proposta.',speech:'Hoje, uma nova run reinicia Aura e upgrades. O perfil local guarda armas desbloqueadas, desafios concluídos e recordes. Dificuldades, eventos e modificadores mudam a próxima tentativa. Desempenho, à direita, é uma proposta, não uma função concluída: uma eliminação viraria um ponto permanente para melhorias futuras. Os números aqui são apenas um exemplo. Essa separação mantém a apresentação honesta e deixa clara a direção de evolução.',transition:'Tudo isso roda no navegador. Vou resumir como os sistemas se conectam.'},
    {time:30,idea:'Demonstrar conhecimento técnico sem mostrar código irrelevante.',speech:'O jogo usa JavaScript, Three.js, HTML e CSS, com Vite para gerar a publicação estática no GitHub Pages. Entrada, combate, progressão e apresentação têm responsabilidades separadas. Save e meta ficam no armazenamento local do navegador. Billboards, texturas compactas, efeitos reaproveitados em pools e IA atualizada a dez hertz ajudam a controlar o custo. Não existe backend em runtime, e arquivos Blender são fontes de produção, não recursos carregados pelo jogador.',transition:'A parte difícil foi fazer essas escolhas funcionarem juntas.'},
    {time:30,idea:'Mostrar evolução e dificuldades reais, com limites atuais.',speech:'O projeto saiu de um escritório centrado em atmosfera para um FPS com combate e economia. Depois, precisou de passes de legibilidade e estabilidade. Retomar a entrada após cutscenes, alinhar mãos e armas e impedir poluição de efeitos foram problemas concretos. A economia também mudou: agora são muitos drops pequenos e previsíveis, com preços crescentes. O capítulo é jogável, mas equilíbrio, consistência visual e performance ainda precisam de playtest humano continuado.',transition:'Fecho com uma demonstração curta ou com a galeria offline.'},
    {time:15,idea:'Encerrar com personalidade e dar um caminho seguro para a demo.',speech:'Esse é DISORDER: um expediente ruim, um apocalipse pior ainda. O capítulo está jogável no navegador. Agora eu mostro um trecho de combate. Se a conexão ou a demo não colaborar, estas capturas locais mostram o mesmo projeto sem interromper a apresentação. Obrigado.',transition:'Demo de dois a três minutos; depois, perguntas.'}
  ]
};
