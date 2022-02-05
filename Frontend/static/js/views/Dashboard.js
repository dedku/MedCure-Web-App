import AbstractView from './AbstractView';

export default class extends AbstractView {
    constructor(parmams) {
        super(parmams);
        this.setTitle('Dashboard');
    }

    async getHtml() {
        return `
    <div class="dashboard">
        <div class="dashboard__box">
        <p class="dashboard__box__text-top">Todays Money</p>
        <p class="dashboard__box__text-bottom">$53000</p>
        </div>

        <div class="dashboard__box">
        <p class="dashboard__box__text-top">Todays Users</p>
        <p class="dashboard__box__text-bottom">2300</p>
        </div>

        <div class="dashboard__box">
        <p class="dashboard__box__text-top">New Clients</p>
        <p class="dashboard__box__text-bottom">+3052</p>
        </div>

        <div class="dashboard__box">
        <p class="dashboard__box__text-top">Total Sales</p>
        <p class="dashboard__box__text-bottom">$173000</p>
        </div>
    </div>

    <div class="grid">
        
            <div class="grid__mid-box__1">
            <h1>Who we are ?</h1>
            <p>Same koxy, nic wspolnego z medycyną</p>
            </div>
            <div class="grid__mid-box__2">New Boxes</div>
            <div class="grid__mid-box__3">New Boxes</div>
            <div class="grid__mid-box__4">New Boxes</div>
        
    </div>

        `;
    }
}
