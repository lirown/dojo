import { html, css } from '../components/base';
import { Logo } from '../components';
import { quizQuestions, ROLES } from '../components/quiz';
import { urlForName } from '../router';

import { PageElement } from '../helpers/page-element';

export class PageQuiz extends PageElement {
  static get properties() {
    return {
      selected: { type: Number, default: 0 }
    };
  }

  render() {
    this.answers = this.answers || [];
    this.selected = this.selected || 0;

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
          ${quizQuestions.map(
            ({ question, answers }, index) => html`
              <div class="quiz-inner" ?hidden=${this.selected != index}>
                <div class="quiz-data">
                  <div class="quiz-q" place="${index + 1}_">${question}</div>
                  <div class="quiz-a">
                    <fc-radio-group
                      name="q-radio"
                      @change=${e => this.answerChosen(e, index)}
                    >
                      ${answers
                        //.sort(this.reshuffle)
                        .map(
                          ({ content, type }) => html`
                            <fc-radio value="${type}">${content}</fc-radio>
                          `
                        )}
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

  /**
   * @returns {Number} generating random number for sorting answers
   */
  reshuffle() {
    return Math.random() - 0.5;
  }

  /**
   * Switching between answers until last answer will trigger going to result page
   * @param {Object} target element value
   * @param {Nunber} number of question
   */
  answerChosen({ target }, index) {
    // adding small interval to see animation
    //
    this.answers.push(target.value);
    console.log(target.value, index, this.answers);

    setTimeout(() => {
      if (this.selected === 4) {
        return this.goToResult();
      }

      this.selected = index + 1;
      this.requestUpdate();
    }, 500);
  }

  goToResult() {
    const { answers } = this;
    const roles = Array.from(new Set(answers)).filter(x => x !== undefined);
    const params = { role: 'software-engineer' };
    console.log(answers, roles);
    if (roles.length === 1 && roles.includes(ROLES.ENTRY)) {
      params.role = 'entry-software-engineer';
    } else if (
      !roles.includes(ROLES.ENTRY) &&
      !roles.includes(ROLES.NORMAL) &&
      !roles.includes(ROLES.SENIOR) &&
      !roles.includes(ROLES.STAFF)
    ) {
      params.role = 'principal-software-engineer';
    } else if (
      !roles.includes(ROLES.ENTRY) &&
      !roles.includes(ROLES.NORMAL) &&
      (roles.includes(ROLES.PRINCIPAL) || roles.includes(ROLES.STAFF))
    ) {
      params.role = 'staff-software-engineer';
    } else if (!roles.includes(ROLES.ENTRY) && !roles.includes(ROLES.NORMAL)) {
      params.role = 'senior-software-engineer';
    }
    location.href = urlForName('result', params);
  }
}
customElements.define('page-quiz', PageQuiz);
