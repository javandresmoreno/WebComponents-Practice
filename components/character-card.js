const template = document.createElement("template");
template.innerHTML = `
<style>
  p {
    color: gray;
    line-height: 0.3em; 
  }

  .titleName {
    color: black;
  }
</style>
<div>
  <img />
  <div>
    <h3><slot name="nameTitle"></slot></h3>
    <p><slot name="gender"></slot></p>
    <p><slot name="type"></slot></p>
    <p><slot name="status"></slot></p>
    <p><slot name="origin"></slot></p>
    <p><slot name="species"></slot></p>
    <p><slot name="created"></slot></p>
  </div>
</div>
`;

class characterCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector("img").src = this.getAttribute("img");
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
  }
}

customElements.define("character-card", characterCard);
