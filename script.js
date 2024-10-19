document.addEventListener('DOMContentLoaded', function () {
    const servicePages = document.querySelectorAll('.service-page');
    const homepage = document.getElementById('sectionhomepage');

    // Initially hide all service pages
    servicePages.forEach(page => {
        page.classList.add('hidden');
    });

    // Function to display a service page
    window.display = function (sectionId) {
        // Hide homepage and all service pages
        homepage.classList.add('hidden');
        servicePages.forEach(page => {
            page.classList.add('hidden');
        });

        const selectedPage = document.getElementById(sectionId);
        if (selectedPage) {
            selectedPage.classList.remove('hidden');
            window.history.pushState({ section: sectionId }, '', `#${sectionId}`);
            if ($('.navbar-collapse').hasClass('show')) {
                $('.navbar-collapse').collapse('hide');
            }
        }
    };

    // Handle back/forward navigation
    window.onpopstate = function (event) {
        if (event.state && event.state.section) {
            const sectionId = event.state.section;
            const selectedPage = document.getElementById(sectionId);
            if (selectedPage) {
                homepage.classList.add('hidden');
                selectedPage.classList.remove('hidden');
            }
        } else {
            homepage.classList.remove('hidden');
            servicePages.forEach(page => {
                page.classList.add('hidden');
            });
        }
    };

    // Check for a hash in the URL on initial load
    const hash = window.location.hash;
    if (hash) {
        const sectionId = hash.substring(1);
        const selectedPage = document.getElementById(sectionId);
        if (selectedPage) {
            homepage.classList.add('hidden');
            selectedPage.classList.remove('hidden');
        }
    }
});
