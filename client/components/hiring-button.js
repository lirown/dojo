import { html } from '../components/base';

/**
 * Creating a floating button for hiring
 * @return {HTMLElement}
 */

export function HiringButton({
  /**
   * link to go on click
   * @type {String}
   */
  href = 'https://www.forter.com/careers/',

  /**
   * image source of the button
   * @type {String}
   */
  src = 'images/hire.svg',

  /**
   * description of the hiring
   * @type {String}
   */
  alt = 'We are Hiring'
} = {}) {
  return html`
    <div class="hiring">
      <img src="${src}" alt="${alt}" @click="${() => openInNewTab(href)}" />
    </div>
  `;
}

function openInNewTab(url) {
  window.open(url, '_blank').focus();
}
