const cards = document.querySelectorAll('.auth-card');
const toggles = document.querySelectorAll('[data-toggle]');

function showCard(targetView) {
  cards.forEach((card) => {
    const isActive = card.dataset.view === targetView;
    card.classList.toggle('active', isActive);
  });
}

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    showCard(toggle.dataset.toggle);
  });
});
