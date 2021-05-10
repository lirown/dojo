import { html } from '../components/base';
import { urlForName } from '../router';

/**
 * Creating a floating button for hiring
 * @return {HTMLElement}
 */
export function NavDropdownItem({
  /**
   * link to go on click
   * @type {String}
   */
  name = 'notepad',

  /**
   * image source of the button
   * @type {String}
   */
  params = {
    topic
  },

  /**
   * description of the hiring
   * @type {String}
   */
  label = 'My Growth Notepad'
}) {
  return html`
    <li>
      <a href="${urlForName(name, params)}" aria-label="subemnu">${label}</a>
    </li>
  `;
}
