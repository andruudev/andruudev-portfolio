---
title: "Kubernetes: tres probes, tres preguntas diferentes"
date: "2026-11-11"
lang: "es"
tag: "Kubernetes"
description: "Startup, readiness y liveness: cómo evitar que un control de salud termine amplificando un incidente."
---

Un contenedor ejecutándose no garantiza que una aplicación pueda recibir tráfico. Tampoco todo error implica que reiniciar sea la solución. Las probes de Kubernetes responden preguntas diferentes y conviene diseñarlas junto a la aplicación.

## Startup: ¿terminó de arrancar?

Una startup probe permite dar tiempo a una aplicación que necesita inicializarse. Mientras no tiene éxito, Kubernetes no ejecuta sus probes de readiness ni de liveness. Es útil cuando un arranque legítimamente lento no debería confundirse con un bloqueo del proceso.

## Readiness: ¿puede recibir tráfico?

Si readiness falla, el contenedor sigue ejecutándose, pero el pod deja de estar listo para recibir tráfico mediante los Services que seleccionan pods preparados. Eso permite apartar temporalmente una instancia sin reiniciarla.

El endpoint debería representar la capacidad de servir solicitudes. Hacerlo depender indiscriminadamente de todos los servicios externos puede provocar que una dependencia compartida retire a todas las réplicas a la vez.

## Liveness: ¿tiene sentido reiniciar?

Una probe de liveness fallida puede provocar el reinicio del contenedor después del umbral configurado. Por eso necesita un criterio más específico que “algo respondió lento”. Un reinicio masivo no arregla una base de datos caída y puede añadir carga durante la recuperación.

## Diseñar un ensayo de rollout

Para el caso GitOps propongo tres variantes de una aplicación: sana, de arranque lento y con readiness fallida. Observaría qué pods reciben tráfico, cuánto dura el rollout y qué sucede al recuperar la versión anterior.

Los tiempos y umbrales deben salir de pruebas de la aplicación. Copiar `initialDelaySeconds` de otro servicio sin medir su arranque convierte un valor arbitrario en una decisión operativa.

## Lo que comprobaría antes de cerrar el cambio

El comportamiento de cada endpoint, los límites de recursos y el procedimiento de rollback. También revisaría que un nuevo despliegue no dependa de una migración incompatible. Volver a una imagen anterior no revierte automáticamente los cambios de datos.

La meta del laboratorio es explicar un fallo y su recuperación con evidencia, antes de prometer disponibilidad o despliegues sin interrupciones.

### Referencia

- [Kubernetes: liveness, readiness y startup probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/)
