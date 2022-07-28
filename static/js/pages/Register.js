import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Register");
  }

  async getHtml() {
    return `
    <h1>hello</h1>
    <p>
    <a href="/login" data-link>로그인</a>
    </p>
    `;
  }
}
