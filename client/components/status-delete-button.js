import { html } from '../components/base';

import { DEFAULT_STATUS, backup } from '../services/notepad';
import { db } from '../services/database';

/**
 * Creating a checkbox to show wether topic is done or not
 * @return {HTMLElement}
 */

export function StatusDeleteButton({
  /**
   * a name of the topic
   * @type {String}
   */
  key,

  /**
   * callback once a click button finish
   * @type {Function}
   */
  callback
}) {
  return html`
    <a
      @click="${() =>
        db
          .remove(key)

          .then(callback)
          .then(backup)}"
      class="delete-link"
    >
      Remove <a />
    </a>
  `;
}
