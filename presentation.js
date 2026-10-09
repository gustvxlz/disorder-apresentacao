/* Navegação, escala e notas. A apresentação não usa armazenamento persistente. */
(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const notes = window.DISORDER_CONTENT.notes;
  const interactions = window.DISORDER_INTERACTIONS;
  const byId = id => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  const presenterMode = params.get('presenter') === 'true';
  let index = 0;
  let started = false;
  let running = true;
  let elapsed = 0;
  let lastTick = performance.now();
  let toastTimer;

  function scaleStage() {
    const availableWidth = innerWidth * (presenterMode ? .72 : 1);
    document.documentElement.style.setProperty('--stage-scale', Math.min(availableWidth / 1920, innerHeight / 1080));
  }

  function updateNotes() {
    const note = notes[index];
    byId('note-title').textContent = `${String(index + 1).padStart(2, '0')} / ${slides[index].dataset.title}`;
    byId('note-time').textContent = `TEMPO ALVO: ${note.time}s · TOTAL: 6 MINUTOS`;
    byId('note-idea').textContent = note.idea;
    byId('note-speech').textContent = note.speech;
    byId('note-transition').textContent = note.transition;
    byId('note-next').textContent = slides[index + 1]?.dataset.title ?? 'Demo curta e perguntas.';
  }

  function goTo(next) {
    index = Math.max(0, Math.min(slides.length - 1, next));
    slides.forEach((slide, position) => {
      slide.hidden = position !== index;
      slide.classList.toggle('active', position === index);
    });
    byId('counter').textContent = `${String(index + 1).padStart(2, '0')} / ${slides.length}`;
    byId('progress').style.width = `${(index + 1) / slides.length * 100}%`;
    byId('prev').disabled = index === 0;
    byId('next').disabled = index === slides.length - 1;
    started ||= index > 0;
    updateNotes();
    document.querySelectorAll('#overview-list button').forEach((button, position) => button.classList.toggle('selected', position === index));
    byId('stage').focus({preventScroll:true});
    document.title = `DISORDER — ${index + 1}/12 · ${slides[index].dataset.title}`;
  }

  function advance() {
    if (index === 6 && !interactions.isBossRevealed()) { interactions.revealBoss(); byId('stage').focus({preventScroll:true}); return; }
    goTo(index + 1);
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    byId('toast').textContent = message;
    byId('toast').hidden = false;
    toastTimer = setTimeout(() => { byId('toast').hidden = true; }, 5000);
  }

  async function fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();
      else showToast('Tela cheia indisponível neste navegador. Use F11 ou o menu do navegador.');
    } catch {
      showToast('O navegador recusou tela cheia. Use F11 ou o menu do navegador; a apresentação continua funcionando.');
    }
  }

  function toggleOverview() {
    if (byId('overview').open) byId('overview').close();
    else byId('overview').showModal();
  }

  document.addEventListener('keydown', event => {
    // ESC mantém o comportamento nativo de sair de fullscreen/fechar diálogo.
    if (event.key === 'Escape' || event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.target.matches('input, textarea, select')) return;
    if (byId('gallery').open) {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault(); interactions.galleryMove(event.key === 'ArrowRight' ? 1 : -1);
      }
      return;
    }
    if (event.key.toLowerCase() === 'm') { event.preventDefault(); toggleOverview(); return; }
    if (byId('overview').open) return;
    const focusedControl = event.target.closest('button,a');
    if ((event.key === 'Enter' || event.key === ' ') && focusedControl) return;
    if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'Enter') { event.preventDefault(); if (!event.repeat) advance(); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); if (!event.repeat) goTo(index - 1); }
  });

  byId('start').addEventListener('click', () => goTo(1));
  byId('prev').addEventListener('click', () => goTo(index - 1));
  byId('next').addEventListener('click', advance);
  document.querySelectorAll('[data-fullscreen]').forEach(button => button.addEventListener('click', fullscreen));
  slides.forEach((slide, position) => {
    const button = document.createElement('button');
    const number = document.createElement('span');
    number.textContent = String(position + 1).padStart(2, '0');
    button.append(number, document.createTextNode(slide.dataset.title));
    button.addEventListener('click', () => { byId('overview').close(); goTo(position); });
    byId('overview-list').append(button);
  });
  byId('timer-toggle').addEventListener('click', () => {
    running = !running;
    byId('timer-toggle').textContent = running ? 'PAUSAR' : 'RETOMAR';
  });
  byId('timer-reset').addEventListener('click', () => { elapsed = 0; lastTick = performance.now(); });
  document.body.classList.toggle('presenter-mode', presenterMode);
  byId('presenter').hidden = !presenterMode;
  if (presenterMode) {
    setInterval(() => {
      const now = performance.now();
      if (started && running) elapsed += (now - lastTick) / 1000;
      lastTick = now;
      byId('timer').textContent = `${String(Math.floor(elapsed / 60)).padStart(2, '0')}:${String(Math.floor(elapsed % 60)).padStart(2, '0')}`;
    }, 250);
  }
  addEventListener('resize', scaleStage);
  interactions.init();
  scaleStage();
  goTo(0);
})();
