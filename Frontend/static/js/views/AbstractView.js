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
                    <div class="sidebar__logo_content">
                        <div class="sidebar__logo_content__logo"></div>
                        <box-icon name='plus-medical'></box-icon>
                        <div class="sidebar__logo_content__logo__logo_name">MedCure</div>
                    </div>
                    <box-icon name='menu'></box-icon>
                    <ul class="nav">
                        <li>
                                <box-icon name='menu'></box-icon>
                                <input type="text" placeholder="Search...">
                            </a>
                        </li>
                        <li><a href="/" data-link>
                                <box-icon name='menu'></box-icon>
                                <span class="nav__link_name">Dashboard</span>
                            </a>
                        </li>
                        <li><a href="/invoices" data-link>
                                <box-icon name='book-content'></box-icon>
                                <span class="nav__link_name">Invoices</span>
                            </a>
                        </li>
                        <li><a href="/profile" data-link>
                                <box-icon name='face' type='solid'></box-icon>
                                <span class="nav__link_name">Profile</span>
                            </a>
                        </li>
                        <li><a href="/settings" data-link>
                                <box-icon type='solid' name='brightness'></box-icon>
                                <span class="nav__link_name">Settings</span>
                            </a>
                        </li>
                        <li><a href="#" data-link>
                                <box-icon type='solid' name='brightness'></box-icon>
                                <span class="nav__link_name">Log out</span>
                            </a>
                        </li>
                    </ul>
                    <div class="appointment">
                        <div class="appointment__box">
                            <div class="appointment__box-button">
                                <button> <a href="/appointment" data-link="">Set Appointment </a></button>
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