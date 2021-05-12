import { LitElement, html, css } from './components/base';
import {
  ShareSection,
  MadeWithLove,
  HiringButton,
  Logo,
  NavButton,
  NavDropdownItem
} from './components';

import { attachRouter } from './router';
import { getTopics, getTopicFromURL } from './stores/topic';
import { getRoles, getRoleFromURL } from './stores/role';

import '@forter/checkbox';
import '@forter/button';
import '@forter/radio';
import '@forter/tooltip';
import '@forter/input';

import './components/login-or-forward-notebook-button.js';
import './components/elastic-tab.js';
import './components/modal.js';

import 'pwa-helper-components/pwa-install-button.js';
import 'pwa-helper-components/pwa-update-available.js';

/**
 * App wrapper that contains the basic layout and router
 *
 * @element app-index
 */
export class App extends LitElement {
  /** @inheritdoc */
  render() {
    const role = getRoleFromURL();
    const topic = getTopicFromURL();
    const { pathname } = location;

    return html` <header
        class="${pathname.includes('notepad') ? 'sticky' : ''}"
      >
        <div class="container" id="container" role="container">
          <div class="header-inner">
            ${Logo()}
            <nav>
              <ul id="main-menu">
                <li class="type-drop" ?hidden=${!pathname.includes('/improve')}>
                  <a>Change level</a>
                  <ul id="sub-menu">
                    ${getRoles().map(({ key, name }) =>
                      NavDropdownItem({
                        name: 'improve',
                        params: {
                          topic,
                          role: key
                        },
                        active: pathname.includes(`/${key}`),
                        label: name
                      })
                    )}
                  </ul>
                </li>
                <li class="type-drop" ?hidden=${!pathname.includes('/result')}>
                  <a>Change level</a>
                  <ul id="sub-menu">
                    ${getRoles().map(({ key, name }) =>
                      NavDropdownItem({
                        name: 'result',
                        params: {
                          role: key
                        },
                        active: pathname.includes(`/${key}`),
                        label: name
                      })
                    )}
                  </ul>
                </li>

                <li class="type-drop" ?hidden=${!pathname.includes('/improve')}>
                  <a>Change Topic</a>
                  <ul id="sub-menu">
                    ${getTopics().map(({ key, name }) =>
                      NavDropdownItem({
                        name: 'improve',
                        params: {
                          topic: key,
                          role
                        },
                        active: pathname.includes(`/${key}`),
                        label: name
                      })
                    )}
                  </ul>
                </li>
                <login-or-forward-notebook-button
                  label="My Growth Notebook"
                ></login-or-forward-notebook-button>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <!-- The main content is added / removed dynamically by the router -->
      <main role="main"></main>

      <footer>
        <div class="container">${ShareSection()} ${MadeWithLove()}</div>
        ${HiringButton()}
      </footer>`;
  }

  /** @inheritdoc */
  createRenderRoot() {
    return this;
  }

  spyScroll() {
    const myID = document.body;
    const y = window.scrollY;
    if (y >= 278) {
      myID.classList.add('scrolled');
    } else {
      myID.classList.remove('scrolled');
    }
  }

  /** @inheritdoc */
  firstUpdated() {
    attachRouter(this.querySelector('main'));
    const that = this;
    window.addEventListener(
      'scroll',
      function () {
        that.spyScroll();
      },
      false
    );
  }
}

customElements.define('app-index', App);
