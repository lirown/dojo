import { html, css } from '../components/base';
import { Logo } from '../components';

import { PageElement } from '../helpers/page-element';

export class PageQuiz extends PageElement {
  render() {
    return html`
      <section class="hero">
        <div class="container">
          <div class="hero-inner">
            <!--<img class="logo" src="images/logo.svg"></img>-->
            <p>To be helpful, we need to get to know you just a little.</p>

            <h1>Answer these 5 quick questions without overthinking it.</h1>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="quiz-inner">
            <div class="quiz-data">
              <div class="quiz-q">
                When it’s unclear why you need to build a certain capability,
                what is your preference?
              </div>
              <div class="quiz-a">
                <fc-radio-group name="q-radio">
                  <fc-radio
                    value="As long as I understand the task, it’s fine for me"
                    >As long as I understand the task, it’s fine for me
                  </fc-radio>
                  <fc-radio checked value="Ask my manager"
                    >Ask my manager, this is their job
                  </fc-radio>
                  <fc-radio disabled value="Ask my manager, this is their job"
                    >Ask my manager, this is their job
                  </fc-radio>
                </fc-radio-group>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('page-quiz', PageQuiz);
