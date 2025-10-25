// ========== Système de basculement jour/nuit ==========
(function() {
    'use strict';

    // Vérifier le thème sauvegardé ou utiliser le thème par défaut (dark)
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Appliquer le thème au chargement
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Créer le bouton de basculement
    function createThemeToggle() {
        const toggle = document.createElement('button');
        toggle.id = 'theme-toggle';
        toggle.className = 'theme-toggle';
        toggle.setAttribute('aria-label', 'Basculer le thème');
        toggle.innerHTML = `
            <i class="fas fa-sun sun-icon"></i>
            <i class="fas fa-moon moon-icon"></i>
        `;
        document.body.appendChild(toggle);
        
        // Mettre à jour l'icône selon le thème actuel
        updateToggleIcon(savedTheme);
        
        return toggle;
    }

    // Mettre à jour l'icône du bouton
    function updateToggleIcon(theme) {
        const toggle = document.getElementById('theme-toggle');
        if (!toggle) return;
        
        if (theme === 'light') {
            toggle.classList.add('light-mode');
        } else {
            toggle.classList.remove('light-mode');
        }
    }

    // Basculer le thème
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Ajouter une classe pour l'animation de transition
        document.body.classList.add('theme-transitioning');
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleIcon(newTheme);
        
        // Retirer la classe après l'animation
        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, 500);
    }

    // Initialiser quand le DOM est prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        const toggle = createThemeToggle();
        toggle.addEventListener('click', toggleTheme);
        
        // Log pour déboguer (optionnel)
        console.log('🎨 Système de thème initialisé - Thème actuel:', savedTheme);
    }
})();