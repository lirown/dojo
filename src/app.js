import { LitElement, html, css } from './components/base';
import { Logo } from './components';

import config from './config';

import { attachRouter, urlForName } from './router';

import { getTopics, getTopicFromURL } from './helpers/topic';

import { getRoles, getRoleFromURL } from './helpers/role';

import '@forter/checkbox';
import '@forter/button';
import '@forter/radio';
import '@forter/tooltip';

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
                          ${getRoles().map(
                            (level) => html`
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
                        <a>Change Topic</a>
                        <ul id="sub-menu">
                          ${getTopics().map(
                            (topic) => html`
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
                    `
                  : html``}
                <li class="type-notepad">
                  <a
                    href="${urlForName('notepad', {
                      topic
                    })}"
                    >My Growth Notepad</a
                  >
                </li>
                <pwa-install-button>
                  <button>Install app</button>
                </pwa-install-button>

                <pwa-update-available>
                  <button>Update app</button>
                </pwa-update-available>
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
            ${navigator.share
              ? html`
                <div>Like what you see? please <a href="#" @click=${this.share}> share </a> with your friends </a></div>
              `
              : ``}</span
          >
        </div>
        <div class="hiring">
          <a href="https://www.forter.com/careers/"
            ><img src="images/hire.svg" alt="We are Hiring"
          /></a>
        </div>
      </footer>`;
  }

  createRenderRoot() {
    return this;
  }

  share() {
    navigator
      .share({
        title: 'Dojo.Engineering',
        text: 'Check out Dojo Engineering and Improve as engineer.',
        url: 'https://lirown.github.io/dojo'
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }

  firstUpdated() {
    attachRouter(this.querySelector('main'));
  }
}

customElements.define('app-index', App);
