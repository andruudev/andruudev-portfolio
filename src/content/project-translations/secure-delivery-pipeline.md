---
{
  "title": "Pipeline de entrega segura"
}
---

## El escenario

Un equipo ficticio comparte una clave permanente de AWS entre jobs de construcción y despliegue. Las releases usan tags mutables, por lo que es difícil establecer qué artefacto está ejecutándose.

## Arquitectura

El flujo propuesto prueba el servicio, revisa código y configuración del contenedor, construye una imagen y registra su digest. Un entorno protegido controla el despliegue. El job de entrega intercambia un token OIDC de GitHub por una sesión temporal de AWS acotada al entorno destino.

## Decisiones técnicas

Los jobs de construcción y despliegue tienen permisos distintos. Las actions deben fijarse a revisiones evaluadas. Los hallazgos requieren criterios de triage, un responsable y caducidad de excepciones; un análisis en verde no demuestra seguridad por sí solo.

## Plan de validación

Comprobar que una rama no autorizada no pueda asumir el rol de despliegue. Introducir una comprobación fallida y verificar que bloquee la entrega. Registrar revisión fuente, digest y entorno para cada release de ensayo.

## Concesiones del diseño

Las comprobaciones estrictas añaden fricción si no hay responsables claros. Conviene mantener pequeño el flujo de entrega, hacer visibles las excepciones y reservar permisos de producción al job que los necesita.

## Próxima iteración

Publicar un repositorio de ejemplo y demostraciones de fallos. El diagrama y la narrativa describen un diseño ficticio, no una postura de seguridad de producción auditada.
