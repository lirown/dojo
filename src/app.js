import { LitElement, html, css } from './components/base';
import { Logo } from './components';

import config from './config';
import { attachRouter, urlForName } from './router';

import '@forter/button';
import 'pwa-helper-components/pwa-install-button.js';
import 'pwa-helper-components/pwa-update-available.js';

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
    return html`
      <header>
        ${Logo()}
        <nav>
          <a href="/result">Result</a>
          <a href="/quiz">Quiz</a>
          <a href="/improve">Improve</a>
        </nav>

        <pwa-install-button>
          <button>Install app</button>
        </pwa-install-button>

        <pwa-update-available>
          <button>Update app</button>
        </pwa-update-available>
      </header>

      <!-- The main content is added / removed dynamically by the router -->
      <main role="main"></main>

      <footer>
        <span
          >Made with ❤️ by Forter Engineering (Environment:
          ${config.environment})</span
        >
      </footer>
    `;
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    attachRouter(this.querySelector('main'));
  }
}

customElements.define('app-index', App);
