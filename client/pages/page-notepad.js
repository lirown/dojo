import { html } from '../components/base';
import { PageElement } from '../helpers/page-element';
import { StatusCheckbox } from '../components';
import { db } from '../stores/db';
import { urlForName } from '../router';

import {
  DEFAULT_TOPIC,
  getTopics,
  sectionMetadata,
  sections
} from '../stores/topic';

/**
 * Notepad Page - An Engineer personal followup on actionable items he want to work on.
 *
 * @element page-notpad
 */
export class PageNotepad extends PageElement {
  /** @inheritdoc */
  static get properties() {
    return {
      /**
       * contains the actionable items we should do to improve grouped by sections.
       * @type {Object<Object>}
       */
      state: { type: Object },

      /**
       * contains the actionable items we should do to improve grouped by topic.
       * @type {Object<Object>}
       */
      topicsCount: { type: Object },

      /**
       * currect topic extracted from URLParams.
       * @type {String}
       */
      topic: { type: String }
    };
  }

  /** @inheritdoc */
  async firstUpdated() {
    const { topic = DEFAULT_TOPIC } = this.location.params;
    this.state = await db.query({
      groupBy: 'section',
      filter: (notepad) => notepad.topic === topic
    });
    this.topicsCount = await db.aggregate({ groupBy: 'topic' });
  }

  /** @inheritdoc */
  render() {
    const { state, topicsCount } = this;
    if (!state || !topicsCount) {
      return html`Loading...`;
    }

    const { topic = DEFAULT_TOPIC } = this.location.params;
    const callback = this.firstUpdated.bind(this);

    return html`
      <section class="hero">
        <div class="container">
          <div class="hero-inner">
            <h1>My Growth Notepad</h1>
            <div class="goal-items">
                <elastic-tabs .tabs="${getTopics().map((item) => {
                  return { ...item, count: 2 };
                })}" activeElementName="${getTopics()[0].name}"></elastic-tabs>
              <ul>
                ${getTopics().map(
                  ({ key, name }, index) => html`
                    <li class="${topic === key ? 'active' : ''}">
                      <a
                        href="${urlForName('notepad', {
                          topic: key
                        })}"
                        >${name} <span>${this.topicsCount[key] || 0}</span></a
                      >
                    </li>
                  `
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="result-inner">
            <p>
              Note: By default, things you’ve added or marked as done will be
              stored on your browser. If you want to persist them so you can
              change devices or browsers, we do recommend you to Sign up / sign
              in
            </p>
          </div>
          <div class="result-data">
            ${sections.map(
              (section) => html`
                <div class="result-box">
                  <div class="left-box">
                    <div class="box-title">${section}</div>
                    <div class="box-subtitle">
                      ${sectionMetadata[section].description}
                    </div>
                    <div class="box-questions">
                      ${!state[section]
                        ? html` <div>Nothing here yet.</div> `
                        : state[section]
                            .sort((a, b) => a.key.localeCompare(b.key))
                            .map(
                              ({
                                key,
                                section,
                                topic,
                                status,
                                updatedAt
                              }) => html`
                                <div>
                                  <div>
                                    ${StatusCheckbox({
                                      key,
                                      section,
                                      topic,
                                      status,
                                      callback
                                    })}
                                    <span
                                      >${key}
                                      <span
                                        class="green"
                                        ?hidden=${status !== 'done'}
                                      >
                                        Done on the
                                        ${new Date(updatedAt)
                                          .toString()
                                          .split('(')[0]}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              `
                            )}
                    </div>
                  </div>
                </div>
              `
            )}
           </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('page-notepad', PageNotepad);
