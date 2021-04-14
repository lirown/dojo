import { html } from 'lit-element';
import { Logo, Feature } from '../components';
import { urlForName } from '../router';
import { PageElement } from '../helpers/page-element';

export class PageHome extends PageElement {
  render() {
    return html`
      <section class="main-hero">
        <section class="half">
          <!--<img class="logo" src="images/logo.svg"></img>-->
          <h1>Improve your craftsmanship<br> as a Software Engineer</h1>
          <h5>
            We'll share with you ideas, concepts, frameworks and resources that
            can help you improve your skills, expand your knowledge and make
            bigger impact.
          </h5>
          <a href="${urlForName('quiz')}">
            <fc-button size="large">I'M READY! SHOW ME</fc-button>
          </a>
          <p>all free, no emails, no BS. We're Engineers..</p>
        </section>
      </section>
      <section>
        <h4>
          Interested in our Career Ladder and the journey we had behind it?
        </h4>
        <span>
          We built the Engineering Dojo based on our Career Ladder while taking
          out things that are too specific. If you’re trying to build your own,
          don’t start with a blank page. You can have both and see what you like
          to use.
        </span>
        </section>
        <section class="featuring">
          <div>From the creators of other fun things...</div>
            ${Feature({ name: 'forkerlabs' })}
            ${Feature({ name: 'softwarearchitectureaddict' })}
            ${Feature({ name: 'chuckwho' })}
        </section>
    `;
  }
}

customElements.define('page-home', PageHome);
