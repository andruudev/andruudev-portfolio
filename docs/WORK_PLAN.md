# Plan de continuidad

Actualizado el 11 de noviembre de 2026. No hay una nueva tarea de implementación autorizada pendiente: este plan conserva el estado y propone opciones para futuras solicitudes. Las prioridades de una próxima sesión las define el usuario.

## Retomar sin esta conversación

1. Abrir la misma carpeta del proyecto.
2. Leer `AGENTS.md` y `docs/PROJECT_CONTEXT.md`.
3. Revisar `git status --short` y los archivos relevantes a la nueva tarea.
4. Conservar las decisiones acordadas: sin título grande visible, About me anterior, inglés inicial y selector bilingüe explícito.
5. Trabajar sobre el pedido nuevo y elegir verificaciones apropiadas. Para carga de contenido/i18n, usar `npm run verify` y comprobar el flujo afectado en navegador.
6. Actualizar el contexto cuando cambie una decisión de producto o arquitectura.

## Trabajo completado

- [x] Revisar la arquitectura original del portafolio.
- [x] Unificar el enfoque editorial en Cloud & DevOps.
- [x] Crear cinco casos conceptuales con arquitectura y contenido EN/ES.
- [x] Mantener ocho artículos y sus versiones inglesas.
- [x] Incorporar estudios actuales, Microsoft Student Ambassador y los tres eventos indicados por el usuario.
- [x] Cambiar “Linktree” por Launchpad y separar las frases del footer.
- [x] Inglés inicial y preferencia explícita EN/ES persistente.
- [x] Traducir navegación, fechas, contenido, metadatos, diagramas y formulario.
- [x] Corregir la carga que producía “Missing English article” y añadir pruebas de regresión.
- [x] Servir fuentes/librerías localmente, optimizar imágenes y limpiar ciclos de animación al navegar.
- [x] Quitar el título grande y restaurar el About me que el usuario pidió conservar.

## Posibles próximas tareas, sin ejecutar automáticamente

### A. Revisión editorial antes de una publicación

- Confirmar experiencia laboral y certificaciones heredadas; distinguirlas de datos confirmados en la conversación.
- Revisar coherencia técnica entre las dos versiones de Kiro; verificar ejemplos con documentación oficial si se modifican.
- Revisar el PDF del CV y su coherencia con el perfil actual.
- Mantener los casos conceptuales identificados como tales hasta que exista evidencia real.

Resultado esperado: perfil consistente, sin credenciales o métricas atribuidas por suposición.

### B. Convertir un laboratorio en un proyecto demostrable

- Elegir junto al usuario uno de los cinco casos.
- Definir un alcance acotado, repositorio, requisitos y validación reproducible.
- Añadir evidencia real y enlaces solo cuando existan.
- Medir resultados antes de incorporarlos al portafolio.

La descripción actual de una arquitectura no autoriza desplegar recursos AWS ni asumir costos.

### C. Auditoría visual y de accesibilidad

- Revisar anchos de 320, 390, 820 y escritorio amplio, con especial atención al selector y al footer.
- Revisar teclado, foco, contraste y preferencia de movimiento reducido.
- Revisar documentos largos y cambios de idioma a mitad de lectura.
- Ejecutar Lighthouse si se solicita una medición; registrar resultados reales y condiciones de la prueba.

### D. Preparar una entrega/versionado

- Revisar el diff completo y los archivos nuevos; muchos cambios aún pueden estar sin commit.
- Ejecutar `npm run verify` y comprobar las páginas afectadas.
- Confirmar qué hosting utiliza realmente el usuario antes de cambiar configuración de publicación.
- Comprobar entrega de Formspree solo dentro de una prueba de envío autorizada.
- Hacer commit/push/deploy según el pedido concreto del usuario, no como parte automática de leer este plan.

## Prompt para la próxima sesión

```text
Continúa este portafolio desde su estado actual. Lee AGENTS.md,
docs/PROJECT_CONTEXT.md y docs/WORK_PLAN.md antes de modificarlo.
Conserva el About me aceptado y no vuelvas a añadir un título grande.
El inglés debe ser inicial y el español una elección explícita.
Mi siguiente tarea es: [describe aquí el cambio que quieres].
```
