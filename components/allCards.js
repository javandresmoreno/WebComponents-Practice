import "./character-card.js";

class allCards extends HTMLElement {
  set results(data) {
    this._info = data;
    this._render();
  }
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  _render() {
    this.shadowRoot.innerHTML = `
    ${this._info
      .map(
        (character) => `
    <style>
        h3 {  
          color: black;
        }
    </style> 
    <character-card img=${character.image}>
      <h3 slot="gender">${character.name}</h3>
      <p slot="gender">Gender: ${character.gender}</p>
      <p slot="type">Type: ${character.type}</p>
      <p slot="status">Status: ${character.status}</p>
      <p slot="origin">Origin: ${character.origin.name}</p>
      <p slot="species">Species: ${character.species}</p>
      <p slot="created">Created: ${character.created}</p>
    </character-card> 
    `
      )
      .join("")}
    `;
  }
}

customElements.define("all-cards", allCards);
