---
{
  "title": "Plataforma GitOps en EKS"
}
---

## El escenario

Un equipo ficticio despliega contenedores manualmente. El historial queda en mensajes y recuperar una versión depende de que alguien recuerde la etiqueta de una imagen.

## Arquitectura

CI construye y analiza una imagen, registra su digest inmutable y propone un cambio en un repositorio separado de configuración. Argo CD reconcilia los manifiestos Helm en un namespace de EKS. Las comprobaciones de startup, readiness y liveness tienen responsabilidades distintas.

## Decisiones técnicas

El pipeline de la aplicación no necesita credenciales cluster-admin. Los permisos de entrega se separan de los de construcción. Una configuración previa se restaura con un Git revert revisado; las migraciones de base de datos necesitan una estrategia de compatibilidad independiente.

## Plan de validación

El laboratorio propone desplegar una imagen sana, otra de arranque lento y otra que falla readiness. Se observa el rollout, se verifica que los pods no preparados no reciban tráfico del Service y se prueba recuperar el digest previo.

## Concesiones del diseño

GitOps incorpora un controlador y convenciones que mantener. La reconciliación automática no equivale a recuperarse de cualquier fallo de aplicación. Las probes, los límites de recursos y las alertas siguen formando parte del contrato de la plataforma.

## Próxima iteración

Añadir un servicio pequeño, publicar los manifiestos y registrar un rollout fallido y su recuperación. La mejora del tiempo de entrega seguirá siendo una hipótesis hasta contar con ejecuciones repetibles.
