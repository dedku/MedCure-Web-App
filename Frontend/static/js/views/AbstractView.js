export default class {
    constructor(params) {
        this.params = params;
    }

    // Set document title
    setTitle(title) {
        document.title = title;
    }

    async getSidebar() {
            return`
            <nav class="nav">
                <a href="/" class="nav__link" data-link="">Dashboard</a>
                <a href="/invoices" class="nav__link" data-link="">Invoices</a>
                <a href="/profile" class="nav__link" data-link="">Profile</a>
                <a href="/appointment" class="nav__link" data-link="">Appointment</a>
            </nav>
            `
    }

    async getHtml() {
        return "";
    }
}