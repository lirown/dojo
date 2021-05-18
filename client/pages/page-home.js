import { html, css } from '../components/base';
import {
  PageElement,
  Feature,
  Ninja,
  GoogleDocsSpreadsheetLink
} from '../components';
import { goto, urlForName } from '../router';
import { get } from '../services/db';

/**
 * Home Page when opening the app.
 * <!-- Author: Liron Goldenberg <lgoldenberg@forter.com> -->
 *
 * @element page-home
 */
export class PageHome extends PageElement {
  async navigateQuizOrResults() {
    const user = await get('user');
    if (user?.role) {
      goto('result', { role: user?.role });
      return;
    }
    goto('quiz');
  }

  /** @inheritdoc */
  render() {
    return html` <section class="main-hero">
        <div class="container">
          <div class="hero-inner">
            ${Ninja()}
            <h1>
              Improve your craftsmanship<br />
              as a Software Engineer
            </h1>
            <h2>
              We'll share with you ideas, concepts, frameworks and resources
              that can help you improve your skills, expand your knowledge and
              make bigger impact.
            </h2>
            <div class="bottom-data">
              <fc-button
                size="large"
                @click="${async () => await this.navigateQuizOrResults()}"
                >I'm Ready! Show Me</fc-button
              >
              <p>all free, no emails, no BS. We're Engineers...</p>
            </div>
          </div>
        </div>
      </section>
      <section class="home-data">
        <div class="container">
          <div class="home-data-inner">
            <h3>
              Interested in our Career Ladder and the journey we had behind it?
            </h3>
            <p>
              We built the Engineering Dojo based on our Career Ladder while
              taking out things that are too specific. If you’re trying to build
              your own, don’t start with a blank page. You can have both and see
              what you like to use
            </p>
            <div class="doc-btns">
              ${GoogleDocsSpreadsheetLink({
                href:
                  'https://docs.google.com/spreadsheets/d/1CPIFwR_iSCQeq8aEebZ0XsBK9IKhah-l_HeDZuavik4/edit?usp=sharing',
                label: 'Forter Career Ladder for Software Engineers',
                icon: 'excel'
              })}
              ${GoogleDocsSpreadsheetLink({
                href:
                  'https://docs.google.com/document/d/1bjPSAOGIsdSiLV5lm_H3HgvUd5nHNsTI5RkT_Zmdydo/edit?usp=sharing',
                label: 'Forter Engineering Career Journey',
                icon: 'doc'
              })}
            </div>
          </div>
        </div>
      </section>
      <section class="featuring">
        <div class="container">
          <div class="featuring-inner">
            <p>From the creators of other fun things...</p>
            <div class="featuring-data hi-icon-wrap hi-icon-effect-8">
              ${Feature({ name: 'forkerlabs' })}
              ${Feature({ name: 'softwarearchitectureaddict' })}
              ${Feature({ name: 'chuckwho' })}
            </div>
          </div>
        </div>
      </section>`;
  }
}

customElements.define('page-home', PageHome);
