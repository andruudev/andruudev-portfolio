---
title: "GitOps: primero el contrato de entrega, después la herramienta"
date: "2026-11-11"
lang: "es"
tag: "GitOps"
description: "Qué debería quedar claro sobre versiones, revisión y recuperación antes de añadir un controlador al clúster."
---

GitOps resulta más fácil de entender cuando empezamos por el problema de entrega. Queremos poder responder qué versión debería ejecutarse, quién aprobó el cambio y cómo regresar a una configuración conocida.

## El repositorio como conversación técnica

En el diseño del laboratorio EKS, la configuración declarativa tiene un repositorio separado del código de la aplicación. Un cambio de imagen queda visible como una diferencia revisable. Esa separación es una decisión de diseño, no una obligación universal: un equipo pequeño puede organizarlo de otra manera.

La revisión debería explicar qué cambia y cómo se comprobará. Un archivo YAML válido todavía puede describir una aplicación que no arranca o un límite de memoria demasiado pequeño.

## Construcción y entrega tienen fronteras

El pipeline de construcción produce un artefacto identificable. La configuración registra cuál se desea desplegar. El controlador reconcilia ese estado con el clúster. Dividir esas responsabilidades ayuda a definir los permisos de cada parte.

Eso no elimina las decisiones operativas. Las migraciones de datos, el orden de dependencias y el diagnóstico de una aplicación degradada requieren procedimientos adicionales.

## Un rollback que se pueda explicar

Volver a una configuración anterior es solo una parte de la recuperación. Antes de prometer un rollback automático, probaría una imagen fallida y documentaría qué sucede con el tráfico y los datos.

En el portafolio presento esa secuencia como un plan de laboratorio. La siguiente iteración debe aportar los manifiestos y una ejecución reproducible. El valor no estará en una captura de un panel en verde, sino en poder mostrar el cambio, el fallo y la recuperación.
