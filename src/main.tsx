import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'




import { init } from "./utils/platform.tsx";
import Main from './components/Main.tsx';

class ShadowRootExample extends HTMLElement {
  #rootID = "app-element-id";
  #styleID = "app-styles-element-id";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  cleanTree() {
    const currentElement = this.shadowRoot.getElementById(this.#rootID);

    if (currentElement) {
      this.shadowRoot.removeChild(currentElement);
    }

    const currentStyleElement = this.shadowRoot.getElementById(this.#styleID);

    if (currentStyleElement) {
      this.shadowRoot.removeChild(currentStyleElement);
    }
  }

  render() {
    const element = document.createElement("div");
    element.id = this.#rootID;

    this.shadowRoot.appendChild(element);

    console.log('element', element);
    init(element, <Main />);
  }
}

customElements.define("shadow-root-example", ShadowRootExample);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <shadow-root-example />
  </React.StrictMode>,
)