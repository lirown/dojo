import { html, css } from '../components/base';
import { Logo } from '../components';

import { PageElement } from '../helpers/page-element';

export class PageNotepad extends PageElement {
  render() {
    return html`
      <section class="hero">
        <h2>My Growth Notepad</h2>
      </section>
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          delectus? Unde, sit. Fuga modi ea praesentium. Nemo dicta qui, magnam
          cum dolorum excepturi beatae explicabo quidem fugiat ullam blanditiis
          minima!
        </p>
      </section>
    `;
  }
}

customElements.define('page-notepad', PageNotepad);
