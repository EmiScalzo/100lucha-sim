/**
 * Superstar details JavaScript file for the WWE Superstars Foroactivo site
 */

document.addEventListener('DOMContentLoaded', () => {
  // Get superstar ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const superstarId = urlParams.get('id');

  if (!superstarId) {
    window.location.href = '/';
    return;
  }

  // Find superstar data
  const superstar = superstars.find(s => s.id === superstarId);

  if (!superstar) {
    window.location.href = '/';
    return;
  }

  // Load superstar details
  loadSuperstarDetails(superstar);

  // Add event listener for search
  document.getElementById('search-form').addEventListener('submit', handleSearch);
});

/**
 * Load superstar details into the page
 */
function loadSuperstarDetails(superstar) {
  // Update page title
  document.title = `${superstar.name} | WWE Superstars`;

  // Set superstar image
  const profileImageContainer = document.querySelector('.profile-image');
  profileImageContainer.innerHTML = `<img src="${superstar.image}" alt="${superstar.name}" />`;

  // Set superstar name and brand
  document.getElementById('superstar-name').textContent = superstar.name;
  document.getElementById('superstar-nickname').textContent = superstar.brand;

  // Set superstar bio
  document.getElementById('superstar-bio').innerHTML = `<p>${superstar.bio}</p>`;

  // Set superstar statistics
  document.getElementById('stat-height').textContent = superstar.stats.height;
  document.getElementById('stat-weight').textContent = superstar.stats.weight;
  document.getElementById('stat-hometown').textContent = superstar.stats.hometown;
  document.getElementById('stat-signature').textContent = superstar.stats.signature;
  document.getElementById('stat-highlights').textContent = superstar.stats.career;
  document.getElementById('stat-debut').textContent = superstar.stats.debut;

  // Set superstar championships
  const championshipsContainer = document.getElementById('superstar-championships');

  if (superstar.championships && superstar.championships.length > 0) {
    // Find championship data for each ID in the superstar's championships array
    const superstarChampionships = superstar.championships.map(championshipId => {
      const championship = championships.find(c => c.id === championshipId);
      if (!championship) return '';

      return `
        <div class="championship-item">
          <a href="/championship.html?id=${championship.id}" class="championship-link">
            <div class="championship-thumb">
              <img src="${championship.image}" alt="${championship.name}" />
            </div>
            <div class="championship-details">
              <h4>${championship.name}</h4>
              <p>Held for ${championship.daysHeld} days</p>
            </div>
          </a>
        </div>
      `;
    });

    championshipsContainer.innerHTML = superstarChampionships.join('');
  } else {
    championshipsContainer.innerHTML = '<p>No championships currently held.</p>';
  }
}

/**
 * Handle search form submission
 */
function handleSearch(event) {
  event.preventDefault();

  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === '') {
    return;
  }

  // Redirect to home page with search term in URL
  window.location.href = `/?search=${encodeURIComponent(searchTerm)}`;
}
