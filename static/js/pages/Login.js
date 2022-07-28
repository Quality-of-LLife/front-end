import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Login");
  }

  async getHtml() {
    return `
    <h1>hello</h1>
    <p>
    <a href="/Register" data-link>회원가입</a>
    </p>
    `;
  }
}
