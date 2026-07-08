document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav.tab-bar [role="tab"]');
    const currentPath = window.location.pathname;

    tabs.forEach(tab => {
        const tabLink = tab.getAttribute('href');
        let normalizedTabLink = tabLink;

        if (tabLink.endsWith('index.html')) {
            normalizedTabLink = tabLink.slice(0, -10); // Remove 'index.html'
        }

        if (currentPath === normalizedTabLink) {
            tab.setAttribute('aria-current', 'page');
        } else {
            tab.removeAttribute('aria-current');
        }
    });
});
