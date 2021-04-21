import config from '../config';

/**
 * Update the navbar items by route
 */

function updateNavbar() {
  setTimeout(() => document.querySelector('app-index').requestUpdate(), 0);
}

/**
 * Route Config
 * @param {Route[]} route config
 */
export const routes = [
  {
    path: '/',
    name: 'home',
    component: 'page-home',
    metadata: {
      title: config.appName,
      titleTemplate: null,
      description: config.appDescription
    },
    action: async () => {
      await import('../pages/page-home');
      updateNavbar();
    }
  },
  {
    path: '/result/:role',
    name: 'result',
    component: 'page-result',
    metadata: {
      title: 'Result',
      description: 'Quiz result page'
    },
    action: async () => {
      await import('../pages/page-result');
      updateNavbar();
    }
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: 'page-quiz',
    metadata: {
      title: 'Result',
      description: 'Quiz quiz page'
    },
    action: async () => {
      await import('../pages/page-quiz');
      updateNavbar();
    }
  },
  {
    path: '/improve/:topic/:role',
    name: 'improve',
    component: 'page-improve',
    metadata: {
      title: 'Result',
      description: 'Suggestions for improve due to  quiz result'
    },
    action: async () => {
      await import('../pages/page-improve');
      updateNavbar();
    }
  },
  {
    path: '/notepad',
    name: 'notepad',
    component: 'page-notepad',
    metadata: {
      title: 'Result',
      description: 'Suggestions for improve due to  quiz result'
    },
    action: async () => {
      await import('../pages/page-notepad');
      updateNavbar();
    }
  },
  {
    path: '(.*)',
    name: 'not-found',
    component: 'page-not-found',
    metadata: {
      title: 'Error',
      description: null,
      image: null
    },
    action: async () => {
      await import('../pages/page-not-found');
      updateNavbar();
    }
  }
];
