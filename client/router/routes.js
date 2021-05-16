import config from '../config';
import { db } from '../services/db';
import { LAST_UPDATED_KEY } from '../services/notepad';
import { signOut } from '../services/authentication';
import { restore } from '../services/notepad';

/**
 * Update the navbar items by route
 */

function updateNavbar() {
  setTimeout(() => document.querySelector('nav-bar').requestUpdate(), 0);
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
    }
  },
  {
    path: '/logout',
    redirect: '/',
    name: 'logout',
    component: 'page-home',
    metadata: {
      title: config.appName,
      titleTemplate: null,
      description: config.appDescription
    },
    action: async () => {
      await signOut();
      await db.clear();
      localStorage.setItem(LAST_UPDATED_KEY, '');
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
    action: async (a, b) => {
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
    path: '/improve/:role/:topic',
    name: 'improve',
    component: 'page-improve',
    metadata: {
      title: 'Result',
      description: 'Suggestions for improve due to  quiz result'
    },
    action: async () => {
      await restore();
      await import('../pages/page-improve');
      updateNavbar();
    }
  },
  {
    path: '/notepad/:topic',
    name: 'notepad',
    component: 'page-notepad',
    metadata: {
      title: 'Result',
      description: 'Suggestions for improve due to  quiz result'
    },
    action: async () => {
      await restore();
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
