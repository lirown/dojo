import { LitElement, html, css } from './components/base';
import { Logo } from './components';

import config from './config';
import { attachRouter, urlForName } from './router';
import '@forter/checkbox';
import '@forter/button';
import '@forter/radio';
import 'pwa-helper-components/pwa-install-button.js';
import 'pwa-helper-components/pwa-update-available.js';

console.log(config);

export class App extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
        }

        header {
          display: flex;
          align-items: center;
          height: 53px;
          padding: 0 1rem;
          background-color: transparent;
          position: absolute;
          width: 92%;
          align-self: end;
        }

        header nav {
          display: flex;
          flex: 1;
          align-self: stretch;
          justify-content: flex-end;
          height: 30px;
          padding-top: 70px;
        }

        header nav a {
          display: flex;
          align-items: center;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 0 25px;
        }

        header nav a:not(:last-child) {
          margin-right: 1rem;
        }

        header nav a:hover {
          color: #bbb;
        }

        main,
        main > * {
          display: flex;
          flex: 1;
          flex-direction: column;
        }

        main:empty ~ footer {
          display: none;
        }

        footer {
          padding: 1rem;
          text-align: center;
          background-color: white;
        }
      `
    ];
  }

  render() {
    return html` <header>
        <div class="container">
          <div class="header-inner">
            ${Logo()}
            <nav>
              <ul id="main-menu">
                <li class="type-drop">
                  <a href="${urlForName('result')}">Drop Down</a>
                  <ul id="sub-menu">
                    <li><a href="#" aria-label="subemnu">submenu</a></li>
                    <li><a href="#" aria-label="subemnu">submenu</a></li>
                    <li><a href="#" aria-label="subemnu">submenu</a></li>
                    <li><a href="#" aria-label="subemnu">submenu</a></li>
                  </ul>
                </li>
                <li>
                  <a href="${urlForName('result')}">Result</a>
                </li>
                <li>
                  <a href="${urlForName('quiz')}">Quiz</a>
                </li>
                <li>
                  <a href="${urlForName('improve')}">Improve</a>
                </li>
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
            >Made with ❤️ by Forter Engineering (Environment:
            ${config.environment})</span
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
