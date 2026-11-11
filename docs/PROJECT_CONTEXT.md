# Contexto del portafolio andruudev

Última actualización: 11 de noviembre de 2026. Este documento conserva las decisiones relevantes de una conversación que el usuario planea eliminar. No es una transcripción completa. El código y nuevas instrucciones del usuario prevalecen si el estado cambia.

## 1. Objetivo y forma de colaborar

El usuario quiere un portafolio personal enfocado en **Cloud & DevOps Engineer**, con identidad propia, claridad y una buena experiencia EN/ES. Prefiere que se ejecuten sus pedidos directamente. Rechazó una frase genérica de marketing y pidió que un cambio puntual no alterara su biografía.

Conservar la estética minimalista del proyecto existente. No iniciar un rediseño completo, introducir slogans o reescribir información personal por iniciativa propia cuando el pedido es acotado.

## 2. Última decisión: sin título grande, biografía anterior restaurada

La frase visible eliminada fue:

- EN: “Infrastructure with intention. Delivery with confidence.”
- ES: “Infraestructura con intención. Despliegues con confianza.”

Se intentó reemplazarla por un titular grande con el cargo, pero el usuario aclaró que quería **quitar el título grande**, no sustituirlo. Después pidió restaurar el About me anterior, porque tampoco había solicitado cambiarlo.

Estado deseado actual:

- El inicio de `/portfolio` empieza por la etiqueta pequeña “About me” y el párrafo.
- Existe un `h1` con clase `sr-only` para lectores de pantalla. No debe convertirse en un titular visible por un supuesto arreglo de accesibilidad.
- Los pequeños tags AWS / Infrastructure as Code / GitOps permanecen.

### Texto aceptado del About me

EN:

> I’m a Cloud & DevOps Engineer focused on AWS, Infrastructure as Code and reliable software delivery. I lead the community at awspuce.com and bring a creative perspective through velitty.com.

ES:

> Soy Cloud & DevOps Engineer, enfocado en AWS, Infraestructura como Código y entrega confiable de software. Lidero la comunidad en awspuce.com y aporto una mirada creativa desde velitty.com.

Fuentes: `src/pages/portfolio/index.astro` y la clave `profile_text` en `src/i18n/translations.js`. Mantener el fallback HTML y el diccionario alineados.

## 3. Información personal y grado de confirmación

### Datos expresamente proporcionados por el usuario

- Profesión: Cloud & DevOps Engineer.
- Estudia actualmente Desarrollo de Software en la Pontificia Universidad Católica del Ecuador (PUCE).
- Estudia actualmente Marketing en el Instituto Universitario ISMAC.
- Fue staff de GDG DevFest 2026.
- Fue staff de AWS Community Day Ecuador 2026.
- Dio una charla sobre AWS para NASA Space Apps Challenge. No indicó el año de esa charla; no inventarlo.
- Es Microsoft Student Ambassador.

### Datos presentes en el texto aceptado y en la identidad del sitio

- Nombre: Jeyson Andrés Mueses; marca/usuario: andruudev; Ecuador.
- Liderazgo en awspuce.com y relación creativa con velitty.com, conservados en la biografía que el usuario pidió restaurar.
- Enlaces sociales, calendario y PDF de CV ya existían. No se validó externamente cada destino ni el contenido del CV.

### Contenido provisional o pendiente de confirmar

- El usuario autorizó explícitamente **proyectos y stack ficticios por el momento**. Los casos actuales están identificados como diseños conceptuales/laboratorios.
- No se construyeron ni desplegaron las infraestructuras AWS descritas. Los diagramas y planes de validación son material editorial del portafolio.
- No hay repositorios o demos reales asociados a los cinco casos. No añadir enlaces inventados.
- Las experiencias laborales (Corporación Favorita, Banco Pichincha, freelance) y las certificaciones enumeradas venían del código original. No se confirmaron en esta conversación. Revisarlas con el usuario antes de tratarlas como credenciales verificadas o publicar nuevos claims.
- No inventar fechas de estudios, títulos obtenidos, cantidades de asistentes, métricas comerciales ni resultados medidos.

Fuente compartida de educación, liderazgo, eventos y stack: `src/data/profile.ts`.

## 4. Estructura y contenido actuales

- Astro 6.3.2, TypeScript, sitio estático. Versiones declaradas en `package.json`; revisar el lockfile antes de actualizarlas.
- `/`: página de enlaces personales; nombre de navegación **Launchpad**.
- `/portfolio`: inicio del portafolio.
- Detalles: about, skills, experience, education, certifications, leadership, events, now.
- Blog: `/portfolio/blog` y `/portfolio/blog/[slug]`.
- Proyectos: `/portfolio/project/[slug]`.
- Dominio canónico configurado: `https://www.andruudev.com`.

### Cinco casos Cloud & DevOps

1. `aws-landing-zone`: AWS, Terraform y GitHub Actions; proyecto destacado.
2. `eks-gitops-platform`: Kubernetes, Argo CD y Helm.
3. `serverless-event-platform`: Lambda, EventBridge y DynamoDB.
4. `observability-control-plane`: OpenTelemetry, Prometheus y Grafana.
5. `secure-delivery-pipeline`: GitHub Actions, OIDC y Trivy.

Incluyen contexto, arquitectura, decisiones, concesiones, plan de validación y próxima iteración. Sus indicadores representan decisiones/objetivos del diseño, no mediciones reales.

Diagramas SVG EN/ES: `public/projects/<slug>.svg` y `<slug>.es.svg`. Los previews sociales usan el PNG compartido cuando el diagrama es SVG.

### Ocho artículos

- `github-actions-aws-oidc`
- `gitops-delivery-contract`
- `guia-aws-desde-cero`
- `kubernetes-probes-rollouts`
- `opentelemetry-observabilidad-util`
- `terraform-state-s3-locking`
- `kiro-ide-conceptos-avanzados`
- `kiro-ide-guia-basica`

Los primeros cambios añadieron notas Cloud/DevOps y reemplazaron el antiguo artículo de Power BI. Se usaron referencias oficiales para los artículos técnicos nuevos. La guía AWS se revisó para quitar la promesa de “100 % gratuito” y usar S3 privado + CloudFront/OAC con control de costos. Conserva su fecha original y registra `updated`.

Las versiones inglesas de Kiro se adaptaron durante la traducción; conviene revisar la equivalencia técnica con las versiones españolas y contrastar ejemplos/comandos antes de ampliar esos artículos. No asumir que todos los ejemplos originales fueron ejecutados o validados.

### Redirecciones que deben conservarse

En `astro.config.mjs`:

- `/portfolio/blog/creative-development-gsap` → `/portfolio/blog/gitops-delivery-contract`
- `/portfolio/project/sales-intelligence` → `/portfolio/project/aws-landing-zone`
- `/portfolio/project/retail-analytics` → `/portfolio/project/eks-gitops-platform`

## 5. Traducción y experiencia de usuario

- El HTML inicial se entrega en inglés, incluidos los artículos y sus listados.
- No se usa el idioma del navegador para elegir español.
- Una elección explícita se guarda en `portfolio.language`. La antigua clave `lang` se ignora.
- Inglés activo → botón “Español”; español activo → botón “English”. El nombre indica la acción.
- La elección se conserva al navegar/recargar. Si el almacenamiento falla, sigue funcionando en memoria durante la visita.
- Se traducen los ocho artículos, cinco proyectos, resúmenes, categorías, fechas, metadatos, descripciones de imágenes, diagramas, navegación y mensajes del formulario.
- Se conservan los nombres oficiales de tecnologías, personas, instituciones y credenciales.
- `Copy.astro`: texto EN/ES; `LocalizedDate.astro`: fechas; `data-i18n-aria`: etiquetas accesibles.
- `src/i18n/page-metadata.ts`: títulos/descripciones estáticos; páginas de contenido pasan `titleEs` y `descriptionEs`.
- El selector conserva el foco y anuncia el cambio a lectores de pantalla.
- Los errores del formulario son inline, se traducen y se vinculan a sus campos. La validación JS activa `noValidate`; se mantiene `required` en los campos.

## 6. Error histórico importante: “Missing English article”

El usuario encontró ese error tras la implementación bilingüe. Los ocho archivos ingleses existían y una compilación nueva funcionaba, pero los listados y detalles lanzaban una excepción si una consulta independiente a la colección de traducciones no devolvía el registro. No se estableció con certeza qué estado concreto tenía el servidor del usuario; se eliminó esa dependencia frágil.

Arreglo actual:

- `src/data/content.ts` importa los módulos Markdown mediante `import.meta.glob(..., { eager: true })` y expone `getBlogPosts()` / `getProjects()`.
- `src/data/pair-content.js` empareja cada fuente y traducción por nombre/ID de archivo, incluyendo sus componentes renderizables.
- Las páginas y `BlogList.astro` consumen esos registros; no realizan `getEntry()` independientes para las traducciones.
- Una traducción temporalmente ausente utiliza el contenido original con su idioma real; el detalle del artículo muestra una nota de disponibilidad. No derriba todo el listado.
- `npm run verify` sigue exigiendo ambas versiones para el estado de producción.
- Se probó en `astro dev`: retirar temporalmente una traducción, abrir artículo/listado sin error y restaurarla. El inglés reapareció sin reiniciar. Todos los archivos se restauraron; no deben quedar `.regression-backup`.

No resolver una regresión similar solo ocultando el error o pidiendo limpiar caché. Revisar IDs, archivos, imports y comportamiento en desarrollo.

## 7. UI, efectos y recursos

- Temas claro/oscuro, Geist Sans/Mono y estética minimalista.
- El footer separa la frase “Built with care in Ecuador…” de la firma “By people fifirisnais, para la people fifirisnais.”.
- El panel operativo es una simulación identificada, no un monitor real de Kubernetes.
- GSAP/ScrollTrigger 3.12.5, Lenis 1.1.2 y Lucide 1.72.0 están en `public/vendor/`, con fuentes/licencias documentadas.
- Fuentes locales en `public/fonts/`; conservar licencia y procedencia.
- Ruido estático de 128 × 128; se retiró el trabajo de generar ruido del tamaño de la pantalla en cada frame.
- Preloader breve, de aproximadamente medio segundo. No restaurar la espera decorativa de varios segundos.
- Imágenes de blog importadas desde `src/assets/blog/`: Astro genera WebP (~140 KB frente a ~880 KB originales). Los originales públicos se conservaron por compatibilidad.
- Scripts separados en `portfolio.js`, `preferences.js` y `contact.js`.
- Estilos separados en `global.css`, `navigation.css` y `portfolio.css`.
- Al importar CSS antes de reglas globales, cuidar la especificidad: ya hubo un ajuste para que el selector no se superpusiera al header entre 601 y 1100 px.
- El cursor al pasar por controles es un anillo transparente para no tapar sus etiquetas.

## 8. Pruebas, ejecución y límites de verificación

Comandos reales:

```sh
npm run dev
npm run preview
npm run test:language
npm run test:content
npm run check
npm run build
npm run verify
```

`verify` ejecuta siete pruebas de idioma, cuatro de emparejamiento de contenido, Astro Check, build y `scripts/verify-build.mjs`. Este último revisa HTML inglés inicial, un H1 por página real, enlaces/recursos internos, pares bilingües, claves de traducción y sitemap en robots.txt.

Checkpoint al cerrar esta documentación (11 de noviembre de 2026): `npm run verify` pasó con las 11 pruebas, Astro Check sin errores/advertencias/sugerencias, build correcto y 28 archivos HTML verificados (incluyen 404 y redirecciones). Este checkpoint ya incluye el título grande quitado y el About me restaurado. Se comprobó además que los dos párrafos aceptados coincidan exactamente con el diccionario y que los enlaces de los documentos existan. Volver a verificar al retomar cambios funcionales; este registro no garantiza cambios posteriores.

Hubo pruebas de navegador de inglés inicial, español, persistencia al recargar, foco, móvil, escritorio estrecho, artículos, proyectos y validación de formulario. Un error del toolbar de desarrollo apareció al optimizar dependencias por primera vez; una pestaña nueva de proyecto no registró errores. No se documentó un fallo de producción causado por ese toolbar.

No se envió un mensaje real por Formspree. Form ID actual: `mgodjnpp`. No se validó la recepción de correos, ni se ejecutó una auditoría Lighthouse, ni se publicaron recursos cloud.

## 9. Git, despliegue y conservación

La conversación dejó numerosos archivos modificados y nuevos sin rastrear. No se hicieron commit, push ni despliegue. Revisar `git status` antes de trabajar y no descartar cambios del usuario.

`.astro/` y `dist/` son generados. Parte de `.astro/` ya estaba rastreada y modificada; no confundir su estado con contenido fuente ni limpiarlo indiscriminadamente.

Existen configuraciones para Vercel, Cloudflare y GitHub Pages. No se confirmó cuál es el destino activo. `npm run deploy` publica con gh-pages; no usarlo como simple comprobación local.

Los archivos de contexto forman parte del proyecto local. Para conservarlos en otra máquina o un clon nuevo, deben incluirse en la copia o commit del proyecto. Los screenshots temporales en `/private/tmp` no son la memoria del proyecto.
