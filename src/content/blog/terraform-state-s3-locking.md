---
title: "Terraform en equipo: estado remoto, bloqueos y cambios revisables"
date: "2026-11-11"
lang: "es"
tag: "IaC"
description: "Cómo plantear un backend S3, separar entornos y evitar que dos ejecuciones compitan por el mismo estado."
---

Un `terraform apply` que funciona desde un portátil es un buen comienzo. Para trabajar en equipo hace falta responder otras preguntas: ¿dónde vive el estado?, ¿quién puede cambiarlo?, ¿cómo se evita una ejecución simultánea? El backend es parte de la arquitectura de entrega, no un detalle que se resuelve al final.

## El estado merece su propio diseño

La documentación del backend S3 contempla archivos de bloqueo nativos mediante `use_lockfile`. El bloqueo con DynamoDB aparece marcado como obsoleto en esa documentación. Conviene comprobar la versión de Terraform y los requisitos del equipo antes de copiar la configuración de un tutorial antiguo.

El siguiente fragmento es ilustrativo. El bucket debe existir y los nombres deben adaptarse al entorno:

```hcl
terraform {
  backend "s3" {
    bucket       = "example-terraform-state"
    key          = "development/network/terraform.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}
```

El backend no crea por sí solo el bucket ni activa su versionado. Esas decisiones pertenecen al aprovisionamiento inicial. También hay que conceder los permisos necesarios sobre el estado y su archivo de bloqueo.

## Separar entornos es separar el alcance del error

En el laboratorio de landing zone propongo cuentas, roles y estados separados. Esa separación permite revisar una modificación de desarrollo sin darle acceso implícito a producción. La estructura exacta de repositorios depende del equipo; lo importante es poder explicar qué entorno afecta cada plan.

## Una prueba útil de concurrencia

En un entorno desechable, iniciaría una operación que mantenga el bloqueo e intentaría una segunda ejecución sobre el mismo estado. Después comprobaría la recuperación al terminar la primera. La prueba documenta un comportamiento; no basta con que la opción aparezca en un archivo.

También guardaría un plan revisable y comprobaría que un segundo plan, después del apply y sin cambios externos, no proponga modificaciones inesperadas. Evitaría desactivar el bloqueo como respuesta automática a un error.

## Qué dejaría documentado

Ubicación del estado, rol autorizado, procedimiento de recuperación y responsable de aprobar cambios. Los archivos de estado pueden contener información sensible y merecen controles de acceso y retención explícitos.

### Referencias

- [Backend S3: opciones, permisos y bloqueo nativo](https://developer.hashicorp.com/terraform/language/backend/s3)
- [Terraform: bloqueo del estado](https://developer.hashicorp.com/terraform/language/state/locking)
