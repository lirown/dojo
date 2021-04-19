import { html, css } from '../components/base';
import { Logo } from '../components';
import { quizQuestions, ROLES } from '../components/quiz';

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
          ${quizQuestions.sort(() => Math.random() - 0.5).map(
            ({ question, answers }, index) => html`
              <div class="quiz-inner">
                <div class="quiz-data">
                  <div class="quiz-q" place="${index+1}_">${question}</div>
                  <div class="quiz-a">
                    <fc-radio-group name="q-radio">
                      ${answers.map(({ content, type }) => html`
                        <fc-radio value="${type}">${content}</fc-radio>
                      `)}
                    </fc-radio-group>
                  </div>
                </div>
              </div>
            `
          )}
        </div>
      </section>
    `;
  }
}

customElements.define('page-quiz', PageQuiz);
