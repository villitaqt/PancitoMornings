# 🥐 Pancito Mornings - Tu Despertar es para Disfrutarlo

¡Bienvenido al repositorio de Pancito Mornings! Este proyecto es más que una simple página web; es la materialización de una idea que me apasiona: hacer las mañanas de todos un poco más fáciles y deliciosas.

## ✨ La Idea

¿Te imaginas despertar con el aroma de pan recién horneado sin tener que salir de casa? ¿O recibir un desayuno completo justo a tiempo para empezar el día sin prisas? Esa es la promesa de **Pancito Mornings**.

Este proyecto nace de mi deseo de combinar tecnología y comodidad para resolver un problema cotidiano. La idea es simple: una aplicación que te conecta con las mejores panaderías locales para que puedas programar la entrega de pan fresco y desayunos completos directamente en tu puerta. Se trata de devolverle a la gente un poco de tiempo y alegría en sus mañanas.

## 🚀 Características Principales del Landing Page

- **Diseño Moderno y Atractivo:** Una interfaz limpia, intuitiva y completamente responsive, diseñada para que la experiencia del usuario sea excepcional desde el primer momento.
- **Visualmente Impactante:** Con un video de fondo en la sección principal y animaciones sutiles que guían al usuario a través de la página.
- **Enfocado en la Conversión:** Con llamadas a la acción claras y un diseño que comunica eficazmente la propuesta de valor.
- **Código de Calidad:** HTML semántico, CSS organizado con una metodología clara y JavaScript optimizado para un rendimiento excelente.

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Para una estructura semántica y accesible.
- **CSS3:** Con variables, Flexbox y Grid para un diseño moderno y mantenible.
- **JavaScript (ES6+):** Para la interactividad y las funcionalidades dinámicas como el lazy loading y el menú móvil.

## 💖 Mi Ilusión con este Proyecto

Este proyecto es muy especial para mí. Representa mi pasión por crear soluciones que tengan un impacto real y positivo en la vida de las personas. Cada línea de código ha sido escrita con entusiasmo y la visión de construir algo que no solo funcione bien, sino que también transmita calidez y confianza.

Espero que disfrutes explorando este landing page tanto como yo disfruté creándolo. ¡Gracias por tu interés!

---

*Hecho con ❤️ por un entusiasta del pan y la programación.*

# Pancito Mornings - Landing Page

Landing page moderna para Pancito Mornings, una app que conecta usuarios con panaderías locales para entrega de desayunos.

## 🚀 Características

- **Diseño Responsive**: Optimizado para todos los dispositivos
- **SCSS Modular**: Estructura organizada y mantenible
- **Animaciones Suaves**: Efectos visuales atractivos
- **Performance**: CSS optimizado y comprimido

## 📁 Estructura

```
Pancito_Morning/
├── index.html              # Página principal
├── main.css               # CSS compilado (generado automáticamente)
├── script.js              # JavaScript
├── scss/                  # Archivos SCSS fuente
│   ├── main.scss          # Archivo principal que importa todos los módulos
│   ├── _variables.scss    # Variables globales (colores, fuentes, etc.)
│   ├── _reset.scss        # Reset CSS y estilos base
│   ├── _utilities.scss    # Utilidades y helpers
│   ├── _buttons.scss      # Estilos de botones
│   ├── _modal.scss        # Estilos del modal
│   ├── _header.scss       # Navegación y header
│   ├── _footer.scss       # Footer
│   ├── _hero.scss         # Sección hero principal
│   ├── _problem-solution.scss # Sección de pasos/solución
│   ├── _cards.scss        # Estilos de tarjetas
│   ├── _benefits.scss     # Sección de beneficios
│   ├── _testimonials.scss # Sección de testimonios
│   ├── _app-visuals.scss  # Sección de visuales de la app
│   └── _mediaqueries.scss # Media queries responsive
└── README.md              # Este archivo
```

## 🛠️ Desarrollo

### Prerrequisitos

- [SASS](https://sass-lang.com/) instalado globalmente

### Compilación

Para compilar el SCSS a CSS:

```bash
# Compilación normal
sass scss/main.scss main.css

# Compilación comprimida (recomendado para producción)
sass scss/main.scss main.css --style compressed

# Compilación con watch (desarrollo)
sass scss/main.scss main.css --watch
```

### Estructura SCSS

El proyecto utiliza una arquitectura modular SCSS:

1. **Variables** (`_variables.scss`): Definición de colores, fuentes y valores reutilizables
2. **Reset** (`_reset.scss`): Normalización de estilos base
3. **Componentes** (`_buttons.scss`, `_modal.scss`): Componentes reutilizables
4. **Layout** (`_header.scss`, `_footer.scss`): Estructura principal
5. **Secciones** (`_hero.scss`, `_benefits.scss`, etc.): Estilos específicos de cada sección
6. **Media Queries** (`_mediaqueries.scss`): Responsive design

## 🎨 Variables SCSS

```scss
// Colores principales
$primary: #FF8C42;        // Naranja/Melocotón
$secondary: #FFFFFF;      // Blanco
$text-dark: #333;         // Texto oscuro
$text-light: #555;        // Texto claro
$accent-bg: #F8F9FA;      // Fondo de acento

// Tipografías
$font-heading: 'Poppins', sans-serif;
$font-body: 'Inter', sans-serif;

// Utilidades
$radius: 12px;            // Border radius estándar
$shadow: 0 6px 20px rgba(255, 140, 66, 0.08); // Sombra estándar
```

## 📱 Responsive Design

El proyecto incluye breakpoints optimizados:

- **Desktop**: 1200px+
- **Tablet**: 992px - 1199px
- **Mobile**: 768px - 991px
- **Small Mobile**: 480px - 767px

## 🚀 Optimizaciones Implementadas

### ✅ Completado

- [x] Eliminación de archivos CSS duplicados
- [x] Estructura SCSS modular y organizada
- [x] Compilación optimizada con SASS
- [x] Variables CSS y SCSS centralizadas
- [x] Media queries organizadas
- [x] Estilos de accesibilidad
- [x] Animaciones optimizadas
- [x] Lazy loading para imágenes

### 🔧 Mantenimiento

Para mantener el proyecto:

1. **Modificar estilos**: Edita los archivos SCSS correspondientes
2. **Agregar nuevas secciones**: Crea un nuevo archivo `_seccion.scss` e impórtalo en `main.scss`
3. **Actualizar variables**: Modifica `_variables.scss` para cambios globales
4. **Compilar**: Ejecuta `sass scss/main.scss main.css --style compressed`

## 📄 Licencia

Este proyecto es parte de Pancito Mornings.

---

**Nota**: El archivo `main.css` se genera automáticamente desde los archivos SCSS. No edites directamente este archivo, ya que se sobrescribirá en la próxima compilación.
