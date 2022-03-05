import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Settings');
    }

    async getHtml() {
        return `
            <h1>Profile</h1>
            <p>Your profile, manage your privacy and configuration.</p>
           
<div class="grid grid__profile">

    <div class="grid grid__probox--1">
    <div class="newbox-1">
        <div class="general-box">
           <p>tego ten</p>
           <i class='bx bxs-face profile-icon'></i>
           </div>
        </div>
    </div>

    <div class="grid grid__probox--2">
        <div class ="newbox">
            <div class="firstbox-1">somebox</div>
            <div class="firstbox-2">somebox</div>
            <div class="firstbox-3">somebox</div>
        </div>
    </div>

    <div class="grid grid__probox--3">
        <div class="grid__profile-box>
            
        </div>
    </div>

</div>
        `;
    }
}
