// Technology descriptions in multiple languages
const descricoes = {
    'pt': {
        "Golang": "Go é uma linguagem de programação de código aberto que facilita a criação de softwares simples, confiáveis e eficientes. É conhecida por sua compilação rápida, coleta de lixo e suporte a concorrência.",
        "JavaScript": "JavaScript é uma linguagem de programação versátil que roda em navegadores e em servidores com Node.js. É essencial para o desenvolvimento web moderno e possibilita a criação de sites interativos.",
        "TypeScript": "TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala. Ela adiciona tipos estáticos para ajudar a detectar erros mais cedo.",
        "React Native": "React Native é um framework para construir aplicativos móveis nativos usando React. Ele permite que desenvolvedores criem aplicações móveis multiplataforma com uma única base de código.",
        "Node.js": "Node.js é um runtime JavaScript construído sobre o motor JavaScript V8 do Chrome. Ele permite a execução de scripts no lado do servidor e possibilita a criação de aplicações de rede escaláveis.",
        "Python": "Python é uma linguagem de programação de alto nível e interpretada, conhecida por sua simplicidade e legibilidade. É amplamente utilizada em desenvolvimento web, ciência de dados e automação.",
        "MySQL": "MySQL é um sistema gerenciador de banco de dados relacional de código aberto muito popular. É amplamente usado em aplicações web e alimenta muitos sites conhecidos.",
        "PostgreSQL": "PostgreSQL é um poderoso sistema de banco de dados objeto-relacional de código aberto. É conhecido por sua confiabilidade, robustez de recursos e desempenho.",
        "Docker": "Docker é uma plataforma para desenvolver, empacotar e executar aplicações em contêineres. Ele simplifica o deploy e garante consistência entre diferentes ambientes.",
        "Linux": "Linux é uma família de sistemas operacionais de código aberto do tipo Unix. É amplamente utilizado em servidores, computação em nuvem e ambientes de desenvolvimento.",
        "Git": "Git é um sistema de controle de versão distribuído para rastrear mudanças em código-fonte durante o desenvolvimento de software. Ele facilita a colaboração entre desenvolvedores."
    },
    'en': {
        "Golang": "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software. It's known for its fast compilation, garbage collection, and concurrency support.",
        "JavaScript": "JavaScript is a versatile programming language that runs in browsers and on servers with Node.js. It's essential for modern web development and enables interactive websites.",
        "TypeScript": "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds static types to catch errors early.",
        "React Native": "React Native is a framework for building native mobile apps using React. It allows developers to create cross-platform mobile applications with a single codebase.",
        "Node.js": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It enables server-side scripting and allows developers to build scalable network applications.",
        "Python": "Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used in web development, data science, and automation.",
        "MySQL": "MySQL is a popular open-source relational database management system. It's widely used for web applications and powers many popular websites.",
        "PostgreSQL": "PostgreSQL is a powerful, open-source object-relational database system. It's known for its reliability, feature robustness, and performance.",
        "Docker": "Docker is a platform for developing, shipping, and running applications in containers. It simplifies deployment and ensures consistency across environments.",
        "Linux": "Linux is a family of open-source Unix-like operating systems. It's widely used in servers, cloud computing, and development environments.",
        "Git": "Git is a distributed version control system for tracking changes in source code during software development. It facilitates collaboration among developers."
    },
    'es': {
        "Golang": "Go es un lenguaje de programación de código abierto que facilita la creación de software simple, confiable y eficiente. Es conocido por su compilación rápida, recolección de basura y soporte de concurrencia.",
        "JavaScript": "JavaScript es un lenguaje de programación versátil que se ejecuta en navegadores y en servidores con Node.js. Es esencial para el desarrollo web moderno y permite sitios web interactivos.",
        "TypeScript": "TypeScript es un lenguaje de programación fuertemente tipado que se basa en JavaScript, brindándole mejores herramientas a cualquier escala. Agrega tipos estáticos para detectar errores temprano.",
        "React Native": "React Native es un marco para construir aplicaciones móviles nativas usando React. Permite a los desarrolladores crear aplicaciones móviles multiplataforma con una sola base de código.",
        "Node.js": "Node.js es un entorno de ejecución de JavaScript construido sobre el motor JavaScript V8 de Chrome. Permite el scripting del lado del servidor y permite a los desarrolladores construir aplicaciones de red escalables.",
        "Python": "Python es un lenguaje de programação de alto nivel e interpretado conocido por su simplicidad y legibilidad. Se utiliza ampliamente en desarrollo web, ciencia de datos y automatización.",
        "MySQL": "MySQL es un popular sistema de gestión de bases de datos relacionales de código abierto. Se utiliza ampliamente para aplicaciones web y alimenta muchos sitios web populares.",
        "PostgreSQL": "PostgreSQL es un potente sistema de base de datos objeto-relacional de código abierto. Es conocido por su confiabilidad, robustez de características y rendimiento.",
        "Docker": "Docker es una plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores. Simplifica el despliegue y garantiza la consistencia entre entornos.",
        "Linux": "Linux es una familia de sistemas operativos de código abierto tipo Unix. Se utiliza ampliamente en servidores, computación en la nube y entornos de desarrollo.",
        "Git": "Git es un sistema de control de versiones distribuido para rastrear cambios en el código fuente durante el desarrollo de software. Facilita la colaboración entre desarrolladores."
    }
}

function mostrarDescricao(tec) {
    // Get the current language from localStorage or default to 'pt'
    const currentLang = localStorage.getItem('selectedLanguage') || 'pt';
    
    // Set the technology name
    document.getElementById("prof-name").innerHTML = tec;
    
    // Set the description based on the current language
    if (descricoes[currentLang] && descricoes[currentLang][tec]) {
        document.getElementById("descricao").innerHTML = descricoes[currentLang][tec];
    } else {
        // Fallback to Portuguese if translation not available
        document.getElementById("descricao").innerHTML = descricoes['pt'][tec] || "Descrição não disponível.";
    }
    
    // Update language selector to reflect current language
    updateLanguageSelector(currentLang);
}

// Function to update language selector UI
function updateLanguageSelector(lang) {
    const languageText = document.querySelector('.language-text');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (languageText) {
        languageText.textContent = lang.toUpperCase();
    }
    
    // Update active class on language options
    languageOptions.forEach(opt => opt.classList.remove('active'));
    const selectedOption = document.querySelector(`[data-lang="${lang}"]`);
    if (selectedOption) {
        selectedOption.classList.add('active');
    }
}