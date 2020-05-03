import './register'
import { html, render } from '@gallop/gallop'

render(html`
  <z-button @click="${() => console.log(`hehehe`)}">hello target</z-button>
`)
