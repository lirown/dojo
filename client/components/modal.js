import { html, LitElement, css } from './base';

export class FcModal extends LitElement {
  static styles = [
    css`
      /* [Object] Modal
    * =============================== */
      .fc-modal {
        opacity: 0;
        visibility: hidden;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: left;
        background: rgba(0, 0, 0, 0.5);
        transition: opacity 0.25s ease;
        z-index: 3;
      }
      .fc-modal-bg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        cursor: pointer;
        z-index: 1;
      }
      .fc-modal-state {
        display: none;
      }
      .fc-modal[opened] {
        opacity: 1;
        visibility: visible;
      }
      .fc-modal[opened] .fc-modal-inner {
        top: 0;
      }
      .fc-modal-inner {
        transition: top 0.25s ease;
        position: absolute;
        top: -20%;
        right: 0;
        bottom: 0;
        left: 0;
        width: 1000px;
        margin: auto;
        overflow: auto;
        background: var(--gray-1);
        border-radius: 5px;
        padding: 2em 4em;
        height: 636px;
        z-index: 4;
      }
      .fc-modal-close {
        position: absolute;
        right: 1em;
        top: 1em;
        width: 1.1em;
        height: 1.1em;
        cursor: pointer;
        transition: 0.3s;
      }
      .fc-modal-close:after,
      .fc-modal-close:before {
        content: '';
        position: absolute;
        width: 2px;
        height: 1.5em;
        background: #ccc;
        display: block;
        transform: rotate(45deg);
        left: 50%;
        margin: -3px 0 0 -1px;
        top: 0;
      }
      .fc-modal-close:hover:after,
      .fc-modal-close:hover:before {
        background: #aaa;
      }
      .fc-modal-close:before {
        transform: rotate(-45deg);
      }
      @media screen and (max-width: 768px) {
        .fc-modal-inner {
          width: 90%;
          height: 90%;
          box-sizing: border-box;
        }
      }
      .click-to-open {
        cursor: pointer;
        font-size: 16px;
      }
    `
  ];

  static get properties() {
    return {
      width: { type: String },
      height: { type: String },
      opened: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.opened = false;
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  toggle() {
    if (this.opened) {
      return this.close();
    }
    return this.open();
  }

  render() {
    const { opened } = this;
    return html`
      <slot @click="${() => this.open()}" name="button"></slot>
      <div class="fc-modal" ?opened=${opened}>
        <label class="fc-modal-bg" @click="${() => this.close()}"></label>
        <div
          class="fc-modal-inner"
          @click="${() => this.open()}"
          style="width:${this.width};height:${this.height};"
        >
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('fc-modal', FcModal);
