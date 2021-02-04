import {
  html,
  css,
  LitElement
} from 'lit-element';

export class GftUiIcon extends LitElement {
  static get styles() {
    return css `
      :host {
        --icon-font:'Material Icons';
        --icon-size:8px;
        --icon-color:black;
        font-family:var(--font-family, var(--icon-font));
        font-size:var(--icon-size);
        color:var(--icon-color)
      }
      img{
        display:inline-block;
        width:var(--icon-size);
        height:var(--icon-size);
      }
    `;
  }

  static get properties() {
    return {
      src: {
        type: String,
        attribute: true,
        reflect: true
      }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html `
    ${  this.src ?
        html`
            <img src="${this.src}">
        `:
        html`
            <slot></slot>
        `
    }
    `
  }
}
