---
title: "Observabilidad útil: del dashboard a una pregunta concreta"
date: "2026-11-11"
lang: "es"
tag: "SRE"
description: "Conectar métricas, logs y trazas para investigar fallos sin convertir la telemetría en ruido."
---

Antes de instalar otro dashboard preguntaría qué necesitamos entender: ¿aumentaron los errores?, ¿qué parte de una solicitud se volvió lenta?, ¿qué cambió alrededor del incidente? Una herramienta ayuda cuando la instrumentación permite responder esas preguntas.

## Tres señales que se complementan

OpenTelemetry proporciona mecanismos para recoger, procesar y exportar señales. Para un servicio pequeño empezaría con métricas de solicitudes y errores, trazas de las operaciones principales y logs estructurados con contexto suficiente para investigar.

No son copias de la misma información. Las métricas permiten observar patrones; una traza describe el recorrido de una operación; un log registra un evento con contexto. Su valor crece cuando se pueden relacionar durante una investigación.

## Un Collector como punto de control

Un Collector puede recibir y procesar telemetría antes de exportarla. En el diseño de este portafolio lo usaría para aplicar filtros, lotes y una configuración compartida de exportación. El backend que almacena los datos sigue siendo una decisión independiente.

Eso también introduce una pieza operativa que necesita configuración, límites y observación. Un componente central no debería convertirse en un punto de fallo que nadie supervisa.

## Menos etiquetas, mejores preguntas

Evitaría usar identificadores de usuario o de solicitud como etiquetas de métricas. Además del riesgo de exponer información, una cardinalidad sin control complica la operación y el costo. Elegiría atributos a partir de preguntas concretas, con reglas explícitas sobre qué información se elimina antes de exportar.

## Probar el recorrido de investigación

El ejercicio propuesto introduce una dependencia lenta en un entorno desechable. A partir de una señal de degradación se busca una traza afectada y los logs relacionados. Después se retira el fallo y se comprueba la recuperación.

Documentaría qué evidencia ayudó y cuál faltó. Un dashboard visualmente atractivo no prueba que el equipo pueda diagnosticar un problema.

## La próxima mejora

Con un servicio instrumentado y ejercicios repetibles podríamos medir el tiempo de diagnóstico. Hasta entonces, el caso del portafolio describe la arquitectura y el plan de validación, sin atribuirle resultados reales.

### Referencias

- [OpenTelemetry: señales](https://opentelemetry.io/docs/concepts/signals/)
- [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/)
