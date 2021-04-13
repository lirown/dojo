import { html, css } from '../components/base';
import { Logo } from '../components';

import { PageElement } from '../helpers/page-element';

export class PageImprove extends PageElement {
  render() {
    return html`
      <section class="hero hero-improve">
        <h5>
          We don’t know what your real title is (that would be creepy!)<br />
          but the level of impact you’ve mentioned fits here.
        </h5>
        <h4>Entry-level Engineer / Junior Engineer.</h4>
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

customElements.define('page-improve', PageImprove);
