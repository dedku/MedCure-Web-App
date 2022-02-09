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
        <p class="dashboard__box__text-top">New Confirmed</p>
        <p class="dashboard__box__text-bottom">100350</p>
        <i class="bx bxs-virus dashboard__box__icon bx-border"></i>
        </div>

        <div class="dashboard__box">
        <p class="dashboard__box__text-top">Total Confirmed</p>
        <p class="dashboard__box__text-bottom">340567890</p>
        <i class="bx bx-clinic dashboard__box__icon bx-border" ></i>
        </div>

        <div class="dashboard__box">
        <p class="dashboard__box__text-top">New Deaths</p>
        <p class="dashboard__box__text-bottom">31052</p>
        <i class="bx bxs-clinic dashboard__box__icon bx-border"></i>
        </div>

        <div class="dashboard__box">
        <p class="dashboard__box__text-top">New Recovered</p>
        <p class="dashboard__box__text-bottom">157890</p>
        <i class="bx bx-heart dashboard__box__icon bx-border"></i>
        </div>
    </div>

    <div class="grid">
        
            <div class="grid__mid-box-1">
            <div class="grid__content-1">
            <div class="grid__box-1">
            <h1 class="grid__about-h1">Who we are ?</h1>
            <p class="grid__about-p">MedCure is a medical application that provides services to individual and corporate clinics. 
            We offer a wide range of medical services, medical consultations, specialist diagnostics and vaccinations.</p>
            </div>
            </div>
            </div>
            <div class="grid_content-2">
            <div class="grid__mid-box-2">
            </div>
            <div class="grid__mid-box-3">New Boxes</div>
            <div class="grid__mid-box-4">New Boxes</div>
        
    </div>

        `;
    }
}
