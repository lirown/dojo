import { html, css } from '../components/base';
import { urlForName } from '../router';
import { PageElementNotFound } from '../helpers/page-element-not-found';

export class PageNotFound extends PageElementNotFound {
  render() {
    return html`
      <section class="not-found">

        <h1 hidden>Oops! </h1>
        <h2 hidden>We can't seem to find the page you're looking for...</h2>

        <p hidden>
          <a href="${urlForName('home')}">Back to home</a>
        </p>
      </section>
    `;
  }
}

customElements.define('page-not-found', PageNotFound);
