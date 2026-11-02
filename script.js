function openProject(projectId) {
  window.location.hash = projectId;
}

function goHome() {
  window.history.pushState("", document.title, window.location.pathname + window.location.search);
  handleRoute();
}

function handleRoute() {
  const hash = window.location.hash.replace('#', '');
  const homeView = document.getElementById('home-view');
  const subpages = document.querySelectorAll('.project-subpage');

  if (!hash) {
    subpages.forEach(page => page.classList.add('hidden'));
    homeView.classList.remove('hidden');
    window.scrollTo(0, 0);
    return;
  }

  const targetPage = document.getElementById('page-' + hash);

  if (targetPage) {
    subpages.forEach(page => page.classList.add('hidden'));
    homeView.classList.add('hidden');
    targetPage.classList.remove('hidden');
    window.scrollTo(0, 0);
  } else {
    subpages.forEach(page => page.classList.add('hidden'));
    homeView.classList.remove('hidden');
  }
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);