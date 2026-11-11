---
title: "GitHub Actions y AWS: diseñar despliegues con OIDC"
date: "2026-11-11"
lang: "es"
tag: "DevSecOps"
description: "Identidad temporal, políticas de confianza acotadas y una separación clara entre construir y desplegar."
---

Un pipeline no necesita convertirse en un almacén de credenciales permanentes para desplegar en AWS. OIDC permite plantear una relación de confianza entre GitHub Actions y un rol de IAM. La pregunta importante pasa a ser qué ejecución puede asumir ese rol y qué podrá hacer después.

## Dos políticas, dos responsabilidades

La política de confianza determina quién puede asumir el rol. La política de permisos determina qué puede hacer la sesión resultante. Una confianza bien restringida no compensa unos permisos excesivos, y unos permisos mínimos no sirven si cualquier repositorio puede obtenerlos.

AWS exige condiciones sobre el `sub` cuando se confía en el proveedor OIDC de GitHub. En el diseño del laboratorio limitaría el repositorio y el entorno de despliegue, además de validar la audiencia esperada. Los valores concretos dependen de si el workflow usa ramas, pull requests o entornos de GitHub.

## Construir no es desplegar

El job que ejecuta pruebas y construye una imagen necesita permisos diferentes al que actualiza un servicio. Separarlos reduce la cantidad de código que recibe acceso al entorno de destino. El digest de la imagen ofrece una referencia precisa del artefacto que se promueve.

Los permisos `id-token: write` permiten solicitar el token OIDC dentro del workflow; no conceden por sí solos permisos en AWS. Estos dependen de la confianza y las políticas del rol.

## Probar también la denegación

Una prueba útil verifica que una rama no autorizada no pueda asumir el rol. Otra confirma que un job de construcción no tenga permisos de despliegue. Ambas enseñan más sobre los límites reales que una única ejecución exitosa.

En producción documentaría además las aprobaciones del entorno, la revisión de cambios del workflow y la estrategia para fijar actions a revisiones evaluadas. La identidad temporal reduce la dependencia de secretos permanentes, pero no elimina la necesidad de revisar código y permisos.

## Evidencia que adjuntaría al caso

Una ejecución permitida, una denegada y la relación entre commit, imagen y entorno. En este portafolio el pipeline está presentado como diseño: esos registros se añadirán cuando exista un laboratorio ejecutable.

### Referencias

- [AWS IAM: crear un rol para federación OIDC](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html)
- [AWS Actions: configurar credenciales y OIDC](https://github.com/aws-actions/configure-aws-credentials)
