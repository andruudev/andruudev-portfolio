---
{
  "title": "Plano de observabilidad"
}
---

## El escenario

Un servicio ficticio tiene dashboards, pero ninguna ruta clara entre una alerta y el diagnóstico. Se inspeccionan logs desconectados sin saber qué solicitudes fueron afectadas.

## Arquitectura

Un servicio instrumentado emite métricas, trazas y logs estructurados mediante un OpenTelemetry Collector. El diseño usa Prometheus para métricas, Loki para logs y Tempo para trazas, con Grafana para investigar. Los identificadores de traza conectan una solicitud lenta con sus spans y logs relacionados.

## Decisiones técnicas

Las alertas describen fallos visibles para usuarios y enlazan a un runbook. Los límites de cardinalidad, el muestreo y el filtrado de atributos son decisiones explícitas. Los payloads sensibles se excluyen de la telemetría.

## Plan de validación

Introducir una dependencia lenta y una tasa de errores elevada en el laboratorio. Seguir la alerta hasta un dashboard, una traza y un log relevante. Confirmar que la alerta se resuelva al recuperarse el servicio y que el runbook corresponda al fallo observado.

## Concesiones del diseño

Más telemetría no garantiza más utilidad. El costo, la cardinalidad y el muestreo afectan la investigación. Un conjunto pequeño de preguntas operativas debe guiar la instrumentación.

## Próxima iteración

Adjuntar dashboards y runbooks a una demo funcional y medir ejercicios de incidentes repetidos. No se afirma una reducción de incidentes de clientes reales.
