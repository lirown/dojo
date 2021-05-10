import { html } from '../components/base';
import { PageElement } from '../helpers/page-element';
import { getQuizResult, quizQuestions } from '../stores/quiz';
import { urlForName } from '../router';

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
    this.answers = this.answers || [];
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
                      @change=${(e) => this.answerChosen(e, index)}
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
    this.answers.push(target.value);

    setTimeout(() => {
      if (this.selected === 4) {
        return this.goToResult();
      }

      this.selected = index + 1;
      this.requestUpdate();
    }, 500);
  }

  /**
   * go to result by the engineering level result after quiz
   */
  goToResult() {
    const { answers } = this;
    const params = { role: getQuizResult({ answers }) };
    location.href = urlForName('result', params);
  }
}

customElements.define('page-quiz', PageQuiz);