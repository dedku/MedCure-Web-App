import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <div class="dashboard">
            <h1>Invoices</h1>
            <p>You are viewing the invoices!</p>
            </div>
        `;
    }
}