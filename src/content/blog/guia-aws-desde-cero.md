---
title: "AWS desde Cero: Guía de Inicio para Desarrolladores"
date: "2026-06-22"
tag: "Cloud"
description: "La nube de AWS puede parecer un laberinto intimidante con cientos de servicios. Aquí tienes una guía práctica para entender los conceptos clave y empezar sin gastar un centavo."
---

# AWS desde Cero: Guía de Inicio para Desarrolladores

Si has intentado entrar al mundo del Cloud Computing, es muy probable que hayas abierto la consola de **Amazon Web Services (AWS)** y te hayas sentido completamente abrumado. Con más de 200 servicios disponibles y nombres extraños como *EC2*, *S3* o *Elastic Beanstalk*, es normal no saber ni por dónde empezar.

Como líder del programa de **AWS Student Builder Groups**, he visto a muchos desarrolladores (incluyéndome en mis inicios) pasar por este bloqueo. Pero no te preocupes: para empezar a construir en la nube no necesitas conocer los 200 servicios. Solo necesitas entender cuatro conceptos clave.

![AWS Cloud Services Illustration](/assets/aws-basics.png)

---

## Los 4 Pilares Fundamentales de AWS

Para no perderte en el catálogo de AWS, piensa en la nube como una infraestructura tradicional, pero virtualizada. Estos son los servicios esenciales que usarás el 90% del tiempo al comenzar:

### 1. Servidores Virtuales: Amazon EC2
**EC2 (Elastic Compute Cloud)** es el equivalente a alquilar una computadora en los centros de datos de Amazon. Puedes elegir el sistema operativo (Ubuntu, Amazon Linux, Windows), la memoria RAM y el procesador.
*   **¿Para qué sirve?** Para desplegar aplicaciones monolíticas, servidores web (como un backend de Node.js/Python) o cualquier software que requiera estar encendido 24/7.

### 2. Almacenamiento de Archivos: Amazon S3
**S3 (Simple Storage Service)** es un "disco duro infinito" en la nube. A diferencia de un servidor, aquí no instalas programas; solo guardas archivos organizados en contenedores llamados *Buckets*.
*   **¿Para qué sirve?** Guardar imágenes subidas por los usuarios, almacenar copias de seguridad (backups) o incluso alojar páginas web estáticas (HTML/CSS/JS) de forma extremadamente barata.

### 3. Bases de Datos: Amazon RDS
Configurar una base de datos en tu propio servidor EC2 y encargarte de las actualizaciones, copias de seguridad y la replicación es un dolor de cabeza. **RDS (Relational Database Service)** se encarga de todo eso de manera administrada.
*   **¿Para qué sirve?** Desplegar bases de datos PostgreSQL, MySQL, MariaDB o SQL Server con solo un par de clics, asegurando alta disponibilidad y copias de seguridad automáticas.

### 4. Computación sin Servidor: AWS Lambda
La filosofía *Serverless* (sin servidor) es el estándar moderno. Con **AWS Lambda**, tú no creas un servidor; solo subes una función (código en JS, Python, Go, etc.) y AWS la ejecuta solo cuando es necesario (por ejemplo, cuando alguien hace una petición a un endpoint).
*   **¿Para qué sirve?** Crear microservicios ligeros, APIs rápidas y tareas de automatización cron. Solo pagas por los milisegundos que tu código está corriendo.

---

## La Regla de Oro: Configura tu alarma de facturación

Antes de crear cualquier recurso en AWS, hay un paso crítico que **nunca** debes omitir. AWS ofrece una **Capa Gratuita (Free Tier)** durante los primeros 12 meses, pero si dejas un servidor encendido por error fuera de los límites, podrías recibir una sorpresa en tu tarjeta de crédito al final del mes.

> [!WARNING]
> Lo primero que debes hacer al crear tu cuenta de AWS es activar las alertas de facturación (Billing Alarms) en la sección de *Billing & Cost Management*. Configura una alarma para que te envíe un correo electrónico si tus gastos mensuales proyectados superan los $1.00 USD. 

---

## Tu Primer Proyecto: Alojar una Web Estática en S3

Para quitarle el miedo a la consola, te propongo un reto sencillo y 100% gratuito: subir una landing page a S3.

1.  **Crea un Bucket en S3:** Ponle un nombre único (ej. `mi-primera-web-12345`).
2.  **Activa el Alojamiento Web Estático:** Ve a la pestaña *Properties* del bucket y activa *Static website hosting*.
3.  **Configura el Acceso Público:** Desactiva la opción *Block all public access* en la pestaña *Permissions* (necesitamos que la gente pueda ver la web).
4.  **Agrega la Política del Bucket:** Copia esta política en la pestaña *Permissions* para permitir que cualquiera lea tus archivos:
    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::tu-nombre-de-bucket/*"
        }
      ]
    }
    ```
5.  **Sube tus archivos:** Sube tu archivo `index.html`.
6.  **¡Listo!** Abre la URL que te proporciona S3 en las propiedades de alojamiento estático y verás tu sitio en vivo.

---

## Conclusión

Aprender AWS no es memorizar todos sus servicios, sino saber cuál de ellos resuelve tu problema de forma eficiente y económica. Dominando EC2, S3, RDS y Lambda tendrás una base sólida para el 95% de los proyectos en la nube.

Si quieres aprender más sobre despliegue cloud, automatización de bases de datos y DevOps, quédate atento al blog o visítanos en [aprendedata.org](https://aprendedata.org) para cursos gratuitos.

¡Nos vemos en la nube!
