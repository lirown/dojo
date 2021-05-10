import { html } from '../components/base';

/**
 * Adding section to promote sharing the app
 * @return {HTMLElement}
 */

export function ShareSection() {
  const share = () =>
    navigator &&
    navigator.share &&
    navigator.share({
      title: 'Dojo.Engineering',
      text: 'Check out Dojo Engineering and Improve as engineer.',
      url: 'https://lirown.github.io/dojo'
    });

  if (navigator.share) {
    return html` <div>
      Like what you see? please
      <a href="#" @click="${share}"> share </a>
      with your friends
    </div>`;
  }
}
