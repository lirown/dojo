import { html, css, until } from '../components/base';
import { Logo } from '../components';
import { db } from '../app.db';
import {
  sections,
  getActionableItems,
  sectionMetadata
} from '../helpers/topic';
import { roleMetadata } from '../helpers/role';
import { PageElement } from '../helpers/page-element';
import * as notepad from '../helpers/notepad';

export class PageImprove extends PageElement {
  static get properties() {
    return {
      state: { type: Object }
    };
  }

  async firstUpdated() {
    this.state = await db.query({ groupBy: 'key' });
  }

  render() {
    const { topic, role } = this.location.params;
    const actionableItems = getActionableItems({ topic, role });
    const { state } = this;
    return html`
      <section class="hero hero-improve">
        <div class="container">
          <div class="hero-inner">
            <h1> Improving at ${this.startCase(topic)}
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
            ${sections.map(
              (section) => html`
                <div class="result-box">
                  <div class="left-box">
                    <div class="box-title">${section}</div>
                    <div class="box-subtitle">
                      ${sectionMetadata[section].description}
                    </div>
                    <div class="box-questions">
                      ${actionableItems[section].map((data) => {
                        const status = notepad.getStatus(state, data);
                        console.log(data, status);
                        const key = data.name || data['anti-pattern'] || data;
                        return data.link && data.name
                          ? html`
                              <div>
                                <div>
                                  <fc-tooltip tooltip="done?" position="top">
                                  <fc-checkbox
                                    ?checked=${status === 'done'}
                                    @click=${() =>
                                      notepad.changeStatus(
                                        { ...state, status: 'done' },
                                        key,
                                        section,
                                        topic,
                                        () => this.firstUpdated()
                                      )}
                                  ></fc-checkbox
                                ></fc-tooltip><a class="link" href="${
                                  data.link
                                }" target="_blank"
                                  >${data.name}</a
                                >
                                </div>
                                <fc-button style="--fc-button-text-transform:uppercase;--fc-button-color:white;"
                                  @click=${() =>
                                    notepad.changeStatus(
                                      state,
                                      key,
                                      section,
                                      topic,
                                      () => this.firstUpdated()
                                    )}
                                  class="${status}"
                                  size="medium"
                                  >${notepad.getStatus(
                                    state,
                                    key,
                                    'Explore Later'
                                  )}</fc-button

                              </div>
                            `
                          : html`
                              <div>
                                <div>
                                  <fc-checkbox
                                    @click=${() =>
                                      notepad.changeStatus(
                                        { ...state, status: 'added' },
                                        key,
                                        section,
                                        topic,
                                        () => this.firstUpdated()
                                      )}
                                    ?checked=${status === 'done'}
                                  ></fc-checkbox>
                                  <span class="improve-label">${key}</span>
                                </div>
                                <fc-button
                                  style="--fc-button-text-transform:uppercase;--fc-button-color:white;"
                                  @click=${() =>
                                    notepad.changeStatus(
                                      state,
                                      key,
                                      section,
                                      topic,
                                      () => this.firstUpdated()
                                    )}
                                  class="${status}"
                                  size="medium"
                                  >${notepad.getStatus(
                                    state,
                                    key,
                                    'Work on it'
                                  )}</fc-button
                                >
                              </div>
                            `;
                      })}
                    </div>
                  </div>
                </div>
              `
            )}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('page-improve', PageImprove);
