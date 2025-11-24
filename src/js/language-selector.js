// Language translations
const translations = {
    'pt': {
        'hello': 'Olá, Me chamo',
        'fullstack_developer': 'Full-stack Developer',
        'specializing': 'Especializado em tecnologias web modernas',
        'technologies': 'Tecnologias',
        'description': 'Descrição',
        'select_technology': 'Selecione uma tecnologia e uma breve descrição será exibida aqui!',
        'about_me': 'Sobre mim',
        'professional_summary': 'Resumo Profissional',
        'skills_expertise': 'Habilidades e conhecimentos especializados',
        'work_experience': 'Experiência Profissional',
        'certifications': 'Certificações',
        'download_cv': 'Download CV',
        'download_full_cv': 'Download Completo CV',
        'projects': 'Projetos'
    },
    'en': {
        'hello': 'Hello, I\'m',
        'fullstack_developer': 'Full-stack Developer',
        'specializing': 'Specializing in modern web technologies',
        'technologies': 'Technologies',
        'description': 'Description',
        'select_technology': 'Select one technology and a brief description will be displayed here!',
        'about_me': 'About Me',
        'professional_summary': 'Professional Summary',
        'skills_expertise': 'Skills & Expertise',
        'work_experience': 'Work Experience',
        'certifications': 'Certifications',
        'download_cv': 'Download CV',
        'download_full_cv': 'Download Full CV',
        'projects': 'Projects'
    },
    'es': {
        'hello': 'Hola, Me llamo',
        'fullstack_developer': 'Desarrollador Full-stack',
        'specializing': 'Especializado en tecnologías web modernas',
        'technologies': 'Tecnologías',
        'description': 'Descripción',
        'select_technology': '¡Seleccione una tecnología y se mostrará aquí una breve descripción!',
        'about_me': 'Sobre mí',
        'professional_summary': 'Resumen Profesional',
        'skills_expertise': 'Habilidades y Experiencia',
        'work_experience': 'Experiencia Laboral',
        'certifications': 'Certificaciones',
        'download_cv': 'Descargar CV',
        'download_full_cv': 'Descargar CV Completo',
        'projects': 'Proyectos'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('languageToggle');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    const languageText = document.querySelector('.language-text');
    
    // Toggle dropdown visibility
    languageToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!languageToggle.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('show');
        }
    });
    
    // Handle language selection
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            
            // Update button text with selected language code
            languageText.textContent = selectedLang.toUpperCase();
            
            // Add active class to selected option
            languageOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Close dropdown
            languageDropdown.classList.remove('show');
            
            // Change language
            changeLanguage(selectedLang);
        });
    });
    
    // Set Portuguese as default active language
    const portugueseOption = document.querySelector('[data-lang="pt"]');
    if (portugueseOption) {
        portugueseOption.classList.add('active');
    }
    
    // Function to change language
    function changeLanguage(lang) {
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    // Special handling for elements with span tags
                    if (element.innerHTML.includes('<span>') && element.innerHTML.includes('</span>')) {
                        // Find the section-title span and update its content
                        const sectionTitleSpan = element.querySelector('.section-title');
                        if (sectionTitleSpan) {
                            sectionTitleSpan.textContent = translations[lang][key];
                        } else {
                            // Fallback to text node approach
                            const textNodes = getTextNodesIn(element);
                            if (textNodes.length >= 2) {
                                // First text node (before first span)
                                if (textNodes[0]) textNodes[0].nodeValue = '';
                                // Second text node (between spans)
                                if (textNodes[1]) textNodes[1].nodeValue = translations[lang][key];
                                // Third text node (after second span)
                                if (textNodes[2]) textNodes[2].nodeValue = '';
                            }
                        }
                    } else {
                        element.textContent = translations[lang][key];
                    }
                }
            }
        });
        
        // Update page title
        if (translations[lang] && translations[lang]['fullstack_developer']) {
            document.title = 'Samuel Barbosa | ' + translations[lang]['fullstack_developer'] + ' Portfolio';
        }
        
        // Store selected language in localStorage
        localStorage.setItem('selectedLanguage', lang);
        
        // If a technology is currently selected, update its description
        const currentTech = document.getElementById('prof-name').textContent;
        if (currentTech && currentTech !== 'Descrição' && currentTech !== 'Description' && currentTech !== 'Descripción') {
            // Re-trigger the technology description to update language
            window.mostrarDescricao(currentTech);
        }
        
        console.log(`Language changed to: ${lang}`);
    }
    
    // Helper function to get text nodes within an element
    function getTextNodesIn(el) {
        const textNodes = [];
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }
        return textNodes;
    }
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'pt';
    if (savedLanguage !== 'pt') {
        changeLanguage(savedLanguage);
        // Update UI to reflect saved language
        languageText.textContent = savedLanguage.toUpperCase();
        languageOptions.forEach(opt => opt.classList.remove('active'));
        const savedOption = document.querySelector(`[data-lang="${savedLanguage}"]`);
        if (savedOption) {
            savedOption.classList.add('active');
        }
    }
});