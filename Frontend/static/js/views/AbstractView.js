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
                <div class="sidebar">
                    <div class="sidebar__content">
                        <div class="sidebar__logo-content">
                            <div class="sidebar__logo">
                            <i class='bx bx-plus-medical' ></i>
                            <div class="sideba__logo_text">MedCure</div>
                            </div>
                        </div>
                        <i class='bx bx-menu sidebar__icon bx-border' ></i>
                        <ul class="sidebar__nav">
                            <li class="sidebar__nav-item">
                                    <i class="bx bx-search-alt-2 sidebar__nav-icon"></i>
                                    <input class="sidebar__search-bar" type="text" placeholder="Search...">
                            </li>
                            <li class="sidebar__nav-item">
                                <a class="sidebar__nav-link" href="/" data-link>
                                    <i class='bx bx-menu sidebar__nav-icon bx-border' ></i>
                                    <span class="sidebar__link-name">Dashboard</span>
                                </a>
                            </li>
                            <li class="sidebar__nav-item">
                                <a class="sidebar__nav-link" href="/invoices" data-link>
                                        <i class='bx bx-book-content bx-border sidebar__nav-icon' ></i>
                                    <span class="sidebar__link-name">Invoices</span>
                                </a>
                            </li>
                            <li class="sidebar__nav-item">
                                <a class="sidebar__nav-link" href="/profile" data-link>
                                    <i class='bx bx-face sidebar__nav-icon bx-border' ></i>
                                    <span class="sidebar__link-name">Profile</span>
                                </a>
                            </li>
                            <li class="sidebar__nav-item">
                                <a class="sidebar__nav-link" href="/settings" data-link>
                                    <i class='bx bx-brightness sidebar__nav-icon bx-border' ></i>
                                    <span class="sidebar__link-name">Settings</span>
                                </a>
                            </li>
                            <li class="sidebar__nav-item">
                                <a class="sidebar__nav-link" href="#" data-link>
                                    <i class='bx bx-brightness sidebar__nav-icon bx-border' ></i>
                                    <span class="sidebar__link-name">Log out</span>
                                </a>
                            </li>
                        </ul>
                        <div class="sidebar__appointment">
                            <div class="sidebar__appointment-box">
                                <div class="sidebar__appointment-button">
                                    <button href="/appointment" data-link="">Set Appointment </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
    }

    async getHtml() {
        return "";
    }
}