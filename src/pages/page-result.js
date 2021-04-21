import { html, css } from '../components/base';
import { Logo } from '../components';
import config from '../config';
import appData from '../app.data';

import { PageElement } from '../helpers/page-element';
import { urlForName } from '../router';


export class PageResult extends PageElement {
  render() {
    const { role } = this.location.params;
    const { topicsToIcon, topicsToLink, topics, roleToTitle } = config;
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
            ${topics.map(
              topic => html`
                <div class="result-box">
                  <div class="left-box">
                    <div class="box-title">
                      <i class="${topicsToIcon[topic]}"></i>${topic}
                    </div>
                    <div class="box-tags">
                      <ul>
                        ${Ladder[topic].Topics.map(
                          section => html` <li>${section}</li> `
                        )}
                      </ul>
                    </div>
                  </div>
                  <div class="right-box">
                    <a
                      class="text-white"
                      href="${urlForName('improve', {
                        role,
                        topic: topicsToLink[topic]
                      })}"
                    >
                      <fc-button size="small" class="work"
                        >Show me How</fc-button
                      >
                    </a>
                  </div>
                </div>
              `
            )}
        </div>
      </section>
    `;
  }
}

customElements.define('page-result', PageResult);
