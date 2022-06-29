import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Error");
    }

    async getHtml() {
        return `
            <h1>Page Not Found</h1>
        `;
    }
}