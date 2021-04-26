import { html, LitElement, css } from './base';
import { urlForName } from '../router';
import {
  signUp,
  forgotPassword,
  signIn,
  signOut
} from '../helpers/firebase/authentication';

const FORM_STATES = {
  FORGOT: 'FORGOT',
  FORGOT_POST_EMAIL: 'FORGOT_POST_EMAIL',
  SIGNIN: 'SIGNIN',
  SIGNUP: 'SIGNUP'
};

export class MainActionButton extends LitElement {
  static styles = [
    css`
      fc-button[size='large'] {
        --fc-button-background-color: var(--fc-secondary);
        --fc-button-item-color: white;
        --fc-button-min-height: 60px;
        --fc-button-padding: 20px;
        --fc-button-default-border-radius: 30px;

        font-weight: 600;
        font-size: 24px;
        line-height: 34px;
        text-decoration: none;
        border-radius: 66px;
      }

      fc-button[secondary] {
        --fc-button-background-color: transparent;
        --fc-button-item-color: white;
        --fc-button-min-height: 60px;
        --fc-button-padding: 20px;
        --fc-button-default-border-radius: 30px;

        font-weight: 600;
        font-size: 14px;
        line-height: 34px;
        text-decoration: none;
        border-radius: 66px;
      }

      .buttons {
        display: grid;
      }

      fc-input {
        --fc-input-background-color: white;
      }
    `
  ];

  static get properties() {
    return {
      modalOpened: { type: Boolean },
      label: { type: String },
      formState: { type: Boolean }
    };
  }

  getInputProps() {
    const email = this.shadowRoot.querySelector('#email').value;
    const name = this.shadowRoot.querySelector('#name').value;
    const password = this.shadowRoot.querySelector('#password').value;

    return {
      email,
      name,
      password
    };
  }

  async signInUser() {
    console.log('signing in...');
    const { password, email } = this.getInputProps();
    const result = await signIn(email, password);
    console.log(result);
    this.urlForName('quiz');
  }

  async signUpUser() {
    console.log('signing up...');
    const { password, email } = this.getInputProps();
    const result = await signUp(email, password);
    console.log(result);
    this.urlForName('quiz');
  }

  async forgotPassword() {
    console.log('forgot password...');
    const { email } = this.getInputProps();
    const result = await forgotPassword(email);
    console.log(result);
  }

  constructor() {
    super();
    this.modalOpened = false;
    this.label = '';
    this.formState = FORM_STATES.SIGNIN;
    this.emailValue = window.localStorage.getItem('emailForSignIn') || '';
  }

  toggleFormState() {
    if (this.formState === FORM_STATES.SIGNUP) {
      this.formState = FORM_STATES.SIGNIN;
      return;
    }
    this.formState = FORM_STATES.SIGNUP;
  }

  render() {
    return html`<a onclick="${() => (this.modalOpened = !this.modalOpened)}">
      <fc-button size="large">${this.label}</fc-button>
      <fc-modal ?opened="${this.modalOpened}">
        <div>
          <div
            ?hidden=${![FORM_STATES.SIGNUP].includes(this.formState)}
            class="field"
          >
            <label>Name</label>
            <fc-input id="name"></fc-input>
          </div>
          <div class="field">
            <label>Email</label>
            <fc-input
              id="email"
              value="${!this.formState === FORM_STATES.SIGNIN
                ? this.emailValue
                : ''}"
            ></fc-input>
          </div>
          <div
            ?hidden=${[FORM_STATES.FORGOT].includes(this.formState)}
            class="field"
          >
            <label>Password</label>
            <fc-input type="password" id="password"></fc-input>
          </div>
          <span
            ?hidden=${[FORM_STATES.FORGOT].includes(this.formState)}
            @click="${() => (this.formState = FORM_STATES.FORGOT)}"
            >Forgot Password?</span
          >
          <span
            ?hidden=${![FORM_STATES.FORGOT_POST_EMAIL].includes(this.formState)}
            >A Link to log in has been sent to your mail.</span
          >
          <div class="buttons">
            <fc-button
              @click="${() =>
                this.formState === FORM_STATES.SIGNUP
                  ? this.signUpUser()
                  : this.formState === FORM_STATES.SIGNIN
                  ? this.signInUser()
                  : this.forgotPassword()}"
            >
              ${this.formState === FORM_STATES.SIGNUP
                ? 'SIGN UP'
                : this.formState === FORM_STATES.SIGNIN
                ? 'SIGN IN'
                : 'RECOVER USER'}
            </fc-button>
            <fc-button
              ?hidden="${![
                FORM_STATES.FORGOT_POST_EMAIL.includes(this.formState)
              ]}"
              secondary
              @click="${() => this.toggleFormState()}"
              >SIGN
              ${this.formState === FORM_STATES.SIGNUP ? 'IN' : 'UP'}</fc-button
            >
          </div>
        </div>
      </fc-modal>
    </a>`;
  }
}

customElements.define('main-action-button', MainActionButton);
