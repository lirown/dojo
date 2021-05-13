import { html } from '../components/base';
import { PageElement, StatusCheckbox } from '../components';
import { db } from '../services/db';
import { urlForName } from '../router';

import {
  DEFAULT_TOPIC,
  getTopics,
  sectionMetadata,
  sections
} from '../services/topic';

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
  async updated() {
    this.state = await db.query({
      groupBy: 'section',
      filter: (notepad) => notepad.topic === this.topic
    });
    this.topicsCount = await db.aggregate({ groupBy: 'topic' });
    this.topic = this.location.params.topic;
  }

  constructor(props) {
    super(props);
    this.topic = location.pathname.split('/')[2] || DEFAULT_TOPIC;
  }

  changeTab(e) {
    console.log(e);
    const { key } = e.detail;
    this.topic = key;
    history.pushState(null, '', `/notepad/${key}`);
  }

  /** @inheritdoc */
  render() {
    const { state, topicsCount } = this;
    if (!state || !topicsCount) {
      return html`Loading...`;
    }

    const callback = this.firstUpdated.bind(this);

    return html`
      <section class="hero">
        <div class="container">
          <div class="hero-inner">
            <h1>My Growth Notepad</h1>
            <div class="goal-items">
                <elastic-tabs @change="${(e) =>
                  this.changeTab(e)}" .tabs="${getTopics().map((item) => {
      return { ...item, count: this.topicsCount[item.key] || 0 };
    })}" activeElementName="${
      getTopics().find((item) => item.key === this.topic).name
    }"></elastic-tabs>
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
                                        class="green done-text"
                                        style=""
                                        ?hidden=${status !== 'done'}
                                      >
                                        done on the
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
