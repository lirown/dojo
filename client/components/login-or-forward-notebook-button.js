import { html, LitElement, css } from './base';
import { restore } from '../services/notepad';
import { urlForName } from '../router';
import {
  signUp,
  forgotPassword,
  signIn,
  signOut,
  getUser
} from '../services/firebase/authentication';

const FORM_STATES = {
  FORGOT: 'FORGOT',
  FORGOT_POST_EMAIL: 'FORGOT_POST_EMAIL',
  SIGNIN: 'SIGNIN',
  SIGNUP: 'SIGNUP'
};

export class LoginOrForwardNotebookButton extends LitElement {
  static styles = [
    css`
      img {
        margin-bottom: 25px;
      }

      fc-button[size='large'] {
        --fc-button-background-color: rgba(255, 255, 255, 0.3);
        --fc-button-item-color: white;
        font-size: 18px;
      }

      fc-button[secondary] {
        --fc-button-background-color: transparent;
        --fc-button-item-color: white;
        --fc-button-min-height: 36px;
        --fc-button-padding: 20px;
        --fc-button-default-border-radius: 30px;
        font-weight: 600;
        font-size: 14px;
        line-height: 34px;
        text-decoration: none;
        border-radius: 66px;
        --fc-button-box-shadow: transparent;
        --fc-button-item-color: var(--fc-link);
      }
      .buttons {
        display: grid;
        place-items: center;
        margin: 20px 0px 10px;
        gap: 10px;
      }
      fc-input {
        --fc-input-height: 30px;
        --fc-input-background-color: white;
        border-radius: 30px;
        --fc-input-shadow: 0px 10px 20px var(--gray-2);
        margin: 5px 0 15px 0;
      }
      label {
        font-size: 16px;
        height-height: 18px;
        color: var(--gray-8);
      }
      #forgot {
        color: var(--fc-link);
        cursor: pointer;
      }
      #reset-confirm {
        font-size: 14px;
        color: var(--gray-8);
      }

      #guest {
        text-align: center;
        color: var(--gray-6);
        cursor: pointer;
      }

      #error {
        margin: 10px 0;
        text-transform: uppercase;
        color: red;
        font-size: 12px;
      }
    `
  ];

  static get properties() {
    return {
      modalOpened: { type: Boolean },
      label: { type: String },
      formState: { type: Boolean },
      height: { type: String },
      error: { type: String }
    };
  }

  constructor() {
    super();
    this.modalOpened = false;
    this.label = '';
    this.formState = FORM_STATES.SIGNIN;
    this.emailValue = window.localStorage.getItem('emailForSignIn') || '';
    this.enterPressed = (event) => event.which === 13 || event.keyCode === 13;
    this.getWidth = () => (window.innerWidth < 500 ? '80%' : '205px');
  }

  /**
   * forward to the notebook route
   */
  openNotebook() {
    location.href = urlForName('notepad', {
      topic: 'engineering-craftsmanship'
    });
  }

  /**
   * @returns {Object<email, password, name>} properties for authentication
   */
  getInputProps() {
    const root = this.shadowRoot;

    return {
      email: root.querySelector('#email').value,
      name: root.querySelector('#name').value,
      password: root.querySelector('#password').value
    };
  }

  /**
   * fire auth request by the state of the form
   */
  async action() {
    try {
      const { password, email, name } = this.getInputProps();
      const { formState } = this;
      const { SIGNUP, SIGNIN } = FORM_STATES;

      console.log(`${this.formState}...`);

      if (formState === SIGNUP) {
        await signUp(email, password, name);
      } else if (formState === SIGNIN) {
        await signIn(email, password);
      } else {
        await forgotPassword(email);
      }

      this.openNotebook();
    } catch (e) {
      this.error = e.message;
    }
  }

  /**
   * toggle between signup and signin
   */
  toggleFormState() {
    this.error = '';
    this.formState =
      this.formState === FORM_STATES.SIGNIN
        ? FORM_STATES.SIGNUP
        : FORM_STATES.SIGNIN;
  }

  /**
   * toggle between opening notebook when loged in or modal
   */
  async toggleModal() {
    const user = await getUser();
    const modal = this.shadowRoot.querySelector('#modal');

    if (user) {
      return this.openNotebook();
    }

    modal.toggle();
  }

  render() {
    const { FORGOT, FORGOT_POST_EMAIL, SIGNUP, SIGNIN } = FORM_STATES;
    const { enterPressed, formState, emailValue, toggleModal, getWidth } = this;

    return html`<span>
      <fc-button @click="${toggleModal.bind(this)}" size="large">
        ${this.label}
      </fc-button>
      <fc-modal width="${getWidth()}" id="modal">
        <div>
          <img src="images/logodark.png"></img>
          <div
            ?hidden=${![SIGNUP].includes(formState)}
            class="field"
          >
            <label>Name</label>
            <fc-input id="name" label=" "></fc-input>
          </div>
          <div class="field">
            <label>Email</label>
            <fc-input
              id="email"
              label=" "
              value="${!formState === SIGNIN ? emailValue : ''}"
              @keypress="${(e) => (enterPressed(e) ? this.action() : '')}"
            ></fc-input>
          </div>
          <div
            ?hidden=${[FORGOT, FORGOT_POST_EMAIL].includes(formState)}
            class="field">
            <label>Password</label>
            <fc-input
              @keypress="${(e) => (enterPressed(e) ? this.action() : '')}"
              type="password" id="password" label=" " ></fc-input>
          </div>

          ${this.error ? html`<div id="error">${this.error}</div>` : ''}
          <span
              id="forgot"
            ?hidden=${[FORGOT, FORGOT_POST_EMAIL].includes(formState)}
            @click="${() => (formState = FORGOT)}"
            >Forgot Password?</span
          >
          <span
            id="reset-confirm"
            ?hidden=${![FORGOT_POST_EMAIL].includes(formState)}
            >A Link to log in has been sent to your mail, if such exist.</span
          >

          <div class="buttons">
            <fc-button
              @click="${() => this.action()}">
              ${
                this.formState === FORM_STATES.SIGNUP
                  ? 'SIGN UP'
                  : this.formState === FORM_STATES.SIGNIN
                  ? 'SIGN IN'
                  : 'RECOVER USER'
              }
            </fc-button>

            <fc-button
              ?hidden="${![FORGOT_POST_EMAIL.includes(formState)]}"
              secondary
              @click="${() => this.toggleFormState()}">
              SIGN ${formState === SIGNIN ? 'UP' : 'IN'}
            </fc-button>
          </div>

          <div id="guest" @click="${() =>
            this.openNotebook()}">Continue as a guest</div>
        </div>
      </fc-modal>
    </a>`;
  }
}

customElements.define(
  'login-or-forward-notebook-button',
  LoginOrForwardNotebookButton
);
