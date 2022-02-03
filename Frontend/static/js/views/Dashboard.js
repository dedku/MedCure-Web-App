import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor(parmams) {
        super(parmams);
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
            <h1>Welcome back, Dom</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
                <a href="/invoices" data-link>View recent invoices</a>.
                <a href="/asd" data-link>Test 404</a>
            </p>
        `;
    }
}