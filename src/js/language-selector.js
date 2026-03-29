// Language translations
const translations = {
    'pt': {
        // Nav
        'nav_sobre': 'Sobre', 'nav_habilidades': 'Habilidades',
        'nav_projetos': 'Projetos', 'nav_experiencia': 'Experiência', 'nav_contato': 'Contato',
        // Hero
        'hero_greeting': 'Olá, eu sou',
        'available': 'Disponível para oportunidades',
        'hero_name': 'Samuel Barbosa',
        'hero_sub': 'Full-stack Developer & Especialista em Suporte TI. Focado em soluções modernas, performance e qualidade.',
        'hero_projects': 'Ver Projetos',
        'download_cv': 'Download CV',
        // Sobre
        'about_tag': 'PROFISSIONAL EM CRESCIMENTO CONTÍNUO',
        'about_me': 'O Que Eu Faço',
        'about_bio': 'Profissional de TI com experiência em suporte técnico e atendimento ao usuário. Experiência com ServiceNow, Active Directory e ambientes Windows/Linux. Estudante de Análise e Desenvolvimento de Sistemas, em busca de oportunidades em TI e desenvolvimento Full-stack.',
        'about_how': 'Como posso ajudar', 'about_work_style': 'Minha forma de trabalho',
        'about_h1': 'Suporte técnico ágil (ITSM/ServiceNow)',
        'about_h2': 'Desenvolvimento de aplicações web',
        'about_h3': 'Automação com scripts e DevOps',
        'about_s1': 'Foco em SLA e qualidade',
        'about_s2': 'Comunicação clara e objetiva',
        'about_s3': 'Aprendizado rápido e proativo',
        'download_full_cv': 'Download Completo CV',
        // Services
        'service_1_title': 'Suporte Técnico N1',
        'service_1_desc': 'Service Desk, gerenciamento de chamados, ITSM, Active Directory, Citrix VDI e diagnóstico de incidentes.',
        'service_2_title': 'Desenvolvimento Full-Stack',
        'service_2_desc': 'APIs REST em Go/Node.js, aplicações web com TypeScript, React Native e bancos de dados SQL.',
        'service_3_title': 'Infraestrutura & Linux',
        'service_3_desc': 'Ambientes Linux/Windows, Docker, Shell scripts, VPN, DNS e fundamentos de segurança da informação.',
        // Stack
        'technologies': 'Minha Stack',
        'description': 'Descrição',
        'select_technology': 'Selecione uma tecnologia acima para ver a descrição.',
        // Projects
        'projects': 'Projetos em Destaque',
        'more_on_github': 'Ver mais repositórios no GitHub',
        'proj_type_mobile': 'React Native App',
        'proj_type_shell': 'Shell Script',
        'proj_type_golang': 'Golang',
        'proj_type_react': 'React',
        'code_on_github': 'Código no GitHub',
        'proj_1_title': 'MeusGastos — App de Controle Financeiro',
        'proj_1_desc': 'Aplicativo mobile para controle de finanças pessoais desenvolvido em React Native com Expo. Registre e categorize gastos com uma interface intuitiva.',
        'proj_2_title': 'MiniFeed — Rede Social Mobile',
        'proj_2_desc': 'Aplicativo de mídia social com React Native e Expo. Usuários criam contas, publicam atualizações, curtem e comentam em uma interface simples e intuitiva.',
        'proj_3_title': 'Painel OSINT Completo',
        'proj_3_desc': 'Automação de reconhecimento e inteligência em segurança. Painel completo para OSINT em ambientes Linux.',
        'proj_4_title': 'FilmesAPI',
        'proj_4_desc': 'API REST para gerenciamento de filmes com Go no backend e Node.js/Express como intermediário para algumas rotas.',
        'proj_5_title': 'Script Atualização Linux',
        'proj_5_desc': 'Automatiza a atualização de sistemas Debian-based (Kali, Ubuntu). Inclui limpeza de cache e remoção de pacotes desnecessários.',
        'proj_6_title': 'ObsidianGym',
        'proj_6_desc': 'Site de academia exibindo estatísticas de academias, alunos, funcionários e planos disponíveis. Desenvolvido em React.',
        // Experience
        'experience_title': 'Experiência & Formação',
        'experiences': 'Experiências',
        'exp_1_role': 'Trainee TI',
        'exp_1_time': '01/2026 – presente',
        'exp_1_item_1': 'Suporte técnico ao sistema SICLUS (ERP)',
        'exp_1_item_2': 'Atendimento a módulos administrativos',
        'exp_1_item_3': 'Registro e resolução de chamados',
        'exp_1_item_4': 'Interface entre usuário e área técnica',
        'exp_2_role': 'Agente de Service Desk',
        'exp_2_item_1': 'Suporte N1 com ServiceNow / Active Directory',
        'exp_2_item_2': 'Citrix VDI, acesso remoto e diagnóstico',
        'exp_2_item_3': 'Incidentes em Windows e Linux',
        'exp_2_item_4': 'Cumprimento de SLA e qualidade',
        // Formation
        'formation_title': 'Formação',
        'edu_1_title': 'Desenvolvimento FullStack & Microsserviços',
        'edu_1_time': '2023 – Contínuo',
        'edu_1_item_1': 'JavaScript, TypeScript e React Native (Alura)',
        'edu_1_item_2': 'Linux, Cybersecurity, Cloud e DevOps (FIAP)',
        'edu_1_item_3': 'Fundamentos de Redes e CCNA (Cisco)',
        'edu_1_item_4': 'Desenvolvedor C# (SENAI)',
        'edu_1_item_5': 'Docker, Gestão de Infraestrutura e Microsserviços',
        'edu_2_title': 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        'edu_2_time': '2025 – 2027 (Previsto)',
        'edu_2_item_1': 'Engenharia de software e arquitetura de sistemas',
        'edu_2_item_2': 'Desenvolvimento web, mobile e banco de dados',
        'edu_2_item_3': 'Metodologias ágeis e boas práticas de código',
        // Certifications
        'certifications': 'Certificações',
        'cert_csharp': 'Desenvolvedor C#',
        'cert_cloud_on': 'Cloud Onboarding',
        'cert_arch_comp': 'Arquitetura Comp.',
        'cert_react_native': 'React Native',
        'cert_lang': 'Inglês - Francês',
        'cert_linux_fund': 'Linux Fund.',
        'cert_cyber': 'Cybersecurity',
        'cert_iso_27001': 'ISO/IEC 27001',
        'cert_iso_9001': 'ISO 9001',
        'cert_iso_20000': 'ISO/IEC 20000',
        'cert_infra': 'Gestão Infra TI',
        'cert_devops': 'DevOps & Agile',
        'cert_cloud_fund': 'Cloud Fundamentals',
        // Footer
        'footer_desc': 'Full-stack Developer & Especialista em Suporte TI',
        'footer_contact': 'Contato', 'footer_social': 'Redes Sociais',
        'footer_rights': 'Todos os direitos reservados.',
        // Misc
        'fullstack_developer': 'Full-stack Developer',
        'professional_summary': 'Resumo Profissional',
        'skills_expertise': 'Habilidades e Especialidades',
        'work_experience': 'Experiência Profissional',
    },
    'en': {
        'nav_sobre': 'About', 'nav_habilidades': 'Skills',
        'nav_projetos': 'Projects', 'nav_experiencia': 'Experience', 'nav_contato': 'Contact',
        'hero_greeting': "Hello, I'm",
        'available': 'Open to opportunities',
        'hero_name': 'Samuel Barbosa',
        'hero_sub': 'Full-stack Developer & IT Support Specialist. Focused on modern solutions, performance and quality.',
        'hero_projects': 'View Projects',
        'download_cv': 'Download CV',
        'about_tag': 'PROFESSIONAL IN CONTINUOUS GROWTH',
        'about_me': 'What I Do',
        'about_bio': 'IT professional with experience in technical support and user assistance. Experience with ServiceNow, Active Directory and Windows/Linux environments. Studying Systems Analysis and Development, seeking opportunities in IT and full-stack development.',
        'about_how': 'How I can help', 'about_work_style': 'My work style',
        'about_h1': 'Agile technical support (ITSM/ServiceNow)',
        'about_h2': 'Web application development',
        'about_h3': 'Automation with scripts and DevOps',
        'about_s1': 'Focus on SLA and quality',
        'about_s2': 'Clear and objective communication',
        'about_s3': 'Fast and proactive learner',
        'download_full_cv': 'Download Full CV',
        'service_1_title': 'Technical Support N1',
        'service_1_desc': 'Help Desk, ticket management, ITSM, Active Directory, Citrix VDI and incident diagnosis.',
        'service_2_title': 'Full-Stack Development',
        'service_2_desc': 'REST APIs in Go/Node.js, web apps with TypeScript, React Native and SQL databases.',
        'service_3_title': 'Infrastructure & Linux',
        'service_3_desc': 'Linux/Windows environments, Docker, Shell scripts, VPN, DNS and information security basics.',
        'technologies': 'My Stack',
        'description': 'Description',
        'select_technology': 'Select a technology above to see the description.',
        'projects': 'Featured Projects',
        'more_on_github': 'See more repositories on GitHub',
        'proj_type_mobile': 'React Native App',
        'proj_type_shell': 'Shell Script',
        'proj_type_golang': 'Golang',
        'proj_type_react': 'React',
        'code_on_github': 'Code on GitHub',
        'proj_1_title': 'MeusGastos — Financial Control App',
        'proj_1_desc': 'Mobile application for personal finance control developed in React Native with Expo. Register and categorize expenses with an intuitive interface.',
        'proj_2_title': 'MiniFeed — Mobile Social Network',
        'proj_2_desc': 'Social media application with React Native and Expo. Users create accounts, post updates, like and comment in a simple and intuitive interface.',
        'proj_3_title': 'Full OSINT Dashboard',
        'proj_3_desc': 'Security reconnaissance and intelligence automation. Full dashboard for OSINT in Linux environments.',
        'proj_4_title': 'MoviesAPI',
        'proj_4_desc': 'REST API for movie management with Go on the backend and Node.js/Express as an intermediary for some routes.',
        'proj_5_title': 'Linux Update Script',
        'proj_5_desc': 'Automates updates for Debian-based systems (Kali, Ubuntu). Includes cache clearing and removal of unnecessary packages.',
        'proj_6_title': 'ObsidianGym',
        'proj_6_desc': 'Gym website displaying statistics of gyms, students, employees, and available plans. Developed in React.',
        'experience_title': 'Experience & Education',
        'experiences': 'Experiences',
        'exp_1_role': 'IT Trainee',
        'exp_1_time': '01/2026 – present',
        'exp_1_item_1': 'Technical support for the SICLUS system (ERP)',
        'exp_1_item_2': 'Assistance for administrative modules',
        'exp_1_item_3': 'Logging and resolution of tickets',
        'exp_1_item_4': 'Interface between user and technical area',
        'exp_2_role': 'Service Desk Agent',
        'exp_2_item_1': 'L1 support with ServiceNow / Active Directory',
        'exp_2_item_2': 'Citrix VDI, remote access and diagnosis',
        'exp_2_item_3': 'Incidents in Windows and Linux',
        'exp_2_item_4': 'Compliance with SLA and quality',
        'formation_title': 'Education',
        'edu_1_title': 'FullStack Development & Microservices',
        'edu_1_time': '2023 – Continuous',
        'edu_1_item_1': 'JavaScript, TypeScript and React Native (Alura)',
        'edu_1_item_2': 'Linux, Cybersecurity, Cloud and DevOps (FIAP)',
        'edu_1_item_3': 'Networking Fundamentals and CCNA (Cisco)',
        'edu_1_item_4': 'C# Developer (SENAI)',
        'edu_1_item_5': 'Docker, IT Infrastructure Management and Microservices',
        'edu_2_title': 'Technologist in Systems Analysis and Development',
        'edu_2_time': '2025 – 2027 (Expected)',
        'edu_2_item_1': 'Software engineering and systems architecture',
        'edu_2_item_2': 'Web development, mobile and databases',
        'edu_2_item_3': 'Agile methodologies and code best practices',
        'certifications': 'Certifications',
        'cert_csharp': 'C# Developer',
        'cert_cloud_on': 'Cloud Onboarding',
        'cert_arch_comp': 'Comp. Architecture',
        'cert_react_native': 'React Native',
        'cert_lang': 'English - French',
        'cert_linux_fund': 'Linux Fund.',
        'cert_cyber': 'Cybersecurity',
        'cert_iso_27001': 'ISO/IEC 27001',
        'cert_iso_9001': 'ISO 9001',
        'cert_iso_20000': 'ISO/IEC 20000',
        'cert_infra': 'IT Infra Management',
        'cert_devops': 'DevOps & Agile',
        'cert_cloud_fund': 'Cloud Fundamentals',
        'footer_desc': 'Full-stack Developer & IT Support Specialist',
        'footer_contact': 'Contact', 'footer_social': 'Social Media',
        'footer_rights': 'All rights reserved.',
        'fullstack_developer': 'Full-stack Developer',
        'professional_summary': 'Professional Summary',
        'skills_expertise': 'Skills & Expertise',
        'work_experience': 'Work Experience',
    },
    'es': {
        'nav_sobre': 'Sobre', 'nav_habilidades': 'Habilidades',
        'nav_projetos': 'Proyectos', 'nav_experiencia': 'Experiencia', 'nav_contato': 'Contacto',
        'hero_greeting': 'Hola, soy',
        'available': 'Disponible para oportunidades',
        'hero_name': 'Samuel Barbosa',
        'hero_sub': 'Desarrollador Full-stack y Especialista en Soporte TI. Enfocado en soluciones modernas, rendimiento y calidad.',
        'hero_projects': 'Ver Proyectos',
        'download_cv': 'Descargar CV',
        'about_tag': 'PROFESIONAL EN CRECIMIENTO CONTINUO',
        'about_me': 'Qué Hago',
        'about_bio': 'Profesional de TI con experiencia en soporte técnico y atención al usuario. Experiencia con ServiceNow, Active Directory y entornos Windows/Linux. Estudiante de Análisis y Desarrollo de Sistemas, buscando oportunidades en TI y desarrollo full-stack.',
        'about_how': 'Cómo puedo ayudar', 'about_work_style': 'Mi forma de trabajo',
        'about_h1': 'Soporte técnico ágil (ITSM/ServiceNow)',
        'about_h2': 'Desarrollo de aplicaciones web',
        'about_h3': 'Automatización con scripts y DevOps',
        'about_s1': 'Enfoque en SLA y calidad',
        'about_s2': 'Comunicación clara y objetiva',
        'about_s3': 'Aprendizaje rápido y proactivo',
        'download_full_cv': 'Descargar CV Completo',
        'service_1_title': 'Soporte Técnico N1',
        'service_1_desc': 'Help Desk, gestión de tickets, ITSM, Active Directory, Citrix VDI y diagnóstico de incidentes.',
        'service_2_title': 'Desarrollo Full-Stack',
        'service_2_desc': 'APIs REST en Go/Node.js, apps web con TypeScript, React Native y bases de datos SQL.',
        'service_3_title': 'Infraestructura & Linux',
        'service_3_desc': 'Entornos Linux/Windows, Docker, scripts Shell, VPN, DNS y fundamentos de seguridad.',
        'technologies': 'Mi Stack',
        'description': 'Descripción',
        'select_technology': 'Seleccione una tecnología arriba para ver la descripción.',
        'projects': 'Proyectos Destacados',
        'more_on_github': 'Ver más repositorios en GitHub',
        'proj_type_mobile': 'App React Native',
        'proj_type_shell': 'Script Shell',
        'proj_type_golang': 'Golang',
        'proj_type_react': 'React',
        'code_on_github': 'Código en GitHub',
        'proj_1_title': 'MeusGastos — App de Control Financiero',
        'proj_1_desc': 'Aplicación móvil para el control de finanzas personales desarrollada en React Native con Expo. Registre y categorice gastos con una interfaz intuitiva.',
        'proj_2_title': 'MiniFeed — Red Social Móvil',
        'proj_2_desc': 'Aplicación de redes sociales con React Native y Expo. Los usuarios crean cuentas, publican actualizaciones, dan me gusta y comentan en una interfaz sencilla e intuitiva.',
        'proj_3_title': 'Panel OSINT Completo',
        'proj_3_desc': 'Automatización de reconocimiento e inteligencia en seguridad. Panel completo para OSINT en entornos Linux.',
        'proj_4_title': 'FilmesAPI',
        'proj_4_desc': 'API REST para gestión de películas con Go en el backend y Node.js/Express como intermediario para algunas rutas.',
        'proj_5_title': 'Script de Actualización Linux',
        'proj_5_desc': 'Automatiza las actualizaciones para sistemas basados en Debian (Kali, Ubuntu). Incluye limpieza de caché y eliminación de paquetes innecesarios.',
        'proj_6_title': 'ObsidianGym',
        'proj_6_desc': 'Sitio web de gimnasio que muestra estadísticas de gimnasios, estudiantes, empleados y planes disponibles. Desarrollado en React.',
        'experience_title': 'Experiencia & Formación',
        'experiences': 'Experiencias',
        'exp_1_role': 'Trainee de TI',
        'exp_1_time': '01/2026 – presente',
        'exp_1_item_1': 'Soporte técnico al sistema SICLUS (ERP)',
        'exp_1_item_2': 'Asistencia a módulos administrativos',
        'exp_1_item_3': 'Registro y resolución de tickets',
        'exp_1_item_4': 'Interfase entre el usuario e el área técnica',
        'exp_2_role': 'Agente de Service Desk',
        'exp_2_item_1': 'Soporte N1 con ServiceNow / Active Directory',
        'exp_2_item_2': 'Citrix VDI, acceso remoto y diagnóstico',
        'exp_2_item_3': 'Incidentes en Windows y Linux',
        'exp_2_item_4': 'Cumplimiento de SLA y calidad',
        'formation_title': 'Formación',
        'edu_1_title': 'Desarrollo FullStack y Microservicios',
        'edu_1_time': '2023 – Continuo',
        'edu_1_item_1': 'JavaScript, TypeScript y React Native (Alura)',
        'edu_1_item_2': 'Linux, Ciberseguridad, Cloud y DevOps (FIAP)',
        'edu_1_item_3': 'Fundamentos de Redes y CCNA (Cisco)',
        'edu_1_item_4': 'Desarrollador C# (SENAI)',
        'edu_1_item_5': 'Docker, Gestión de Infraestructura TI y Microservicios',
        'edu_2_title': 'Tecnólogo en Análisis y Desarrollo de Sistemas',
        'edu_2_time': '2025 – 2027 (Previsto)',
        'edu_2_item_1': 'Ingeniería de software y arquitectura de sistemas',
        'edu_2_item_2': 'Desarrollo web, móvil y bases de datos',
        'edu_2_item_3': 'Metodologías ágiles y mejores prácticas de código',
        'certifications': 'Certificaciones',
        'cert_csharp': 'Desarrollador C#',
        'cert_cloud_on': 'Cloud Onboarding',
        'cert_arch_comp': 'Arct. de Comp.',
        'cert_react_native': 'React Native',
        'cert_lang': 'Inglés - Francés',
        'cert_linux_fund': 'Fund. de Linux',
        'cert_cyber': 'Ciberseguridad',
        'cert_iso_27001': 'ISO/IEC 27001',
        'cert_iso_9001': 'ISO 9001',
        'cert_iso_20000': 'ISO/IEC 20000',
        'cert_infra': 'Gestión de Infra TI',
        'cert_devops': 'DevOps y Agile',
        'cert_cloud_fund': 'Fund. de Cloud',
        'footer_desc': 'Desarrollador Full-stack y Especialista en Soporte TI',
        'footer_contact': 'Contacto', 'footer_social': 'Redes Sociales',
        'footer_rights': 'Todos los derechos reservados.',
        'fullstack_developer': 'Desarrollador Full-stack',
        'professional_summary': 'Resumen Profesional',
        'skills_expertise': 'Habilidades y Experiencia',
        'work_experience': 'Experiencia Laboral',
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