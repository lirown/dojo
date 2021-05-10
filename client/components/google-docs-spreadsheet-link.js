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
  href = 'https://docs.google.com/spreadsheets/d/1e71fL0b5lYyac_SMSZZFHqID_VjixPwUOuCqFXtzGL4',

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
