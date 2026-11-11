---
{
  "title": "Plataforma serverless de eventos"
}
---

## El escenario

Un servicio de pedidos ficticio debe aceptar ráfagas sin acoplar la respuesta de la API al procesamiento posterior. Un consumidor que falla no debe perder silenciosamente un pedido ni duplicar sus efectos.

## Arquitectura

La API valida solicitudes y publica eventos de dominio. EventBridge los enruta a un buffer SQS consumido por Lambda. Escrituras condicionales en DynamoDB registran el identificador del evento para detectar entregas repetidas. Una cola de mensajes fallidos y un procedimiento de redrive hacen visibles los errores.

## Decisiones técnicas

El diseño asume que los mensajes pueden entregarse más de una vez. La idempotencia cubre el efecto de negocio, no solo la invocación del handler. Retención, timeout y límites de concurrencia se eligen en conjunto.

## Plan de validación

Repetir el mismo identificador, enviar un payload inválido y provocar un fallo temporal del consumidor. Revisar duplicados, mensajes fallidos, recuperación del backlog y alarmas. Medir latencia y costo con un perfil de carga explícito antes de publicar cifras.

## Concesiones del diseño

El trabajo asíncrono reduce el acoplamiento, pero introduce consistencia eventual y más estados operativos. Aceptar una solicitud no significa haber terminado su procesamiento.

## Próxima iteración

Implementar handlers y un harness de replay; después documentar la recuperación con trazas de ejemplo. Esta arquitectura ficticia no tiene una API pública activa.
