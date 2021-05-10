import { html } from '../components/base';
import config from '../config';

/**
 * Adding section to white mark by who this was made
 * @return {HTMLElement}
 */

export function MadeWithLove() {
  return html`
    <div>
      Made with ❤️ by Forter Engineering
      ${config.environment !== 'production'
        ? `(Environment: ${config.environment})`
        : ''}
    </div>
  `;
}
