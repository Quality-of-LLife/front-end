import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("404 Not found");
  }

  async getHtml() {
    return `
    <h1>404 Not found</h1>
    `;
  }
}
