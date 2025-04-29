/**
 * Main JavaScript file for the WWE Superstars Foroactivo site
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the page
  initPage();

  // Add event listeners
  document.getElementById('search-form').addEventListener('submit', handleSearch);

  // Add click event to filter buttons
  const filterButtons = document.querySelectorAll('.filter-button');
  filterButtons.forEach(button => {
    button.addEventListener('click', handleFilter);
  });
});

/**
 * Initialize the page content
 */
function initPage() {
  // Load champions
  loadChampions();

  // Load superstars
  loadSuperstars();
}

/**
 * Load champions into the champions grid
 */
function loadChampions() {
  const championsGrid = document.querySelector('.champions-grid');

  // Create a card for each champion
  const championCards = championships.map(championship => {
    // Find the superstar who holds this championship
    const championId = championship.currentHolder;
    const champion = superstars.find(superstar => superstar.id === championId);

    if (!champion) return '';

    return `
      <a href="/superstar.html?id=${champion.id}" class="champion-card">
        <div class="champion-image">
          <img src="${champion.image}" alt="${champion.name}" />
          <div class="champion-title">
            <h3>${champion.name}</h3>
            <p>${championship.name}</p>
          </div>
        </div>
      </a>
    `;
  });

  championsGrid.innerHTML = championCards.join('');
}

/**
 * Load superstars into the superstars grid
 */
function loadSuperstars(filter = 'all') {
  const superstarsGrid = document.querySelector('.superstars-grid');

  // Filter superstars if needed
  let filteredSuperstars = superstars;
  if (filter !== 'all') {
    filteredSuperstars = superstars.filter(superstar => superstar.brand.toLowerCase() === filter.toLowerCase());
  }

  // Create a card for each superstar
  const superstarCards = filteredSuperstars.map(superstar => {
    return `
      <a href="/superstar.html?id=${superstar.id}" class="superstar-card">
        <div class="superstar-image">
          <img src="${superstar.image}" alt="${superstar.name}" />
          <div class="superstar-info">
            <h3>${superstar.name}</h3>
            <p>${superstar.brand}</p>
          </div>
        </div>
      </a>
    `;
  });

  if (superstarCards.length === 0) {
    superstarsGrid.innerHTML = `
      <div class="no-results">
        <h3>No superstars found</h3>
        <p>Try a different filter or search term.</p>
      </div>
    `;
  } else {
    superstarsGrid.innerHTML = superstarCards.join('');
  }
}

/**
 * Handle filter button click
 */
function handleFilter(event) {
  // Remove active class from all buttons
  const filterButtons = document.querySelectorAll('.filter-button');
  filterButtons.forEach(button => button.classList.remove('active'));

  // Add active class to clicked button
  event.target.classList.add('active');

  // Get the filter value
  const filter = event.target.dataset.filter;

  // Load superstars with filter
  loadSuperstars(filter);
}

/**
 * Handle search form submission
 */
function handleSearch(event) {
  event.preventDefault();

  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === '') {
    // If search is empty, load all superstars
    loadSuperstars();
    return;
  }

  // Search superstars
  const superstarsGrid = document.querySelector('.superstars-grid');
  const filteredSuperstars = superstars.filter(superstar => {
    return superstar.name.toLowerCase().includes(searchTerm) ||
           superstar.brand.toLowerCase().includes(searchTerm);
  });

  // Create a card for each superstar found
  const superstarCards = filteredSuperstars.map(superstar => {
    return `
      <a href="/superstar.html?id=${superstar.id}" class="superstar-card">
        <div class="superstar-image">
          <img src="${superstar.image}" alt="${superstar.name}" />
          <div class="superstar-info">
            <h3>${superstar.name}</h3>
            <p>${superstar.brand}</p>
          </div>
        </div>
      </a>
    `;
  });

  if (superstarCards.length === 0) {
    superstarsGrid.innerHTML = `
      <div class="no-results">
        <h3>No results found for "${searchTerm}"</h3>
        <p>Try a different search term.</p>
      </div>
    `;
  } else {
    superstarsGrid.innerHTML = superstarCards.join('');
  }
}
