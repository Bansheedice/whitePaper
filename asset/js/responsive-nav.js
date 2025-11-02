// ========== Menu responsive pour la navigation ==========
(function() {
    'use strict';

    function initResponsiveNav() {
        // Créer le bouton hamburger
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.setAttribute('aria-label', 'Toggle menu');
        menuToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        document.body.appendChild(menuToggle);

        // Créer l'overlay
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);

        // Récupérer la table des matières
        const toc = document.querySelector('.table-of-contents');
        
        if (!toc) return;

        // Toggle du menu
        function toggleMenu() {
            const isActive = toc.classList.contains('active');
            
            if (isActive) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        function openMenu() {
            toc.classList.add('active');
            overlay.classList.add('active');
            menuToggle.classList.add('active');
            document.body.style.overflow = 'hidden'; // Empêcher le scroll
        }

        function closeMenu() {
            toc.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = ''; // Restaurer le scroll
        }

        // Event listeners
        menuToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', closeMenu);

        // Fermer le menu quand on clique sur un lien
        const tocLinks = toc.querySelectorAll('a');
        tocLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Petit délai pour permettre le scroll
                setTimeout(closeMenu, 100);
            });
        });

        // Fermer le menu avec la touche Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && toc.classList.contains('active')) {
                closeMenu();
            }
        });

        // Fermer le menu si on redimensionne au-dessus de 1200px
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1200 && toc.classList.contains('active')) {
                closeMenu();
            }
        });

        console.log('📱 Navigation responsive initialisée');
    }

    // Initialiser quand le DOM est prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initResponsiveNav);
    } else {
        initResponsiveNav();
    }
})();