import { html } from '../components/base';

/**
 * Adding section to white mark by who this was made
 * @return {HTMLElement}
 */

export function MadeWithLove() {
  return html`
    <a
      href="https://forter.dev"
      target="_blank"
      style="color: var(--gray-8); text-decoration: none;"
    >
      Made with ❤️ by Forter Engineering
    </a>
  `;
}
