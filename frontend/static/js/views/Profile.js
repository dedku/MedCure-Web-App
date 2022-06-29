import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>Profile</h1>
            <p>Your profile, manage your privacy and configuration.</p>
        `;
    }
}