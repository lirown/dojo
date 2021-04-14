import { html, css } from '../components/base';
import { Logo } from '../components';

import { PageElement } from '../helpers/page-element';

export class PageImprove extends PageElement {
  render() {
    return html`
      <section class="hero">
        <div class="container">
          <div class="hero-inner">
            <!--<img class="logo" src="images/logo.svg"></img>-->
            <p>
              We don’t know what your real title is (that would be creepy!) but
              the level of impact you’ve mentioned fits here:
            </p>

            <h1>Entry-level Engineer / Junior Engineer</h1>
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
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
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
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
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
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
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
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                  <div>
                    <fc-checkbox></fc-checkbox
                    ><span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('page-improve', PageImprove);
