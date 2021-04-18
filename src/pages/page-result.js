import { html, css } from '../components/base';
import { Logo } from '../components';

import { PageElement } from '../helpers/page-element';

export class PageResult extends PageElement {
  render() {
    return html`
      <section class="hero hero-result">
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
                    <li>Architecture</li>
                    <li>Code writing skills</li>
                    <li>Tests</li>
                    <li>Operations</li>
                    <li>Security</li>
                    <li>Observability</li>
                    <li>Costs Optimizations</li>
                    <li>Ownership</li>
                    <li>Being a Chief</li>
                  </ul>
                </div>
              </div>
              <div class="right-box">
                <fc-button size="small">Show me How</fc-button>
              </div>
            </div>

            <div class="result-box">
              <div class="left-box">
                <div class="box-title">
                  <i class="leader"></i>Project Leadership
                </div>
                <div class="box-tags">
                  <ul>
                    <li>Architecture</li>
                    <li>Code writing skills</li>
                    <li>Tests</li>
                    <li>Operations</li>
                    <li>Security</li>
                    <li>Observability</li>
                    <li>Costs Optimizations</li>
                    <li>Ownership</li>
                    <li>Being a Chief</li>
                  </ul>
                </div>
              </div>
              <div class="right-box">
                <fc-button size="small">Show me How</fc-button>
              </div>
            </div>

            <div class="result-box">
              <div class="left-box">
                <div class="box-title">
                  <i class="business"></i>Business Involvement
                </div>
                <div class="box-tags">
                  <ul>
                    <li>Architecture</li>
                    <li>Code writing skills</li>
                    <li>Tests</li>
                    <li>Operations</li>
                    <li>Security</li>
                    <li>Observability</li>
                    <li>Costs Optimizations</li>
                    <li>Ownership</li>
                    <li>Being a Chief</li>
                  </ul>
                </div>
              </div>
              <div class="right-box">
                <fc-button size="small">Show me How</fc-button>
              </div>
            </div>

            <div class="result-box">
              <div class="left-box">
                <div class="box-title">
                  <i class="impact"></i>Organizational Impact
                </div>
                <div class="box-tags">
                  <ul>
                    <li>Architecture</li>
                    <li>Code writing skills</li>
                    <li>Tests</li>
                    <li>Operations</li>
                    <li>Security</li>
                    <li>Observability</li>
                    <li>Costs Optimizations</li>
                    <li>Ownership</li>
                    <li>Being a Chief</li>
                  </ul>
                </div>
              </div>
              <div class="right-box">
                <fc-button size="small">Show me How</fc-button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('page-result', PageResult);
