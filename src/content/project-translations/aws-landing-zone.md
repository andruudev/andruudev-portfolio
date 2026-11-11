---
{
  "title": "Landing Zone en AWS"
}
---

## El escenario

Un equipo de producto ficticio necesita separar desarrollo y producción. Los cambios manuales desde la consola generan diferencias entre entornos y dificultan rastrear su origen.

## Arquitectura

La propuesta separa cuentas por entorno, ubica las cargas en subredes privadas de tres zonas de disponibilidad y expone únicamente la entrada de la aplicación. Módulos de Terraform describen red, IAM y logs compartidos. Un backend S3 conserva el estado versionado con archivos de bloqueo nativos.

## Decisiones técnicas

GitHub Actions asume un rol de AWS acotado mediante OIDC. La política de confianza restringe el repositorio y el entorno de despliegue. El plan se revisa antes de aprobar el apply. Cada entorno tiene su propio estado y rol para limitar el alcance de un error.

## Plan de validación

El plan de validación revisa formato y validez de módulos, subredes públicas no previstas, concurrencia del bloqueo y un segundo plan después del apply. Un ejercicio de drift modifica una regla de seguridad para comprobar que aparezca en el siguiente plan.

## Concesiones del diseño

Un NAT gateway administrado por zona mejora el aislamiento de fallos, pero eleva el costo base. Un laboratorio pequeño puede usar una topología más económica; esa concesión debe ser explícita antes de considerar el diseño listo para producción.

## Próxima iteración

Construir los módulos, adjuntar una ejecución reproducible y medir tiempo de aprovisionamiento y costo mensual. Este caso de diseño no presenta un despliegue para un cliente ni resultados de negocio medidos.
