import { html, LitElement, css } from './base';
import { urlForName } from '../router';
import {
  signUp,
  forgotPassword,
  signIn,
  signOut,
  getUser
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
      img {
        margin-bottom: 25px;
      }

      fc-button[size='large'] {
        --fc-button-min-height: 60px;
        font-size: 24px;
      }

      fc-button {
        --fc-button-background-color: var(--fc-secondary);
        --fc-button-item-color: white;
        --fc-button-min-height: 36px;
        --fc-button-padding: 20px;
        --fc-button-default-border-radius: 30px;

        font-weight: 600;
        font-size: 18px;
        line-height: 34px;
        text-decoration: none;
        border-radius: 66px;
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
        margin: 40px 0px 10px;
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
    `
  ];

  static get properties() {
    return {
      modalOpened: { type: Boolean },
      label: { type: String },
      formState: { type: Boolean },
      height: { type: String }
    };
  }

  openQuiz() {
    window.location.href = urlForName('quiz');
  }

  openResults() {
    window.location.href = urlForName('quiz');
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
    this.openQuiz();
  }

  async signUpUser() {
    console.log('signing up...');
    const { password, email, name } = this.getInputProps();
    const result = await signUp(email, password, name);
    // todo: verify no pii is saved in file as it is accesssible to everyone
    // const res = await createOrUpdateFile(JSON.stringify(user));
    console.log(result);
    this.openQuiz();
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
    if (this.formState === FORM_STATES.SIGNUP) {
      this.formState = FORM_STATES.SIGNIN;
      return;
    }
    this.formState = FORM_STATES.SIGNUP;
  }

  async toggleModal() {
    const user = await getUser();
    if (user?.uid) {
      if (user?.hasGrowthNotepad) {
        return this.openResults();
      }
      return this.openQuiz();
    }

    this.shadowRoot.querySelector('#modal').toggle();
  }

  getHeight() {
    let height;
    if (this.formState === FORM_STATES.SIGNUP) {
      height = 425;
    }
    if (this.formState === FORM_STATES.SIGNIN) {
      height = 355;
    }
    if (this.formState === FORM_STATES.FORGOT) {
      height = 250;
    }

    if (this.formState === FORM_STATES.FORGOT_POST_EMAIL) {
      height = 305;
    }

    return `${height}px`;
  }

  render() {
    return html`<a>
      <fc-button @click="${async () =>
        await this.toggleModal()}" size="large">${this.label}</fc-button>
      <fc-modal width="205px" height="${this.getHeight()}" id="modal">
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
              ${this.formState === FORM_STATES.SIGNUP ? 'IN' : 'UP'}</fc-button
            >
          </div>
        </div>
      </fc-modal>
    </a>`;
  }
}

customElements.define('main-action-button', MainActionButton);
