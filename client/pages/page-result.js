import { html } from '../components/base';
import { PageElement } from '../components';
import { redirect, urlForName } from '../services/router';
import { topicMetadata, topics, getCategoriesByTopic } from '../services/topic';
import { roleMetadata, roleRoutes } from '../services/role';
import { db } from '../services/db';

/**
 * Page Result - A page that shows the result of the quiz with the estimated level of engineering.
 *
 * @element page-result
 */
export class PageResult extends PageElement {
  /** @inheritdoc */
  render() {
    const { role } = this.location.params;
    if (!roleRoutes.includes(role)) {
      return redirect('404');
    }

    db.store('user').create('user', { role });

    return html`
      <section class="hero hero-result level-${
        roleMetadata[role].level.split(' ')[1]
      }">
        <div class="container">
          <div class="hero-inner">
            <p>
              We don’t know what your real title is (that would be creepy!) but
              the level of impact you’ve mentioned fits here:
            </p>

            <h1>${roleMetadata[role].title}</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="result-inner">
            <h3>
                Which area would you like to improve at in the next 6 months?
            </h3>

              <p>
                  We’ve put 4 areas that should serve as a nice distinction between different skills and experience to work on.</p>
              <p>Go ahead, click on one of them. You can always explore other areas later.</p>
          </div>
          <div class="result-data">
            ${topics.map(
              (topic) => html`
                <div class="result-box">
                  <div class="left-box">
                    <div class="box-title">
                      <i class="${topicMetadata[topic].icon}"></i>${topic}
                    </div>
                    <div class="box-tags">
                      <ul>
                        ${getCategoriesByTopic(topic).map(
                          (section) => html` <li>${section}</li> `
                        )}
                      </ul>
                    </div>
                  </div>
                  <div class="right-box">
                    <a
                      class="text-white"
                      href="${urlForName('improve', {
                        role,
                        topic: topicMetadata[topic].link
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
