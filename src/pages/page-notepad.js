import { html, css } from '../components/base';
import * as notepad from '../helpers/notepad';
import {
  DEFAULT_TOPIC,
  getTopics,
  sectionMetadata,
  sections
} from '../helpers/topic';
import { Logo } from '../components';
import { db } from '../app.db';
import { urlForName } from '../router';

import { PageElement } from '../helpers/page-element';

export class PageNotepad extends PageElement {
  static get properties() {
    return {
      state: { type: Object },
      topics: { type: Object },
      topic: { type: String }
    };
  }

  async firstUpdated() {
    const { topic = DEFAULT_TOPIC } = this.location.params;

    this.state = await db.query({
      groupBy: 'section',
      filter: (notepad) => notepad.topic === topic
    });
    this.topics = await db.query({ groupBy: 'topic' });
  }

  render() {
    if (!this.state || !this.topics) {
      return html`Loading...`;
    }

    const { topic = DEFAULT_TOPIC } = this.location.params;

    const topicsCount = [
      (this.topics['engineering-craftsmanship'] || []).length,
      (this.topics['project-leadership'] || []).length,
      (this.topics['business-involvement'] || []).length,
      (this.topics['organizational-impact'] || []).length
    ];

    return html`
      <section class="hero">
        <div class="container">
          <div class="hero-inner">
            <h1>My Growth Notepad</h1>
            <div class="goal-items">
              <ul>
                ${getTopics().map(
                  ({ key, name }, index) => html`
                    <li class="${topic === key ? 'active' : ''}">
                      <a
                        href="${urlForName('notepad', {
                          topic: key
                        })}"
                        >${name} <span>${topicsCount[index]}</span></a
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
                      ${!this.state[section]
                        ? html` <div>Nothing here yet.</div> `
                        : this.state[section]
                            .sort((a, b) => a.key.localeCompare(b.key))
                            .map(
                              (item) => html`
                                <div>
                                  <div>
                                    <fc-checkbox
                                      @click="${() =>
                                        notepad.changeStatus(
                                          {
                                            [item.key]: {
                                              ...item,
                                              status: this.checked
                                                ? 'added'
                                                : 'work'
                                            }
                                          },
                                          item.key,
                                          item.section,
                                          item.topic,
                                          () => this.firstUpdated()
                                        )}"
                                      ?checked=${item.status === 'done'}
                                    ></fc-checkbox>
                                    <span
                                      >${item.key}
                                      <span
                                        class="green"
                                        ?hidden=${item.status !== 'done'}
                                      >
                                        Done on the
                                        ${new Date(item.updatedAt)
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
