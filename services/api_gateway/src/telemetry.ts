import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import { registerInstrumentations } from '@opentelemetry/instrumentation'
import { Resource } from '@opentelemetry/resources'
import { NodeSDK } from '@opentelemetry/sdk-node'
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node'

const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT

if (endpoint) {
  if (process.env.OTEL_DEBUG === 'true') {
    diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG)
  }

  const serviceName = process.env.OTEL_SERVICE_NAME ?? 'api_gateway'

  const sdk = new NodeSDK({
    resource: new Resource({
      'service.name': serviceName
    }),
    traceExporter: new OTLPTraceExporter({ url: endpoint })
  })

  registerInstrumentations({
    instrumentations: [getNodeAutoInstrumentations()]
  })

  ;(async () => {
    try {
      await sdk.start()
      console.log('OpenTelemetry started')
    } catch (err) {
      console.error('OpenTelemetry failed', err)
    }
  })()

  const shutdown = () => {
    ;(async () => {
      try {
        await sdk.shutdown()
        console.log('OpenTelemetry stopped')
      } catch (err) {
        console.error('OpenTelemetry shutdown error', err)
      } finally {
        process.exit(0)
      }
    })()
  }

  process.on('SIGTERM', shutdown)
  process.on('SIGINT', shutdown)
}
