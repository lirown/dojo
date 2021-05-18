import { html } from '../components/base';
import { PageElement, StatusCheckbox, StatusDeleteButton } from '../components';
import { db } from '../services/db';
import { redirectNotFound } from '../router';
import { urlForName } from '../router';

import {
  DEFAULT_TOPIC,
  getTopics,
  sectionMetadata,
  topicRoutes,
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
      topicsCount: { type: Object, default: {} }
    };
  }

  /** @inheritdoc */
  async firstUpdated() {
    await this.fetch();
  }

  async fetch(key) {
    const topic = this.getTopic();
    this.state = await db.query({
      groupBy: 'section',
      filter: (notepad) =>
        notepad.topic === (typeof key === 'string' ? key : topic)
    });
    this.topicsCount = await db.aggregate({ groupBy: 'topic' });
  }

  constructor(props) {
    super(props);
    this.getTopic = this.getTopic.bind(this);
    this.topicsCount = {};
  }

  changeTab(e) {
    const { key } = e.detail;
    history.pushState(null, '', `/notepad/${key}`);
    this.fetch(key);
  }

  getTopic() {
    const last = location.href.split('/').reverse()[0];
    const topic =
      !last || last.includes('software') ? this.location.params.topic : last;
    if (topic.includes('software')) {
      return DEFAULT_TOPIC;
    }
    return topic;
  }

  openModal() {
    document.querySelector('#auth-modal').openModal();
  }

  /** @inheritdoc */
  render() {
    const topic = this.getTopic();

    if (!topicRoutes.includes(topic)) {
      redirectNotFound();
    }

    const { state, topicsCount } = this;
    const callback = this.fetch.bind(this);

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
      getTopics().find((item) => item.key === topic).name
    }"></elastic-tabs>
            </div>
          </div>
        </div>
      </section>
        <section style="min-height: 1000px">
        <div class="container">
          <div class="result-inner">
            <p>
              <b>Note:</b> By default, things you’ve added or marked as done will be
              stored on your browser. If you want to persist them so you can
              change devices or browsers, we do recommend you to <span id="auth-text" @click="${() =>
                this.openModal()}">Sign up / sign in</span>.
            </p>
            <fc-auth-modal id="auth-modal"></fc-auth-modal>
          </div>
          <div class="result-data">
            ${
              !state
                ? 'loading...'
                : sections.map(
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
                                      link,
                                      updatedAt
                                    }) => html`
                                      <div>
                                        <div class="${status}">
                                          ${StatusCheckbox({
                                            key,
                                            section,
                                            topic,
                                            status,
                                            link,
                                            callback
                                          })}
                                          <span>
                                            <span class="checkbox-text">
                                              ${link
                                                ? html`
                                                    <a
                                                      class="link"
                                                      href="${link}"
                                                      target="_blank"
                                                      >${key}</a
                                                    >
                                                  `
                                                : html` ${key} `}
                                            </span>

                                            <span
                                              class="green done-text"
                                              style=""
                                              ?hidden=${status !== 'done'}
                                            >
                                              done
                                              <span class="date"
                                                >${this.convertDate(
                                                  new Date(updatedAt)
                                                )}</span
                                              >
                                            </span>
                                            ${StatusDeleteButton({
                                              key,
                                              callback
                                            })}
                                          </span>
                                        </div>
                                      </div>
                                    `
                                  )}
                          </div>
                        </div>
                      </div>
                    `
                  )
            }
           </div>
          </div>
        </div>
      </section>
    `;
  }

  convertDate(
    t,
    a = [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }],
    s = ' '
  ) {
    function format(m) {
      let f = new Intl.DateTimeFormat('en', m);
      return f.format(t);
    }
    return a.map(format).join(s);
  }
}

customElements.define('page-notepad', PageNotepad);
