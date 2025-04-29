/**
 * Championships JavaScript file for the WWE Superstars Foroactivo site
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the page
  loadChampionships();

  // Add event listeners
  document.getElementById('search-form').addEventListener('submit', handleSearch);
});

/**
 * Load all championships into the grid
 */
function loadChampionships() {
  const championshipsGrid = document.querySelector('.championships-grid');

  // Create a card for each championship
  const championshipCards = championships.map(championship => {
    // Find the superstar who holds this championship
    const championId = championship.currentHolder;
    const champion = superstars.find(superstar => superstar.id === championId);

    if (!champion) return '';

    return `
      <a href="/championship.html?id=${championship.id}" class="championship-card">
        <div class="championship-image">
          <img src="${championship.image}" alt="${championship.name}" />
        </div>
        <div class="championship-info">
          <h3>${championship.name}</h3>
          <p>Established: ${championship.established}</p>
          <div class="holder">
            <div class="holder-image">
              <img src="${champion.image}" alt="${champion.name}" />
            </div>
            <span>${champion.name} (${championship.daysHeld} days)</span>
          </div>
        </div>
      </a>
    `;
  });

  championshipsGrid.innerHTML = championshipCards.join('');
}

/**
 * Handle search form submission
 */
function handleSearch(event) {
  event.preventDefault();

  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === '') {
    // If search is empty, load all championships
    loadChampionships();
    return;
  }

  // Search championships
  const championshipsGrid = document.querySelector('.championships-grid');
  const filteredChampionships = championships.filter(championship => {
    const championId = championship.currentHolder;
    const champion = superstars.find(superstar => superstar.id === championId);

    return championship.name.toLowerCase().includes(searchTerm) ||
           championship.description.toLowerCase().includes(searchTerm) ||
           (champion && champion.name.toLowerCase().includes(searchTerm));
  });

  // Create a card for each championship found
  const championshipCards = filteredChampionships.map(championship => {
    // Find the superstar who holds this championship
    const championId = championship.currentHolder;
    const champion = superstars.find(superstar => superstar.id === championId);

    if (!champion) return '';

    return `
      <a href="/championship.html?id=${championship.id}" class="championship-card">
        <div class="championship-image">
          <img src="${championship.image}" alt="${championship.name}" />
        </div>
        <div class="championship-info">
          <h3>${championship.name}</h3>
          <p>Established: ${championship.established}</p>
          <div class="holder">
            <div class="holder-image">
              <img src="${champion.image}" alt="${champion.name}" />
            </div>
            <span>${champion.name} (${championship.daysHeld} days)</span>
          </div>
        </div>
      </a>
    `;
  });

  if (championshipCards.length === 0) {
    championshipsGrid.innerHTML = `
      <div class="no-results">
        <h3>No results found for "${searchTerm}"</h3>
        <p>Try a different search term.</p>
      </div>
    `;
  } else {
    championshipsGrid.innerHTML = championshipCards.join('');
  }
}
