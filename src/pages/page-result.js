import { html, css } from '../components/base';
import { Logo } from '../components';
import config from '../config';
import appData from '../app.data';

import { PageElement } from '../helpers/page-element';
import { urlForName } from '../router';

export class PageResult extends PageElement {
  render() {
    const { role } = this.location.params;
    const { Ladder } = appData;
    return html`
      <section class="hero hero-result">
        <div class="container">
          <div class="hero-inner">
            <p>
              We don’t know what your real title is (that would be creepy!) but
              the level of impact you’ve mentioned fits here:
            </p>

            <h1>${config.roleToTitle[role]}</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="result-inner">
            <h3>
              Interested in our Career Ladder and the journey we had behind it?
            </h3>
            <p>
              We built the Engineering Dojo based on our Career Ladder while
              taking out things that are too specific. If you’re trying to build
              your own, don’t start with a blank page. You can have both and see
              what you like to use.
            </p>
          </div>
          <div class="result-data">
            <div class="result-box">
              <div class="left-box">
                <div class="box-title">
                  <i class="craft"></i>Engineering Craftsmanship
                </div>
                <div class="box-tags">
                  <ul>
                    ${Ladder['Engineering Craftsmanship'].Topics.map(section => html`
                      <li>${section}</li>
                    `)}
                  </ul>
                </div>
              </div>
              <div class="right-box">
                <a
                  class="text-white"
                  href="${urlForName('improve', {
                    role,
                    topic: 'engineering-craftsmanship'
                  })}"
                >
                  <fc-button size="small">Show me How</fc-button>
                </a>
              </div>
            </div>

            <div class="result-box">
              <div class="left-box">
                <div class="box-title">
                  <i class="leader"></i>Project Leadership
                </div>
                <div class="box-tags">
                  <ul>
                    ${Ladder['Project Leadership'].Topics.map(section => html`
                      <li>${section}</li>
                    `)}
                  </ul>
                </div>
              </div>
              <div class="right-box">
                <a
                  class="text-white"
                  href="${urlForName('improve', {
                    role,
                    topic: 'project-leadership'
                  })}"
                >
                  <fc-button size="small">Show me How</fc-button>
                </a>
              </div>
            </div>

            <div class="result-box">
              <div class="left-box">
                <div class="box-title">
                  <i class="business"></i>Business Involvement
                </div>
                <div class="box-tags">
                  <ul>
                    ${Ladder['Business Involvement'].Topics.map(section => html`
                      <li>${section}</li>
                    `)}
                  </ul>
                </div>
              </div>
              <div class="right-box">
                <a
                  class="text-white"
                  href="${urlForName('improve', {
                    role,
                    topic: 'business-involvement'
                  })}"
                >
                  <fc-button size="small">Show me How</fc-button>
                </a>
              </div>
            </div>

            <div class="result-box">
              <div class="left-box">
                <div class="box-title">
                  <i class="impact"></i>Organizational Impact
                </div>
                <div class="box-tags">
                  <ul>
                    ${Ladder['Organizational Impact'].Topics.map(section => html`
                      <li>${section}</li>
                    `)}
                  </ul>
                </div>
              </div>
              <div class="right-box">
                <a
                  class="text-white"
                  href="${urlForName('improve', {
                    role,
                    topic: 'organizational-impact',
                  })}"
                >
                  <fc-button size="small">Show me How</fc-button>
                </a>
               </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('page-result', PageResult);
