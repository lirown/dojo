import { html, LitElement, css } from './base';
import { urlForName } from '../router';
import {
  signUp,
  forgotPassword,
  signIn,
  signOut,
  getUser
} from '../helpers/firebase/authentication';
import { createFile } from '../helpers/firebase/storage';

const FORM_STATES = {
  FORGOT: 'FORGOT',
  FORGOT_POST_EMAIL: 'FORGOT_POST_EMAIL',
  SIGNIN: 'SIGNIN',
  SIGNUP: 'SIGNUP'
};

import { db } from '../stores/db';

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

  openNotebook() {
    location.href = urlForName('notepad', {
      topic: 'engineering-craftsmanship'
    });
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
    try {
      this.error = '';
      const result = await signIn(email, password);
      this.openNotebook();
    } catch (e) {
      this.error = e;
    }
  }

  async signUpUser() {
    console.log('signing up...');
    const { password, email, name } = this.getInputProps();
    try {
      this.error = '';
      const result = await signUp(email, password, name);
      this.openNotebook();
    } catch (e) {
      this.error = e;
    }
  }

  async forgotPassword() {
    this.formState = FORM_STATES.FORGOT_POST_EMAIL;

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
    this.error = '';
    if (this.formState === FORM_STATES.SIGNIN) {
      this.formState = FORM_STATES.SIGNUP;
      return;
    }
    this.formState = FORM_STATES.SIGNIN;
  }

  async toggleModal() {
    const user = await getUser();

    if (user) {
      return this.openNotebook();
    }

    this.shadowRoot.querySelector('#modal').toggle();
  }

  getWidth() {
    if (window.innerWidth < 500) {
      return '80%';
    }
    return '205px';
  }

  render() {
    return html`<span>
      <fc-button @click="${async () =>
        await this.toggleModal()}" size="large">${this.label}</fc-button>
      <fc-modal width="${this.getWidth()}" id="modal">
        <div>
          <img src="images/logodark.png"></img>
          <div
            ?hidden=${![FORM_STATES.SIGNUP].includes(this.formState)}
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
              value="${
                !this.formState === FORM_STATES.SIGNIN ? this.emailValue : ''
              }"
            ></fc-input>
          </div>
          <div
            ?hidden=${[
              FORM_STATES.FORGOT,
              FORM_STATES.FORGOT_POST_EMAIL
            ].includes(this.formState)}
            class="field"
          >
            <label>Password</label>
            <fc-input type="password" id="password" label=" "></fc-input>
          </div>
          
          ${
            this.error
              ? html`<div id="error">
                  ${this.error.split('/')[1].replaceAll('-', ' ')}
                </div>`
              : ''
          }
          <span
              id="forgot"
            ?hidden=${[
              FORM_STATES.FORGOT,
              FORM_STATES.FORGOT_POST_EMAIL
            ].includes(this.formState)}
            @click="${() => (this.formState = FORM_STATES.FORGOT)}"
            >Forgot Password?</span
          >
          <span
            id="reset-confirm"
            ?hidden=${![FORM_STATES.FORGOT_POST_EMAIL].includes(this.formState)}
            >A Link to log in has been sent to your mail, if such exist.</span
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
              ${
                this.formState === FORM_STATES.SIGNUP
                  ? 'SIGN UP'
                  : this.formState === FORM_STATES.SIGNIN
                  ? 'SIGN IN'
                  : 'RECOVER USER'
              }
            </fc-button>
            <fc-button
              ?hidden="${![
                FORM_STATES.FORGOT_POST_EMAIL.includes(this.formState)
              ]}"
              secondary
              @click="${() => this.toggleFormState()}"
              >SIGN
              ${this.formState === FORM_STATES.SIGNIN ? 'UP' : 'IN'}</fc-button
            >
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
