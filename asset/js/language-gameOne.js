// Dictionnaire de traductions pour gameOne.html
const translations = {
    fr: {
        // Header
        'header-title': 'Project One',
        'header-subtitle': 'White Paper v0',
        
        // Status Banner
        'status-title': 'Statut du projet',
        'status-1': 'Fondation',
        'status-2': 'Développement',
        'status-3': 'Testing',
        'status-4': 'Playable<br>Itch.io',
        
        // Back Button
        'back-button': 'Retour à BansheeDice',
        
        // Table des matières
        'toc-title': 'Table des matières',
        'toc-objectif': 'Objectif',
        'toc-objectifs-detailles': 'Objectifs détaillés',
        'toc-methodologie': 'Méthodologie',
        'toc-recompenses': 'Système de récompense',
        'toc-note': 'Note finale',
        
        // Section Objectif
        'section-objectif-title': 'Objectif',
        'objectif-p1': 'Découvrir l\'intersection entre le jeu vidéo et la blockchain à travers la création de petits jeux Web3 jouables.',
        'objectif-p2': 'Le white paper constitue l\'étape numéro 1 afin de poser les fondations et l\'orientation du projet. Au fil du temps, il sera complété, cependant les principaux éléments sont listés ci-dessous.',
        
        // Section Objectifs détaillés
        'section-objectifs-detailles-title': 'Objectifs détaillés',
        'objectif-1': 'Concevoir des mini-jeux <strong>simples et fun</strong> intégrant des fonctionnalités Web3 (NFTs, portefeuilles, récompenses on-chain).',
        'objectif-2': 'Tester le gameplay et recueillir des retours sur <a href="https://itch.io" target="_blank" rel="noopener">itch.io</a> en priorité.',
        'objectif-3': 'Expérimenter et itérer les mécaniques blockchain selon les retours des joueurs et la faisabilité technique.',
        
        // Section Méthodologie
        'section-methodologie-title': 'Méthodologie',
        'methodo-1-title': 'Prototyper',
        'methodo-1-desc': 'Développer le jeu avec HTML5/JavaScript, avec une évolution future vers Unreal Engine.',
        'methodo-2-title': 'Publier',
        'methodo-2-desc': 'Déployer une version jouable sur itch.io pour obtenir du feedback de la communauté.',
        'methodo-3-title': 'Intégrer Web3',
        'methodo-3-desc': 'Utiliser l\'écosystème <strong>Solana</strong> et <strong>Pump.fun</strong> pour la gestion du token.',
        'methodo-4-title': 'Open Source',
        'methodo-4-desc': 'Le code source du jeu sera <strong>open source</strong> pour encourager la créativité. L\'architecture reste <strong>privée</strong> pour des raisons de sécurité.',
        
        // Section Récompenses
        'section-recompenses-title': 'Système de Récompense',
        'reward-1-title': 'Loterie',
        'reward-1-desc': 'Le joueur reçoit une récompense aléatoire parmi une sélection d\'objets ou de bonus possibles.',
        'reward-2-title': 'Carte au trésor',
        'reward-2-desc': 'Le joueur suit des indices ou une carte pour trouver une récompense cachée dans le monde du jeu.',
        'reward-3-title': 'Objectif',
        'reward-3-desc': 'Une récompense est donnée lorsque le joueur atteint un score précis, un temps record, ou un autre objectif mesurable.',
        'reward-4-title': 'Mission',
        'reward-4-desc': 'Le joueur complète une ou plusieurs missions (quêtes, défis, mini-jeux) pour débloquer une récompense spécifique.',
        
        // Section Note
        'section-note-title': 'Note',
        'note-final': '<strong>Projet de taille humaine en développement</strong>',
        
        // Footer
        'footer-text': '© 2025 - Prototype de Mini-Jeu Web3 - White Paper v0.0',
        'footer-note': 'Document évolutif - Les spécifications peuvent être mises à jour au fil du développement',
    },
    
    en: {
        // Header
        'header-title': 'Project One',
        'header-subtitle': 'White Paper v0',
        
        // Status Banner
        'status-title': 'Project Status',
        'status-1': 'Foundation',
        'status-2': 'Development',
        'status-3': 'Testing',
        'status-4': 'Playable<br>Itch.io',
        
        // Back Button
        'back-button': 'Back to BansheeDice',
        
        // Table of contents
        'toc-title': 'Table of Contents',
        'toc-objectif': 'Objective',
        'toc-objectifs-detailles': 'Detailed Objectives',
        'toc-methodologie': 'Methodology',
        'toc-recompenses': 'Reward System',
        'toc-note': 'Final Note',
        
        // Objective Section
        'section-objectif-title': 'Objective',
        'objectif-p1': 'Discover the intersection between video games and blockchain through the creation of playable Web3 mini-games.',
        'objectif-p2': 'The white paper is step number 1 to lay the foundations and direction of the project. Over time, it will be completed, however the main elements are listed below.',
        
        // Detailed Objectives Section
        'section-objectifs-detailles-title': 'Detailed Objectives',
        'objectif-1': 'Design <strong>simple and fun</strong> mini-games integrating Web3 features (NFTs, wallets, on-chain rewards).',
        'objectif-2': 'Test gameplay and gather feedback on <a href="https://itch.io" target="_blank" rel="noopener">itch.io</a> as a priority.',
        'objectif-3': 'Experiment and iterate on blockchain mechanics based on player feedback and technical feasibility.',
        
        // Methodology Section
        'section-methodologie-title': 'Methodology',
        'methodo-1-title': 'Prototype',
        'methodo-1-desc': 'Develop the game with HTML5/JavaScript, with future evolution to Unreal Engine.',
        'methodo-2-title': 'Publish',
        'methodo-2-desc': 'Deploy a playable version on itch.io to get community feedback.',
        'methodo-3-title': 'Integrate Web3',
        'methodo-3-desc': 'Use the <strong>Solana</strong> ecosystem and <strong>Pump.fun</strong> for token management.',
        'methodo-4-title': 'Open Source',
        'methodo-4-desc': 'The game source code will be <strong>open source</strong> to encourage creativity. The architecture remains <strong>private</strong> for security reasons.',
        
        // Rewards Section
        'section-recompenses-title': 'Reward System',
        'reward-1-title': 'Lottery',
        'reward-1-desc': 'The player receives a random reward from a selection of possible items or bonuses.',
        'reward-2-title': 'Treasure Map',
        'reward-2-desc': 'The player follows clues or a map to find a hidden reward in the game world.',
        'reward-3-title': 'Goal',
        'reward-3-desc': 'A reward is given when the player reaches a specific score, record time, or other measurable objective.',
        'reward-4-title': 'Mission',
        'reward-4-desc': 'The player completes one or more missions (quests, challenges, mini-games) to unlock a specific reward.',
        
        // Note Section
        'section-note-title': 'Note',
        'note-final': '<strong>Human-sized project in development</strong>',
        
        // Footer
        'footer-text': '© 2025 - Web3 Mini-Game Prototype - White Paper v0.0',
        'footer-note': 'Evolving document - Specifications may be updated during development',
    },
    
    es: {
        // Header
        'header-title': 'Project One',
        'header-subtitle': 'White Paper v0',
        
        // Status Banner
        'status-title': 'Estado del Proyecto',
        'status-1': 'Fundación',
        'status-2': 'Desarrollo',
        'status-3': 'Pruebas',
        'status-4': 'Jugable<br>Itch.io',
        
        // Back Button
        'back-button': 'Volver a BansheeDice',
        
        // Tabla de contenidos
        'toc-title': 'Tabla de Contenidos',
        'toc-objectif': 'Objetivo',
        'toc-objectifs-detailles': 'Objetivos Detallados',
        'toc-methodologie': 'Metodología',
        'toc-recompenses': 'Sistema de Recompensas',
        'toc-note': 'Nota Final',
        
        // Sección Objetivo
        'section-objectif-title': 'Objetivo',
        'objectif-p1': 'Descubrir la intersección entre los videojuegos y la blockchain a través de la creación de pequeños juegos Web3 jugables.',
        'objectif-p2': 'El white paper constituye el paso número 1 para establecer los fundamentos y la dirección del proyecto. Con el tiempo, se completará, sin embargo, los elementos principales se enumeran a continuación.',
        
        // Sección Objetivos Detallados
        'section-objectifs-detailles-title': 'Objetivos Detallados',
        'objectif-1': 'Diseñar mini-juegos <strong>simples y divertidos</strong> integrando funcionalidades Web3 (NFTs, carteras, recompensas on-chain).',
        'objectif-2': 'Probar el gameplay y recopilar comentarios en <a href="https://itch.io" target="_blank" rel="noopener">itch.io</a> como prioridad.',
        'objectif-3': 'Experimentar e iterar las mecánicas blockchain según los comentarios de los jugadores y la viabilidad técnica.',
        
        // Sección Metodología
        'section-methodologie-title': 'Metodología',
        'methodo-1-title': 'Prototipar',
        'methodo-1-desc': 'Desarrollar el juego con HTML5/JavaScript, con evolución futura hacia Unreal Engine.',
        'methodo-2-title': 'Publicar',
        'methodo-2-desc': 'Implementar una versión jugable en itch.io para obtener feedback de la comunidad.',
        'methodo-3-title': 'Integrar Web3',
        'methodo-3-desc': 'Utilizar el ecosistema <strong>Solana</strong> y <strong>Pump.fun</strong> para la gestión del token.',
        'methodo-4-title': 'Código Abierto',
        'methodo-4-desc': 'El código fuente del juego será <strong>open source</strong> para fomentar la creatividad. La arquitectura permanece <strong>privada</strong> por razones de seguridad.',
        
        // Sección Recompensas
        'section-recompenses-title': 'Sistema de Recompensas',
        'reward-1-title': 'Lotería',
        'reward-1-desc': 'El jugador recibe una recompensa aleatoria de una selección de objetos o bonificaciones posibles.',
        'reward-2-title': 'Mapa del Tesoro',
        'reward-2-desc': 'El jugador sigue pistas o un mapa para encontrar una recompensa oculta en el mundo del juego.',
        'reward-3-title': 'Objetivo',
        'reward-3-desc': 'Se otorga una recompensa cuando el jugador alcanza una puntuación específica, un tiempo récord u otro objetivo medible.',
        'reward-4-title': 'Misión',
        'reward-4-desc': 'El jugador completa una o varias misiones (misiones, desafíos, mini-juegos) para desbloquear una recompensa específica.',
        
        // Sección Nota
        'section-note-title': 'Nota',
        'note-final': '<strong>Proyecto de tamaño humano en desarrollo</strong>',
        
        // Footer
        'footer-text': '© 2025 - Prototipo de Mini-Juego Web3 - White Paper v0.0',
        'footer-note': 'Documento evolutivo - Las especificaciones pueden actualizarse durante el desarrollo',
    }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
    // Sauvegarder la préférence
    localStorage.setItem('preferredLanguage', lang);
    
    // Appliquer les traductions
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Cas spécial pour les éléments <span> dans les <li>
            if (element.tagName === 'SPAN' && element.parentElement.tagName === 'LI') {
                element.textContent = translations[lang][key].replace(/<[^>]*>/g, '');
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Animation de transition
    document.body.style.opacity = '0.95';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 200);
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Détecter la langue du navigateur ou charger la préférence
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0]; // 'fr', 'en', 'es'
    const defaultLang = savedLang || (translations[browserLang] ? browserLang : 'fr');
    
    // Appliquer la langue par défaut
    changeLanguage(defaultLang);
    
    // Ajouter les événements sur les boutons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.currentTarget.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});