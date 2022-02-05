import PageNotFound from "./views/PageNotFound";
import Dashboard from "./views/Dashboard";
import Invoices from "./views/Invoices";
import Appointment from "./views/Appointment";
import Profile from "./views/Profile";


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {

    // Routes setup
    const routes = [
        { path: "/error", view: PageNotFound },
        { path: "/", view: Dashboard },
        { path: "/invoices", view: Invoices },
        { path: "/appointment", view: Appointment },
        { path: "/profile", view: Profile },
    ];

    // Test potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    // Show exact route data
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    // Set 404 route
    if(!match) {
        match = {
            route: routes[0],
            isMatch: true,
        }
    }
    // Store new view data
    const view = new match.route.view();

    // Update new view html & nav data
    document.getElementById("nav").querySelector(".sidebar").innerHTML = await view.getSidebar();
    document.getElementById("app").querySelector(".dashboard").innerHTML = await view.getHtml();
};


// Prevent to reaload site if data-link matches
function click() {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
}

// Init all
function doAll() {
    router()
    click()
}

// Update state when navigates thought session hisory
window.addEventListener("popstate", router);

// Check if DOMContentLoaded event was already fired
if( document.readyState !== 'loading' ? doAll() : doAll() );