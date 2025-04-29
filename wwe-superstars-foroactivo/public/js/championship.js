/**
 * Championship details JavaScript file for the WWE Superstars Foroactivo site
 */

document.addEventListener('DOMContentLoaded', () => {
  // Get championship ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const championshipId = urlParams.get('id');

  if (!championshipId) {
    window.location.href = '/championships.html';
    return;
  }

  // Find championship data
  const championship = championships.find(c => c.id === championshipId);

  if (!championship) {
    window.location.href = '/championships.html';
    return;
  }

  // Load championship details
  loadChampionshipDetails(championship);

  // Add event listener for search
  document.getElementById('search-form').addEventListener('submit', handleSearch);
});

/**
 * Load championship details into the page
 */
function loadChampionshipDetails(championship) {
  // Update page title
  document.title = `${championship.name} | WWE Championships`;

  // Find current champion
  const championId = championship.currentHolder;
  const champion = superstars.find(superstar => superstar.id === championId);

  if (!champion) return;

  // Set championship image
  const championshipImageContainer = document.querySelector('.championship-image');
  championshipImageContainer.innerHTML = `<img src="${championship.image}" alt="${championship.name}" />`;

  // Set championship name and current holder
  document.getElementById('championship-name').textContent = championship.name;
  document.getElementById('holder-name').textContent = champion.name;
  document.getElementById('days-held').textContent = championship.daysHeld;

  // Set championship description
  document.getElementById('championship-description').innerHTML = `<p>${championship.description}</p>`;

  // Set championship statistics
  document.getElementById('stat-established').textContent = championship.established;
  document.getElementById('stat-longest-reign').textContent = `${championship.longestReign.name} (${championship.longestReign.days} days)`;
  document.getElementById('stat-shortest-reign').textContent = `${championship.shortestReign.name} (${championship.shortestReign.days} days)`;
  document.getElementById('stat-most-reigns').textContent = `${championship.mostReigns.name} (${championship.mostReigns.count})`;

  // Set championship history timeline
  const historyTimeline = document.querySelector('.history-timeline');

  // Create history items
  const historyItems = championship.reigns.map(reign => {
    return `
      <div class="history-item">
        <div class="history-date">${reign.date}</div>
        <div class="history-holder">${reign.holder}</div>
        <div class="history-days">${reign.days} days</div>
      </div>
    `;
  });

  historyTimeline.innerHTML = historyItems.join('');
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

  // Redirect to championships page with search term in URL
  window.location.href = `/championships.html?search=${encodeURIComponent(searchTerm)}`;
}
