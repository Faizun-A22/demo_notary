// navigation-loader.js
document.addEventListener('DOMContentLoaded', function() {
    // Load navigation
    fetch('navigation.html')
        .then(response => response.text())
        .then(html => {
            // Find navigation container
            const navContainer = document.getElementById('navigation-container');
            if (navContainer) {
                navContainer.innerHTML = html;
                
                // Ensure container has proper width class
                navContainer.classList.add('w-64');
                
                // Initialize navigation functionality
                initializeNavigation();
            }
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
        });
});

function initializeNavigation() {
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    
    if (mobileMenuButton && mobileSidebar) {
        function openMobileMenu() {
            mobileSidebar.classList.remove('-translate-x-full');
            mobileSidebar.classList.add('mobile-menu-enter');
            mobileMenuOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
        
        function closeMobileMenuFunc() {
            mobileSidebar.classList.add('-translate-x-full');
            mobileMenuOverlay.classList.add('hidden');
            document.body.style.overflow = '';
        }
        
        mobileMenuButton.addEventListener('click', openMobileMenu);
        if (closeMobileMenu) closeMobileMenu.addEventListener('click', closeMobileMenuFunc);
        if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenuFunc);
    }
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.classList.toggle('dark', currentTheme === 'dark');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const isDark = html.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
    
    // Active page highlighting
    function setActivePage() {
        const currentPath = window.location.pathname;
        const pageName = currentPath.split('/').pop().replace('.html', '') || 'dashboard';
        
        // Remove active class from all links
        document.querySelectorAll('.sidebar-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current page
        const activeLink = document.querySelector(`[data-page="${pageName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Update page title
        const pageTitle = document.getElementById('page-title');
        const titles = {
            'dashboard': 'Dashboard',
            'file-entry': 'Input Berkas Baru',
            'all-files': 'Semua Berkas',
            'clients': 'Klien',
            'reports': 'Laporan',
            'settings': 'Pengaturan'
        };
        
        if (pageTitle && titles[pageName]) {
            pageTitle.textContent = titles[pageName];
        }
    }
    
    // Set active page
    setActivePage();
    
    // Handle navigation clicks
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Close mobile menu if open
            if (mobileSidebar && !mobileSidebar.classList.contains('-translate-x-full')) {
                mobileSidebar.classList.add('-translate-x-full');
                mobileMenuOverlay.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    });
}