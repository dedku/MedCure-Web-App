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

    <div class="grid grid__dashboard">
        
        <div class="grid__mid-box-1">
            <div class="grid__content-1">
            <h1 class="grid__about-h1">Who we are ?</h1>
            <p class="grid__about-p">MedCure is a medical application that provides services to individual and corporate clinics. 
            We offer a wide range of medical services, medical consultations, specialist diagnostics and vaccinations.</p>
            </div>
            </div>
            
           
            <div class="grid__mid-box-2">
            <div class="row">
            <div class="blog-text">
            <h2 class="grid__about-h1-black">SARS-CoV-2 structure</h1>
            <p class="grid__about-p-black">The shape of SARS-CoV-2 - round structure with spikes - in general outline is consistent with the results of microscopic 
            observations. Thanks to the images from electron microscopes, we know that an element of the coronavirus structure is 
            a characteristic corona, resembling a luminous shell visible during a solar eclipse. So, the name of the pathogen is not accidental.
            This crown is made up of protruding particles on the surface of the virus - called spike proteins.
            This protein interacts with the host cell and serves as a key for it.</p></div>
            <img class=" grid__picture" src="../static/img/virus.jpg" alt="Virus">
            
            </div>
            </div>
            
            <div class="grid__mid-box-3">
            <div class="prescription_table">
            <div class="titles">
            <h2>Prescriptions</h2>
            <h3 class="prescription__h3"><i class='bx bxs-receipt prescription__icon'></i>30 prescriptions this month</h3>
            </div>
                <ul class="responsive-table">
                  <li class="responsive-table__header">
                    <div class="col col-1">Prescription</div>
                    <div class="col col-2">Doctor</div>
                    <div class="col col-3">Cost</div>
                    <div class="col col-4">Payment Status</div>
                  </li>
                  <li class="responsive-table__row">
                    <div class="col col-1" data-label="Job Id">42235</div>
                    <div class="col col-2" data-label="Customer Name">John Doe</div>
                    <div class="col col-3" data-label="Amount">$100</div>
                    <div class="col col-4" data-label="Payment Status">Pending</div>
                  </li>
                  <li class="responsive-table__row">
                    <div class="col col-1" data-label="Job Id">42442</div>
                    <div class="col col-2" data-label="Customer Name">Jennifer Smith</div>
                    <div class="col col-3" data-label="Amount">$120</div>
                    <div class="col col-4" data-label="Payment Status">Pending</div>
                  </li>
                  <li class="responsive-table__row">
                    <div class="col col-1" data-label="Job Id">42257</div>
                    <div class="col col-2" data-label="Customer Name">John Smith</div>
                    <div class="col col-3" data-label="Amount">$150</div>
                    <div class="col col-4" data-label="Payment Status">Pending</div>
                  </li>
                  <li class="responsive-table__row">
                    <div class="col col-1" data-label="Job Id">42311</div>
                    <div class="col col-2" data-label="Customer Name">John Carpenter</div>
                    <div class="col col-3" data-label="Amount">$170</div>
                    <div class="col col-4" data-label="Payment Status">Pending</div>
                  </li>
                  <li class="responsive-table__row">
                    <div class="col col-1" data-label="Job Id">42311</div>
                    <div class="col col-2" data-label="Customer Name">John Carpenter</div>
                    <div class="col col-3" data-label="Amount">$170</div>
                    <div class="col col-4" data-label="Payment Status">Pending</div>
                  </li>
                  
                </ul>

            </div>
          </div>
            
            

        <div class="grid__mid-box-4">
        <div class="bg_mid-box-4">
        <div class="doctors-table">
        <div class="titles">
        <h2>Free dates</h2>
        <h3 class="prescription__h3"><i class='bx bxs-receipt prescription__icon'></i>You are one click from making an appointment</h3>
        </div>
            <ul class="doctors-table__ul">
              
              <li class="doctors-table__row">
                <div class="col col-1" data-label="Doctor Free Dates"><i class='bx bx-badge-check doctors-table__icon'></i>Friday 23</div>
                <i class='bx bx-dots-vertical'></i>
                <div class="col col-4" data-label="Doctor Name">John Doe</div>
                <i class='bx bx-dots-vertical'></i>
              </li>
              <li class="doctors-table__row">
                <div class="col col-1" data-label="Doctor Free Dates"><i class='bx bx-badge-check doctors-table__icon'></i>Wednesday 1</div>
                <i class='bx bx-dots-vertical'></i>
                <div class="col col-4" data-label="Doctor Name">John Doe</div>
                <i class='bx bx-dots-vertical'></i>
              </li>
              <li class="doctors-table__row">
                <div class="col col-1" data-label="Doctor Free Dates"><i class='bx bx-badge-check doctors-table__icon'></i>Monday 11</div>
                <i class='bx bx-dots-vertical'></i>
                <div class="col col-4" data-label="Doctor Name">Stuart Length</div>
                <i class='bx bx-dots-vertical'></i>
              </li>
              <li class="doctors-table__row">
                <div class="col col-1" data-label="Doctor Free Dates"><i class='bx bx-badge-check doctors-table__icon'></i>Thursday 18</div>
                <i class='bx bx-dots-vertical'></i>
                <div class="col col-4" data-label="Doctor Name">Anthony Joshua</div>
                <i class='bx bx-dots-vertical'></i>
              </li>
              <li class="doctors-table__row">
                <div class="col col-1" data-label="Doctor Free Dates"><i class='bx bx-badge-check doctors-table__icon'></i>Friday 5</div>
                <i class='bx bx-dots-vertical'></i>
                <div class="col col-4" data-label="Doctor Name">Samuel L Jackson</div>
                <i class='bx bx-dots-vertical'></i>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
        

        `;
    }
}
