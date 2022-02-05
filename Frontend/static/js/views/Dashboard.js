import AbstractView from './AbstractView';

export default class extends AbstractView {
    constructor(parmams) {
        super(parmams);
        this.setTitle('Dashboard');
    }

    async getHtml() {
        return `
        <div class="dashboard">
        <div class="dashboard__grid">
        <div class="dashboard__grid__box-1">
        <p class="dashboard__grid__box-1__text-top">Todays Money</p>
        <p class="dashboard__grid__box-1__text-bottom">$53000</p>
        </div>

        <div class="dashboard__grid__box-2">
        <p class="dashboard__grid__box-1__text-top">Todays Users</p>
        <p class="dashboard__grid__box-1__text-bottom">2300</p>
        </div>

        <div class="dashboard__grid__box-3">
        <p class="dashboard__grid__box-1__text-top">New Clients</p>
        <p class="dashboard__grid__box-1__text-bottom">+3052</p>
        </div>

        <div class="dashboard__grid__box-4">
        <p class="dashboard__grid__box-1__text-top">Total Sales</p>
        <p class="dashboard__grid__box-1__text-bottom">$173000</p>
        </div>

        <div class="dashboard__grid__mid-box">New Boxes</div>
        <div class="dashboard__grid__mid-box">New Boxes</div>
        <div class="dashboard__grid__mid-box">New Boxes</div>
        <div class="dashboard__grid__mid-box">New Boxes</div>

        </div>
        </div>

        `;
    }
}
