import { html, css } from '../components/base';
import { Logo } from '../components';
import config from '../config';
import appData from '../app.data';
import { PageElement } from '../helpers/page-element';

export class PageImprove extends PageElement {
  render() {
    const { topic, role } = this.location.params;
    const content = this.getContent();

    return html`
      <section class="hero hero-improve">
        <div class="container">
          <div class="hero-inner">
            <h1> Improving at ${this.startCase(topic)}
            <p>
              Level: ${config.roleToTitle[role]}
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
            <div class="result-box">
              <div class="left-box">
                <div class="box-title">Responsibilities</div>
                <div class="box-subtitle">
                  Things you're expected to do/know at this level
                </div>
                <div class="box-questions">
                  ${content.Responsibilities.map(
                    text => html`
                      <div><fc-checkbox></fc-checkbox><span>${text}</span></div>
                    `
                  )}
                </div>
              </div>
            </div>

            <div class="result-box">
              <div class="left-box">
                <div class="box-title">Examples</div>
                <div class="box-subtitle">
                  Things you're expected to do/know at this level
                </div>
                <div class="box-questions">
                  ${content.Examples.map(
                    text => html`
                      <div><fc-checkbox></fc-checkbox><span>${text}</span></div>
                    `
                  )}
                </div>
              </div>
            </div>
            <div class="result-box">
              <div class="left-box">
                <div class="box-title">Anti Pattern</div>
                <div class="box-subtitle">
                  Things you're expected to do/know at this level
                </div>
                <div class="box-questions">
                  ${content['Anti-Patterns'].map(
                    text => html`
                      <div>
                        <fc-checkbox></fc-checkbox
                        ><span>${text['anti-pattern']}</span>
                      </div>
                    `
                  )}
                </div>
              </div>
            </div>
            <div class="result-box">
              <div class="left-box">
                <div class="box-title">Resources</div>
                <div class="box-subtitle">
                  Things you're expected to do/know at this level
                </div>
                <div class="box-questions">
                  ${content['Resources'].map(
                    ({ link, name }) => html`
                      <div>
                        <fc-checkbox></fc-checkbox
                        ><a href="${link}" target="_blank">${name}</a>
                      </div>
                    `
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  getContent() {
    const { topic, role } = this.location.params;
    const [content] = Object.values(
      appData.Ladder[this.startCase(topic)].Ladder.filter(
        level => config.roleToLevel[role] === Object.keys(level)[0]
      )[0]
    );
    return content;
  }
}

customElements.define('page-improve', PageImprove);
