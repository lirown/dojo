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
  constructor(props) {
    super(props);
    this.getTopic = this.getTopic.bind(this);
    this.topicsCount = {};
    this.sectionStatus = {};
  }

  /** @inheritdoc */
  async firstUpdated() {
    await this.fetch();
  }

  /**
   * query topics actionable items and counts by topic
   */
  async fetch(key) {
    const topic = this.getTopic();
    this.state = await db.store('notepad').query({
      groupBy: 'section',
      filter: (notepad) =>
        notepad.topic === (typeof key === 'string' ? key : topic)
    });
    this.topicsCount = await db
      .store('notepad')
      .aggregate({ groupBy: 'topic' });
  }

  /**
   * toggle between different topics;
   */
  changeTab({ detail: { key } }) {
    history.pushState(null, '', `/notepad/${key}`);
    this.fetch(key);
  }

  /**
   * @returns {string} topic by url params or default
   */
  getTopic() {
    const last = location.href.split('/').reverse()[0];
    const topic =
      !last || last.includes('software') ? this.location.params.topic : last;
    if (topic.includes('software')) {
      return DEFAULT_TOPIC;
    }
    return topic;
  }

  /**
   * @returns {HTMLElement} modal
   */
  get modal() {
    return document.querySelector('#auth-modal').modal;
  }

  toggleStatus(section) {
    if (
      !this.sectionStatus[section] ||
      this.sectionStatus[section] === 'added'
    ) {
      this.sectionStatus[section] = 'done';
    } else {
      this.sectionStatus[section] = 'added';
    }
    this.requestUpdate();
  }

  /** @inheritdoc */
  render() {
    const topic = this.getTopic();

    if (!topicRoutes.includes(topic)) {
      redirectNotFound();
    }

    const { state, topicsCount } = this;
    const callback = this.fetch.bind(this);
    const tabs = getTopics().map((item) => {
      return { ...item, count: this.topicsCount[item.key] || 0 };
    });
    const activeElement = getTopics().find((item) => item.key === topic).name;
    const sectionStatusFilter = (section) => ({ status }) =>
      (this.sectionStatus[section] || 'added') === status;

    return html`
      <section class="hero">
        <div class="container">
          <div class="hero-inner">
            <h1>My Growth Notepad</h1>
            <div class="goal-items">
                <elastic-tabs @change="${(e) =>
                  this.changeTab(
                    e
                  )}" .tabs="${tabs}" activeElementName="${activeElement}">
                </elastic-tabs>
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
                this.modal.open()}">Sign up / sign in</span>.
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
                          <div class="box-title">
                            ${section}
                            <a
                              class="link"
                              @click=${() => this.toggleStatus(section)}
                            >
                              ${this.sectionStatus[section] === 'added'
                                ? 'View Open Items'
                                : 'View History'}
                            </a>
                          </div>
                          <div class="box-subtitle">
                            ${sectionMetadata[section].description}
                          </div>
                          <div class="box-questions">
                            ${(state[section] || []).filter(
                              sectionStatusFilter(section)
                            ).length === 0
                              ? html` <div>Nothing here yet.</div> `
                              : state[section]
                                  .sort((a, b) => a.key.localeCompare(b.key))
                                  .filter(sectionStatusFilter(section))
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
                                              done on the
                                              ${new Date(
                                                updatedAt
                                              ).toLocaleString('en-us', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                                hour: 'numeric',
                                                minute: 'numeric'
                                              })}
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
}

customElements.define('page-notepad', PageNotepad);
