import { html } from '../components/base';

import { DEFAULT_STATUS, nextStatus } from '../stores/notepad';
import { db } from '../stores/db';

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
    <fc-tooltip tooltip="done?" position="top">
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
            .then(callback)}"
      ></fc-checkbox
    ></fc-tooltip>
  `;
}
