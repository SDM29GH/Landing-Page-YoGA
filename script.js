// 1️⃣ Seleccionamos los elementos del DOM
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('.icon');
const text = themeToggle.querySelector('.text');

// 2️⃣ Función para cambiar el tema
function toggleTheme() {
    // Añadimos o quitamos la clase 'dark' del elemento raíz
    document.documentElement.classList.toggle('dark');
    
    // Verificamos si el modo oscuro está activo
    const isDark = document.documentElement.classList.contains('dark');
    
    // Cambiamos el icono y texto del botón
    if (isDark) {
        icon.textContent = '☀️';
        text.textContent = 'Modo Claro';
    } else {
        icon.textContent = '🌙';
        text.textContent = 'Modo Oscuro';
    }
    
    // 3️⃣ Guardamos la preferencia en localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// 4️⃣ Función para cargar el tema guardado
function loadTheme() {
    // Obtenemos el tema guardado (si existe)
    const savedTheme = localStorage.getItem('theme');
    
    // Si hay un tema guardado y es 'dark', lo aplicamos
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        icon.textContent = '☀️';
        text.textContent = 'Modo Claro';
    }
}

// 5️⃣ Event listener para el botón
themeToggle.addEventListener('click', toggleTheme);

// 6️⃣ Cargamos el tema cuando se carga la página
loadTheme();