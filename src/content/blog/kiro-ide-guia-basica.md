---
title: "Primeros Pasos con Kiro IDE: De Cero a Tu Primer Agente de Código"
date: "2026-06-20"
tag: "AI"
description: "Si estás cansado de copiar y pegar código de ChatGPT, Kiro IDE propone algo diferente: Spec-Driven Development con agentes de IA autónomos integrados en tu editor de toda la vida."
---

# Primeros Pasos con Kiro IDE: De Cero a Tu Primer Agente de Código

Si eres como yo, probablemente pases una buena parte del día en tu editor de código. Y si has estado usando inteligencia artificial para programar, tu flujo de trabajo se parece a esto: vas al navegador, le describes tu problema a ChatGPT o Claude, copias el bloque de código generado, regresas a tu editor, lo pegas, te das cuenta de que rompió tres cosas, y repites el proceso.

Hace unas semanas decidí probar **Kiro IDE**, el nuevo entorno de desarrollo agéntico desarrollado por AWS. Y déjame decirte: la forma en la que colaboramos con la IA está a punto de cambiar por completo.

![Colaboración humana con agente de IA en Kiro IDE](/assets/kiro-basics.png)

## ¿Qué demonios es un "IDE Agéntico"?

Hasta ahora, herramientas como GitHub Copilot han funcionado como excelentes sistemas de *autocompletado*. Son como un copiloto que te sugiere la siguiente palabra o línea de código. 

Kiro va un paso más allá. Es un **IDE agéntico**, lo que significa que no solo autocompleta líneas, sino que puede **tomar decisiones y ejecutar tareas complejas de forma autónoma**. Puedes pedirle cosas como:
*   *"Investiga por qué este endpoint de la base de datos está fallando y corrígelo."*
*   *"Agrega pruebas unitarias para todas las funciones del archivo helper y ejecútalas."*

Kiro abrirá los archivos necesarios, leerá la estructura de tu proyecto, aplicará los cambios y correrá las pruebas por sí mismo, todo bajo tu supervisión.

## El ingrediente secreto: Spec-Driven Development

La mayor parte de los fallos con la IA ocurren porque le pedimos que escriba código directamente desde una idea vaga. Kiro resuelve esto obligándonos (de una forma muy amigable) a seguir el **Spec-Driven Development** (Desarrollo Guiado por Especificaciones).

En lugar de saltar directamente al código, el flujo con Kiro funciona así:

1.  **La Idea:** Le pides a Kiro lo que quieres construir usando lenguaje natural.
2.  **La Especificación (Spec):** Kiro analiza tu proyecto y te ayuda a redactar un documento formal con los requerimientos técnicos y la arquitectura del cambio.
3.  **La Lista de Tareas:** Se autogenera una lista de tareas paso a paso.
4.  **La Ejecución:** Delegas la ejecución de estas tareas al agente de IA, que va marcando el progreso en tiempo real.

Este enfoque estructurado evita que la IA alucine o desvíe el rumbo de tu arquitectura original.

## Sentirse como en casa: Basado en VS Code

Una de mis mayores preocupaciones al probar un nuevo IDE era perder mis extensiones de Git, mis atajos de teclado personalizados y mi tema oscuro favorito. Por suerte, Kiro está construido sobre los cimientos de VS Code.

> [!NOTE]
> Al abrir Kiro por primera vez, puedes importar automáticamente todas tus extensiones, configuraciones y shortcuts de VS Code con un solo clic. La curva de aprendizaje es de exactamente cero minutos.

## Mi primera experiencia: Creando un Helper de Fechas

Para probarlo, le pedí a Kiro crear una utilidad para formatear fechas en un proyecto de Node.js. En lugar de escupirme código directamente en el chat, Kiro abrió un plan interactivo en el lateral de mi pantalla. 

Me mostró qué archivos iba a crear (`src/utils/dateHelper.ts`), qué archivos iba a modificar para importar el helper, y me propuso un set de pruebas unitarias usando Jest. Hice clic en "Aprobar", vi cómo el agente abría terminales virtuales en segundo plano, creaba el código y ejecutaba el comando de testing hasta que todo quedó en verde.

Fue la primera vez que sentí que estaba programando *con* alguien, en lugar de simplemente usar una herramienta.

## ¿Vale la pena dar el salto?

Si estás buscando automatizar las tareas repetitivas de tu día a día (refactorizaciones simples, creación de boilerplates, escritura de tests) y quieres una integración real sin salir del editor, la respuesta es un rotundo **sí**.

En mi siguiente artículo, exploraremos cómo llevar Kiro al límite con configuraciones avanzadas como **Agent Hooks** y el **Model Context Protocol (MCP)** para conectar tus agentes a bases de datos y herramientas externas.

¡Feliz código!
