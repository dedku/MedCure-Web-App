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
                            <box-icon name='plus-medical' color='#fff' ></box-icon>
                            <div class="sideba__sidebar-contentr__logo_content__logo__logo_name">MedCure</div>
                            </div>
                        </div>
                        <box-icon name='menu' color='#fff'></box-icon>
                        <ul class="sidebar__sidebar-content__nav">
                            <li class="sidebar__sidebar-content__nav__item">
                                    <box-icon class="sidebar__sidebar-content__nav__item--icon" name='search' color='#fff'></box-icon>
                                    <input type="text" placeholder="Search...">
                            </li>
                            <li class="sidebar__sidebar-content__nav__item">
                                <a class="sidebar__sidebar-content__nav__item__link" href="/" data-link>
                                    <box-icon name='menu' color='#fff'></box-icon>
                                    <span class="nav__sidebar-content__link_name">Dashboard</span>
                                </a>
                            </li>
                            <li class="sidebar__sidebar-content__nav__item">
                                <a class="sidebar__sidebar-content__nav__item__link" href="/invoices" data-link>
                                    <box-icon name='book-content' color='#fff'></box-icon>
                                    <span class="nav__sidebar-content__link_name">Invoices</span>
                                </a>
                            </li>
                            <li class="sidebar__sidebar-content__nav__item">
                                <a class="sidebar__sidebar-content__nav__item__link" href="/profile" data-link>
                                    <box-icon name='face' type='solid' color='#fff'></box-icon>
                                    <span class="nav__sidebar-content__link_name">Profile</span>
                                </a>
                            </li>
                            <li class="sidebar__sidebar-content__nav__item">
                                <a class="sidebar__sidebar-content__nav__item__link" href="/settings" data-link>
                                    <box-icon type='solid' name='brightness' color='#fff'></box-icon>
                                    <span class="nav__sidebar-content__link_name">Settings</span>
                                </a>
                            </li>
                            <li class="sidebar__sidebar-content__nav__item">
                                <a class="sidebar__sidebar-content__nav__item__link" href="#" data-link>
                                    <box-icon type='solid' name='brightness' color='#fff'></box-icon>
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