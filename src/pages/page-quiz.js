import { html, css } from '../components/base';
import { Logo } from '../components';

import { PageElement } from '../helpers/page-element';

export class PageQuiz extends PageElement {
  render() {
    return html`
      <section class="hero">
        <h5>To be helpful, we need to get to know you just a little.</h5>
        <h4>Answer these 5 quick questions without overthinking it.</h4>
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

customElements.define('page-quiz', PageQuiz);
