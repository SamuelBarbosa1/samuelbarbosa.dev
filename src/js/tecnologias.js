
descricoes = {
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
}




function mostrarDescricao(tec) {
    document.getElementById("prof-name").innerHTML = tec;
    document.getElementById("descricao").innerHTML = descricoes[tec];
}

