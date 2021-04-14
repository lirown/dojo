import { html, css } from '../components/base';
import { Logo } from '../components';

import { PageElement } from '../helpers/page-element';

export class PageNotepad extends PageElement {
  render() {
    return html`
      <section class="hero">
        <div class="container">
          <div class="hero-inner">
            <!--<img class="logo" src="images/logo.svg"></img>-->

            <h1>My Growth Notepad</h1>
            <div class="goal-items">
              <ul>
                <li class="active">Engineering Craftsmanship<span>1</span></li>
                <li>Project Leadership<span>3</span></li>
                <li>Business Involvement<span>0</span></li>
                <li>Organizational Impact<span>0</span></li>
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
            <div class="result-box">
              <div class="left-box">
                <div class="box-title">Responsibilities</div>
                <div class="box-subtitle">
                  Things you're expected to do/know at this level
                </div>
                <div class="box-questions">
                  <div>
                    <fc-checkbox></fc-checkbox>
                    <span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                </div>
              </div>
              <div class="right-box">
                <fc-button class="added" size="medium">Added</fc-button>
                <fc-button class="work" size="medium">Work on it</fc-button>
                <fc-button class="done" size="medium">Done!</fc-button>
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
                    <fc-checkbox></fc-checkbox>
                    <span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                </div>
              </div>
              <div class="right-box">
                <fc-button class="added" size="medium">Added</fc-button>
                <fc-button class="work" size="medium">Work on it</fc-button>
                <fc-button class="done" size="medium">Done!</fc-button>
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
                    <fc-checkbox></fc-checkbox>
                    <span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                </div>
              </div>
              <div class="right-box">
                <fc-button class="added" size="medium">Added</fc-button>
                <fc-button class="work" size="medium">Work on it</fc-button>
                <fc-button class="done" size="medium">Done!</fc-button>
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
                    <fc-checkbox></fc-checkbox>
                    <span
                      >Promote (by getting buy-in) successful processes on the
                      group level (or at least in multiple teams)</span
                    >
                  </div>
                </div>
              </div>
              <div class="right-box">
                <fc-button class="added" size="medium">Added</fc-button>
                <fc-button class="work" size="medium">Work on it</fc-button>
                <fc-button class="done" size="medium">Done!</fc-button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('page-notepad', PageNotepad);
