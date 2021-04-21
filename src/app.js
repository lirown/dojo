import { LitElement, html, css } from './components/base';
import { Logo } from './components';

import config from './config';
import appData from './app.data.js';

import { attachRouter, urlForName } from './router';
import '@forter/checkbox';
import '@forter/button';
import '@forter/radio';
import 'pwa-helper-components/pwa-install-button.js';
import 'pwa-helper-components/pwa-update-available.js';

console.log(config);
console.log(appData);
export class App extends LitElement {
  render() {
    const topics = Object.keys(appData.Ladder).map(topic => ({
      key: topic.split(' ').join('-').toLowerCase(),
      name: topic
    }));
    const levels = Object.values(appData.Meta.Dans).map(({ name }) => ({
      key: name.split(' ').join('-').toLowerCase(),
      name
    }));

    const [
      role = 'software-engineer',
      topic = 'engineering-craftsmanship'
    ] = location.pathname.split('/').reverse();

    return html` <header>
        <div class="container">
          <div class="header-inner">
            ${Logo()}
            <nav>
              <ul id="main-menu">
                ${location.pathname.includes('/improve') ? html`
                <li class="type-drop">
                  <a >Change level</a>
                  <ul id="sub-menu">
                    ${levels.map(
                      level => html`
                        <li>
                          <a
                            href="${urlForName('improve', {
                              topic,
                              role: level.key
                            })}"
                            aria-label="subemnu"
                            >${level.name}</a
                          >
                        </li>
                      `
                    )}
                  </ul>
                </li>
                <li class="type-drop">
                  <a >Change Topic</a>
                  <ul id="sub-menu">
                    ${topics.map(
                      topic => html`
                        <li>
                          <a
                            href="${urlForName('improve', {
                              topic: topic.key,
                              role
                            })}"
                            aria-label="subemnu"
                            >${topic.name}</a
                          >
                        </li>
                      `
                    )}
                  </ul>
                </li>
                `: html``}
                <li class="type-notepad">
                  <a href="${urlForName('notepad')}">My Growth Notepad</a>
                </li>
              </ul>
            </nav>

            <pwa-install-button>
              <button>Install app</button>
            </pwa-install-button>

            <pwa-update-available>
              <button>Update app</button>
            </pwa-update-available>
          </div>
        </div>
      </header>

      <!-- The main content is added / removed dynamically by the router -->
      <main role="main"></main>

      <footer>
        <div class="container">
          <span
            >Made with ❤️ by Forter Engineering
            ${config.environment !== 'production' ? `(Environment: ${config.environment})` : ''}</span
          >
        </div>
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
