export const routes = {
    '/': 'home',
    '/about': 'about',
    '/contact': 'contact'
  };
  
  const content = document.getElementById('app');
  
  const router = () => {
    let url = window.location.pathname;
    let route = routes[url];
    if (!route) {
      route = '404';
    }
    content.innerHTML = `<h1>${route}</h1>`;
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    router();
    window.addEventListener('popstate', router);
  });