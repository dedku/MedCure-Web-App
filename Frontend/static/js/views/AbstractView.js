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
                    <div class="sidebar__sidebar-content">
                        <div class="sidebar__sidebar-content__logo_content">
                            <div class="sidebar__sidebar-content__logo_content__logo">
                            <i class='bx bx-plus-medical' ></i>
                            <div class="sideba__sidebar-contentr__logo_content__logo__logo_name">MedCure</div>
                            </div>
                        </div>
                        <box-icon name='menu' color='#fff'></box-icon>
                        <ul class="sidebar__sidebar-content__nav">
                            <li class="sidebar__sidebar-content__nav__item">
                                    <i class="bx bx-search-alt-2 sidebar__sidebar-content__nav__item__icon"      color='#fff'></i>
                                    <input type="text" placeholder="Search...">
                            </li>
                            <li class="sidebar__sidebar-content__nav__item">
                                <a class="sidebar__sidebar-content__nav__item__link" href="/" data-link>
                                    <i class='bx bx-menu' ></i>
                                    <span class="nav__sidebar-content__link_name">Dashboard</span>
                                </a>
                            </li>
                            <li class="sidebar__sidebar-content__nav__item">
                                <a class="sidebar__sidebar-content__nav__item__link" href="/invoices" data-link>
                                    <i class='bx bx-book-content' ></i>
                                    <span class="nav__sidebar-content__link_name">Invoices</span>
                                </a>
                            </li>
                            <li class="sidebar__sidebar-content__nav__item">
                                <a class="sidebar__sidebar-content__nav__item__link" href="/profile" data-link>
                                    <i class='bx bx-face' ></i>
                                    <span class="nav__sidebar-content__link_name">Profile</span>
                                </a>
                            </li>
                            <li class="sidebar__sidebar-content__nav__item">
                                <a class="sidebar__sidebar-content__nav__item__link" href="/settings" data-link>
                                    <i class='bx bx-brightness' ></i>
                                    <span class="nav__sidebar-content__link_name">Settings</span>
                                </a>
                            </li>
                            <li class="sidebar__sidebar-content__nav__item">
                                <a class="sidebar__sidebar-content__nav__item__link" href="#" data-link>
                                    <i class='bx bx-brightness' ></i>
                                    <span class="nav__sidebar-content__link_name">Log out</span>
                                </a>
                            </li>
                        </ul>
                        <div class="sidebar__sidebar-content__appointment">
                            <div class="sidebar__sidebar-content__appointment__box">
                                <div class="sidebar__sidebar-content__appointment__box-button">
                                    <button> <a href="/appointment" data-link="">Set Appointment </a></button>
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