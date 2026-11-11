---
lang: "es"
title: "AWS desde Cero: Guía de Inicio para Desarrolladores"
date: "2026-06-22"
updated: "2026-11-11"
tag: "Cloud"
description: "Un primer laboratorio de AWS con alcance pequeño, acceso privado al origen y control de costos desde el diseño."
---

La mejor forma de empezar con AWS es resolver un problema pequeño y poder explicar cada recurso que aparece en la cuenta. Un sitio estático es un buen laboratorio: permite practicar almacenamiento, distribución de contenido, permisos y despliegue sin comenzar por un clúster de Kubernetes.

![Ilustración de servicios cloud de AWS](../../assets/blog/aws-basics.png)

## Elegir un servicio a partir de una necesidad

Para aprender, separaría cuatro preguntas: dónde se ejecuta el código, dónde se guardan los datos, cómo llegan las solicitudes y quién tiene permiso para hacer cada operación. Esa manera de pensar ayuda más que memorizar nombres.

EC2 permite trabajar con máquinas virtuales. S3 almacena objetos. RDS ofrece motores de bases de datos administrados. Lambda ejecuta funciones bajo un modelo administrado. Ninguno es una respuesta automática para todos los problemas: una aplicación y su contexto determinan la elección.

## Diseñar el costo antes de desplegar

No asumiría que un laboratorio será gratuito por ser pequeño. Las condiciones de Free Tier, los créditos disponibles y la elegibilidad dependen de la cuenta y de las ofertas vigentes. Revisaría esas condiciones en AWS, estimaría los recursos y elegiría un presupuesto adecuado para el ejercicio.

AWS Budgets permite configurar avisos sobre gasto real y previsto. Sus datos no son instantáneos: una notificación de presupuesto no debe confundirse con un interruptor que impide cualquier cargo adicional. También hace falta un procedimiento para retirar los recursos del laboratorio.

## Un sitio estático con origen privado

La arquitectura propuesta es **navegador → CloudFront → bucket S3 privado**. Para este diseño usaría el origen S3 normal, mantendría bloqueado el acceso público y configuraría Origin Access Control (OAC). La política del bucket debe limitar la lectura a la distribución correspondiente.

El endpoint de website hosting de S3 es un tipo de origen diferente y no admite OAC. Esta distinción evita mezclar instrucciones de dos arquitecturas en el mismo tutorial.

La secuencia del laboratorio sería:

1. Crear un bucket dedicado y subir una página de prueba.
2. Crear la distribución con el origen S3 normal y un OAC que firme las solicitudes.
3. Aplicar la política de acceso indicada por AWS para esa distribución.
4. Configurar HTTPS para los visitantes y probar la página desde CloudFront.
5. Verificar que el acceso directo no autorizado al objeto S3 sea rechazado.
6. Documentar el procedimiento para actualizar y después eliminar el entorno.

## La evidencia que guardaría

Un diagrama, la configuración revisable, una prueba de acceso permitido y otra de acceso denegado. Después mediría el costo y anotaría qué decisión cambiaría para una aplicación real. Ese registro convierte un tutorial seguido paso a paso en un caso de aprendizaje que se puede explicar.

### Referencias

- [CloudFront: acceso restringido a un origen S3 con OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)
- [AWS Budgets: seguimiento de costos y avisos](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)
- [AWS Free Tier: condiciones vigentes](https://aws.amazon.com/free/)
