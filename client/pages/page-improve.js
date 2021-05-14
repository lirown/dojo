import { html } from '../components/base';
import { PageElement, StatusCheckbox, StatusButton } from '../components';

import { db } from '../services/db';
import {
  startCase,
  sections,
  getActionableItems,
  sectionMetadata
} from '../services/topic';
import { roleMetadata } from '../services/role';

/**
 * Improve Page - to show engineer how he can emprove his profession.
 *
 * @element page-improve
 */
export class PageImprove extends PageElement {
  /** @inheritdoc */
  static get properties() {
    return {
      /**
       * contains the actionable items we should do to improve by role and topic.
       * @type {Object<Object>}
       */
      state: { type: Object }
    };
  }

  /** @inheritdoc */
  async firstUpdated() {
    /**
     * fetching actionable items to improve
     */
    this.state = await db.query({ groupBy: 'key', flat: true });
  }

  /** @inheritdoc */
  render() {
    const { topic, role } = this.location.params;
    const callback = this.firstUpdated.bind(this);
    const actionableItems = getActionableItems({ topic, role });
    const { state } = this;

    return html`
      <section class="hero hero-improve">
        <div class="container">
          <div class="hero-inner">
            <h1> Improving at ${startCase(topic)}
            <p>
              Level: ${roleMetadata[role].title}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="result-inner">
            <h3>What do you do well? What do you want to work on?</h3>
            <p>
              Navigate between the different topics and mark things you believe
              you’re doing well today, or add to your growth notepad ideas and
              suggestions you’d like to work on later. Got it, thanks.
            </p>
          </div>
          <div class="result-data">
            ${
              this.state
                ? sections.map(
                    (section) => html`
                      <div class="result-box">
                        <div class="left-box">
                          <div class="box-title">${section}</div>
                          <div class="box-subtitle">
                            ${sectionMetadata[section].description}
                          </div>
                          <div class="box-questions">
                            ${actionableItems[section].map((data) => {
                              const key =
                                data.name || data['anti-pattern'] || data;
                              const status =
                                (this.state[key] || {}).status || 'work';
                              return data.link && data.name
                                ? html`
                                    <div>
                                      <div>
                                        ${StatusCheckbox({
                                          status,
                                          key,
                                          section,
                                          topic,
                                          callback
                                        })}
                                        <a
                                          class="link"
                                          href="${data.link}"
                                          target="_blank"
                                          >${data.name}</a
                                        >
                                      </div>
                                      ${StatusButton({
                                        status,
                                        key,
                                        topic,
                                        section,
                                        label: 'Explore Later',
                                        callback
                                      })}
                                    </div>
                                  `
                                : html`
                                    <div>
                                      <div>
                                        ${StatusCheckbox({
                                          status,
                                          key,
                                          section,
                                          topic,
                                          callback
                                        })}
                                        <span class="improve-label"
                                          >${key}</span
                                        >
                                      </div>
                                      ${StatusButton({
                                        status,
                                        key,
                                        topic,
                                        section,
                                        label: 'Work on it',
                                        callback
                                      })}
                                    </div>
                                  `;
                            })}
                          </div>
                        </div>
                      </div>
                    `
                  )
                : html`Loading...`
            }
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('page-improve', PageImprove);
