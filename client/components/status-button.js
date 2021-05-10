import { html } from '../components/base';

import { DEFAULT_STATUS, nextStatus } from '../stores/notepad';
import { db } from '../stores/db';

/**
 * Creating a checkbox to show wether topic is done or not
 * @return {HTMLElement}
 */

export function StatusButton({
  /**
   * whether if the topic done
   * @type {String}
   */
  status,

  /**
   * a name of the topic
   * @type {String}
   */
  key,

  /**
   * which section of topic this related
   * @type {String}
   */
  section,

  /**
   * which topic of category this related
   * @type {String}
   */
  topic,

  /**
   * default label of work status
   * @type {String}
   */
  label = 'Work on it',

  /**
   * callback once a click button finish
   * @type {Function}
   */
  callback
}) {
  return html`
    <fc-button
      style="--fc-button-text-transform:uppercase;--fc-button-color:white;"
      ?valid=${['done', 'added'].includes(status)}
      @click="${() =>
        db
          .create('key', {
            status: nextStatus[status] || DEFAULT_STATUS,
            key,
            section,
            topic
          })
          .then(callback)}"
      class="${status}"
      size="medium"
      >${status === 'work' ? `${label} +` : status}</fc-button
    >
  `;
}
