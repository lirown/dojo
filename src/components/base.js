export { LitElement, html, css, svg } from 'lit';
export { until } from 'lit/directives/until.js';
export { asyncReplace } from 'lit/directives/async-replace.js';
import { AsyncDirective } from 'lit/async-directive.js';
import { Directive, directive } from 'lit/directive.js';

class ResolvePromise extends AsyncDirective {
  render(promise) {
    Promise.resolve(promise).then((resolvedValue) => {
      // Rendered asynchronously:
      this.setValue(resolvedValue);
    });
    // Rendered synchronously:
    return `Waiting for promise to resolve`;
  }
}
export const resolve = directive(ResolvePromise);
