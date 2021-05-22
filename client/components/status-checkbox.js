import { html } from '../components/base';

import { DEFAULT_STATUS, nextStatus, backup } from '../services/notepad';
import { db } from '../services/db';

/**
 * Creating a checkbox to show wether topic is done or not
 * @return {HTMLElement}
 */

export function StatusCheckbox({
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
   * @type {Number}
   */
  topic,

  /**
   * link to resource to read
   * @type {String}
   */
  link,

  /**
   * callback once a click button finish
   * @type {Function}
   */
  callback
}) {
  console.log(status, key);
  return html`
    <fc-tooltip
      tooltip="${status === 'done' ? 'added?' : 'done?'}"
      position="top"
    >
      <fc-checkbox
        ?checked=${status === 'done'}
        @click="${({ target }) =>
          db
            .create(key, {
              status: status === 'done' ? 'added' : 'done',
              link,
              key,
              section,
              topic
            })
            .then(() =>
              status !== 'added'
                ? target.removeAttribute('checked')
                : target.setAttribute('checked', '')
            )
            .then(callback)

            .then(backup)}"
      ></fc-checkbox
    ></fc-tooltip>
  `;
}
