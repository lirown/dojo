import { html } from '../components/base';
import { PageElement } from '../components';
import {
  getQuizResult,
  QUIZ_QUESTIONS as quizQuestions
} from '../services/quiz';
import { goto } from '../router';
import { create } from '../services/db';

/**
 * Page Quiz - a quick 5 questions check to evaluate your engineering level.
 *
 * @element page-quiz
 */
export class PageQuiz extends PageElement {
  /** @inheritdoc */
  static get properties() {
    return {
      /**
       * currect question presented.
       * @type {Number}
       */
      selected: { type: Number, default: 0 }
    };
  }

  /** @inheritdoc */
  render() {
    /**
     * assign answers or empty array
     */
    this.answers = this.answers || [];

    /**
     * assign selected answer or first one
     */
    this.selected = this.selected || 0;

    return html`
      <section class="hero">
        <div class="container">
          <div class="hero-inner">
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
                      @change=${async (e) => await this.answerChosen(e, index)}
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
  async answerChosen({ target }, index) {
    // adding small interval to see animation
    this.answers.push(target.value);

    setTimeout(async () => {
      if (this.selected === 4) {
        return await this.goToResult();
      }

      this.selected = index + 1;
      this.requestUpdate();
    }, 500);
  }

  /**
   * go to result by the engineering level result after quiz
   */
  async goToResult() {
    const { answers } = this;
    const params = { role: getQuizResult({ answers }) };
    await create('user', params);
    goto('result', params);
  }
}

customElements.define('page-quiz', PageQuiz);
