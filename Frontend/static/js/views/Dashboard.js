import AbstractView from './AbstractView';

export default class extends AbstractView {
    constructor(parmams) {
        super(parmams);
        this.setTitle('Dashboard');
    }

    async getHtml() {
        return `
        <div class="dashboard">
        <div class="dashboard__navigation">
        <div class="dashboard__box-1"><p>Money First</p></div>
        </div>
        </div>
        
        `;
    }
}
