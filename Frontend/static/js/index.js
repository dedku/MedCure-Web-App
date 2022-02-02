const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {

    // Routes setup
    const routes = [
        { path: "/404", view: () => console.log("View Error") },
        { path: "/", view: () => console.log("View Dashboard") },
        { path: "/posts", view: () => console.log("View posts") },
        { path: "/settings", view: () => console.log("View settings") },
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

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true,
        }
    }

    console.log(match.route.view())
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