/* Interações da apresentação. Nenhum save, fetch ou acesso ao jogo. */
window.DISORDER_INTERACTIONS = (() => {
  const data = window.DISORDER_CONTENT;
  const byId = id => document.getElementById(id);
  let bossRevealed = false;
  let balance = 100;
  const levels = Object.fromEntries(data.upgrades.map(upgrade => [upgrade.id, 0]));
  let galleryIndex = 0;

  function selectWeapon(id) {
    const weapon = data.weapons[id];
    if (!weapon) return;
    byId('weapon-title').textContent = weapon.title;
    byId('weapon-role').textContent = weapon.role;
    byId('weapon-detail').innerText = weapon.detail;
    byId('weapon-image').src = `assets/screenshots/${id}.jpg`;
    byId('weapon-image').alt = `${weapon.title} em primeira pessoa, captura real do jogo`;
    document.querySelectorAll('[data-weapon]').forEach(button => {
      const active = button.dataset.weapon === id;
      button.classList.toggle('selected', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function selectEnemy(id) {
    const enemy = data.enemies[id];
    if (!enemy) return;
    byId('enemy-type').textContent = enemy.type;
    byId('enemy-title').textContent = enemy.title;
    byId('enemy-behavior').textContent = enemy.behavior;
    byId('enemy-counter').textContent = enemy.counter;
    byId('enemy-image').src = `assets/images/${enemy.image}`;
    byId('enemy-image').alt = `Arte real do projeto: ${enemy.title}`;
    document.querySelectorAll('[data-enemy]').forEach(button => {
      const active = button.dataset.enemy === id;
      button.classList.toggle('selected', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function revealBoss() {
    bossRevealed = true;
    document.querySelector('.boss').classList.add('revealed');
    byId('boss-locked').hidden = true;
    byId('boss-revealed').hidden = false;
  }

  function renderShop() {
    byId('sim-balance').textContent = balance;
    byId('upgrade-list').replaceChildren();
    data.upgrades.forEach(upgrade => {
      const price = Math.ceil(upgrade.base * 1.28 ** levels[upgrade.id]);
      const row = document.createElement('div');
      row.className = 'upgrade-row';
      const description = document.createElement('div');
      const title = document.createElement('h3');
      title.textContent = upgrade.name;
      const detail = document.createElement('p');
      detail.textContent = `Nível ${levels[upgrade.id]} · ${upgrade.effect}`;
      description.append(title, detail);
      const button = document.createElement('button');
      button.textContent = `${price} ◆ COMPRAR`;
      button.setAttribute('aria-label', `Comprar ${upgrade.name} por ${price} Aura`);
      button.disabled = balance < price;
      button.addEventListener('click', () => {
        if (balance < price) return;
        balance -= price;
        levels[upgrade.id]++;
        renderShop();
        byId('shop-feedback').textContent = `${upgrade.name}: nível ${levels[upgrade.id]}. Saldo ${balance} Aura.`;
        // Manter o foco num controle existente, sem deixá-lo perdido após a compra.
        const replacement = byId('upgrade-list').querySelectorAll('button')[data.upgrades.indexOf(upgrade)];
        (replacement.disabled ? byId('reset-shop') : replacement).focus({preventScroll:true});
      });
      row.append(description, button);
      byId('upgrade-list').append(row);
    });
  }

  function resetShop() {
    balance = 100;
    Object.keys(levels).forEach(id => { levels[id] = 0; });
    renderShop();
    byId('shop-feedback').textContent = 'Escolha um benefício. A próxima compra ficará mais cara.';
  }

  function showGallery(index) {
    galleryIndex = (index + data.gallery.length) % data.gallery.length;
    const item = data.gallery[galleryIndex];
    byId('gallery-image').src = `assets/screenshots/${item.file}`;
    byId('gallery-image').alt = item.caption;
    byId('gallery-caption').textContent = item.caption;
    byId('gallery-count').textContent = `${galleryIndex + 1} / ${data.gallery.length}`;
  }

  function init() {
    document.querySelectorAll('[data-weapon]').forEach(button => button.addEventListener('click', () => selectWeapon(button.dataset.weapon)));
    document.querySelectorAll('[data-enemy]').forEach(button => button.addEventListener('click', () => selectEnemy(button.dataset.enemy)));
    document.querySelectorAll('[data-loop]').forEach(button => button.addEventListener('click', () => {
      document.querySelectorAll('[data-loop]').forEach(item => item.classList.toggle('selected', item === button));
      byId('loop-detail').textContent = data.loop[Number(button.dataset.loop)];
    }));
    byId('reveal-boss').addEventListener('click', revealBoss);
    byId('reset-shop').addEventListener('click', resetShop);
    byId('open-gallery').addEventListener('click', () => { showGallery(0); byId('gallery').showModal(); });
    byId('gallery-prev').addEventListener('click', () => showGallery(galleryIndex - 1));
    byId('gallery-next').addEventListener('click', () => showGallery(galleryIndex + 1));
    document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => byId(button.dataset.close).close()));
    selectWeapon('shotgun');
    selectEnemy('common');
    resetShop();
  }

  return {init, revealBoss, isBossRevealed:() => bossRevealed, galleryMove:delta => showGallery(galleryIndex + delta)};
})();
