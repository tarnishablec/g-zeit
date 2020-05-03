import { component, html, ReactiveElement } from '@gallop/gallop'

export const ZButton = component('z-button', function (
  this: ReactiveElement,
  loading: boolean = false,
  size: 'small' | 'mini' | 'medium' | 'big' = 'medium'
) {
  return html`<button part="button">
    ${loading ? html`` : html`<slot></slot>`}
  </button>`
})
