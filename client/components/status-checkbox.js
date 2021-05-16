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
   * callback once a click button finish
   * @type {Function}
   */
  callback
}) {
  return html`
    <fc-tooltip
      tooltip="${status === 'done' ? 'added?' : 'done?'}"
      position="top"
    >
      <fc-checkbox
        ?checked=${status === 'done'}
        @click="${({ target: { checked } }) =>
          db
            .create(key, {
              status: checked ? 'added' : 'done',
              key,
              section,
              topic
            })
            .then(callback)
            .then(backup)}"
      ></fc-checkbox
    ></fc-tooltip>
  `;
}
