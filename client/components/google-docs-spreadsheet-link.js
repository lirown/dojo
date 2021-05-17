import { html } from '../components/base';

/**
 * Adding section to promote sharing the app
 * @return {HTMLElement}
 */

export function GoogleDocsSpreadsheetLink({
  /**
   * link to go on click
   * @type {String}
   */
  href = 'https://docs.google.com/spreadsheets/d/14veIcZKVLGjcGAKDSLUnXQg5t2VGkHFZFfCEl3aJvIA/edit?usp=sharing',

  /**
   * image source of the button
   * @type {String}
   */
  icon = 'excel',

  /**
   * description of the hiring
   * @type {String}
   */
  label = 'Forter Career Ladder for Software Engineers'
}) {
  return html`
    <a href="${href}" target="_blank" title="${label}"
      ><img src="images/${icon}.svg" alt="${label}" /><span>${label}</span></a
    >
  `;
}
