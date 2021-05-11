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

import './components/main-action-button.js';
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

    return html` <header>
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
                ${NavButton({
                  name: 'notepad',
                  params: { topic },
                  label: 'My Growth Notepad'
                })}
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

  /** @inheritdoc */
  firstUpdated() {
    attachRouter(this.querySelector('main'));
  }
}

customElements.define('app-index', App);
