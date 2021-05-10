import { LitElement, html, css } from './components/base';
import {
  ShareSection,
  HiringButton,
  Logo,
  NavButton,
  NavDropdownItem
} from './components';

import config from './config';

import { attachRouter, urlForName } from './router';
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

export class App extends LitElement {
  render() {
    const role = getRoleFromURL();
    const topic = getTopicFromURL();

    return html` <header>
        <div class="container">
          <div class="header-inner">
            ${Logo()}
            <nav>
              <ul id="main-menu">
                ${location.pathname.includes('/improve')
                  ? html`
                      <li class="type-drop">
                        <a>Change level</a>
                        <ul id="sub-menu">
                          ${getRoles().map((level) =>
                            NavDropdownItem({
                              name: 'improve',
                              params: {
                                topic,
                                role: level.key
                              },
                              label: level.name
                            })
                          )}
                        </ul>
                      </li>
                      <li class="type-drop">
                        <a>Change Topic</a>
                        <ul id="sub-menu">
                          ${getTopics().map((topic) =>
                            NavDropdownItem({
                              name: 'improve',
                              params: {
                                topic: topic.key,
                                role
                              },
                              label: topic.name
                            })
                          )}
                        </ul>
                      </li>
                    `
                  : html``}
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
        <div class="container">
          <span
            >Made with ❤️ by Forter Engineering
            ${config.environment !== 'production'
              ? `(Environment: ${config.environment})`
              : ''}
            ${ShareSection()}
          </span>
        </div>
        ${HiringButton()}
      </footer>`;
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    attachRouter(this.querySelector('main'));
  }
}

customElements.define('app-index', App);
