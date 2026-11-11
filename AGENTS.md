# andruudev portfolio — instrucciones del proyecto

## Contexto al retomar

- Este repositorio es el portafolio de Jeyson Andrés Mueses / andruudev, Cloud & DevOps Engineer en Ecuador.
- Al retomar una conversación sin historial, leer [docs/PROJECT_CONTEXT.md](docs/PROJECT_CONTEXT.md). Para tareas futuras propuestas, consultar [docs/WORK_PLAN.md](docs/WORK_PLAN.md). La referencia operativa está en [README.md](README.md).
- Las instrucciones nuevas del usuario tienen prioridad sobre las decisiones históricas documentadas aquí.
- Conversar con el usuario en español. Ejecutar los cambios solicitados, sin limitarse a sugerirlos. Mantener los ajustes puntuales dentro de su alcance.

## Decisiones de producto que deben conservarse

- Mantener la estética minimalista, tipografía Geist y temas claro/oscuro. Evitar titulares genéricos y contenido de relleno.
- **No volver a añadir un título grande al inicio de `/portfolio`.** Se eliminó por petición explícita. El `h1` actual con clase `sr-only` cumple una función de accesibilidad.
- **Conservar el “About me” actual en EN/ES** salvo que el usuario pida cambiarlo. Su texto exacto está documentado en `docs/PROJECT_CONTEXT.md` y vive en `profile_text` de `src/i18n/translations.js`.
- Inglés inicial, sin detección automática del idioma del navegador. Solo una elección explícita guarda la preferencia en `portfolio.language`. El botón ofrece “Español” o “English”, indicando el idioma al que cambiará.
- Traducir contenido y etiquetas importantes al modificar la UI. Conservar nombres oficiales de tecnologías y credenciales.
- El enlace de vuelta a `/` se llama “Launchpad · All links” / “Launchpad · Todos los enlaces”, no “Linktree”.
- Mantener la firma “By people fifirisnais, para la people fifirisnais.” separada de la frase de origen del footer.
- Los cinco proyectos y el stack de laboratorio son conceptuales, autorizados como ficticios. No convertir objetivos de diseño en resultados de producción ni inventar enlaces a repositorios o demos.
- Educación, eventos y liderazgo comparten `src/data/profile.ts`; evitar listas divergentes entre inicio y detalle.

## Arquitectura y prevención de regresiones

- Astro estático + TypeScript + npm. La configuración de Vite pertenece a `astro.config.mjs`; no restaurar el antiguo `vite.config.js` con base de GitHub Pages.
- Usar `getBlogPosts()` / `getProjects()` de `src/data/content.ts` para las páginas bilingües. El emparejamiento de módulos Markdown vive en `src/data/pair-content.js`.
- **No reintroducir consultas independientes `getEntry()` para unir las traducciones actuales ni excepciones “Missing English article”.** Esa implementación rompió la página en desarrollo. Los módulos se emparejan por ID de archivo y toleran una traducción ausente temporalmente; la verificación de producción exige ambas versiones.
- Blog: originales ES en `src/content/blog/`; equivalentes EN con el mismo nombre en `src/content/blog-translations/`.
- Proyectos: originales EN en `src/content/projects/`; equivalentes ES en `src/content/project-translations/`.
- UI: `Copy.astro`, `translations.js`, `LocalizedDate.astro`, `data-i18n-aria` y los metadatos bilingües existentes. Evitar reemplazar contenido de enlaces de una forma que elimine sus iconos.
- Mantener la limpieza de timers, listeners, GSAP y Lenis en las transiciones de Astro. No iniciar un RAF nuevo sin cancelar el anterior.
- `.astro/` y `dist/` son salidas generadas, no fuentes editoriales. El repositorio ya tenía cambios y archivos generados rastreados: no descartar cambios ajenos ni asumir un árbol Git limpio.

## Validación y entrega

- `npm run dev`: desarrollo; `npm run preview`: inspeccionar `dist/` después del build.
- Para cambios de contenido bilingüe, carga o comportamiento: `npm run verify` (7 pruebas de idioma + 4 de contenido, Astro Check, build y comprobación de HTML/enlaces/recursos).
- Verificar en navegador los flujos afectados cuando corresponda. Para errores de desarrollo/HMR, probar también `astro dev`, no solo el build estático.
- Las pruebas del formulario deben evitar mensajes reales a Formspree. La entrega de correo no está comprobada.
- No afirmar publicación, despliegue, benchmark ni resultados de pruebas que no se hayan realizado. Este historial dejó cambios locales; no realizó commit/push/deploy.
- Actualizar el contexto si cambian decisiones importantes; mantener estas instrucciones breves.
