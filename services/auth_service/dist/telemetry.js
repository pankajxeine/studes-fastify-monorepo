"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@opentelemetry/api");
const exporter_trace_otlp_http_1 = require("@opentelemetry/exporter-trace-otlp-http");
const instrumentation_1 = require("@opentelemetry/instrumentation");
const resources_1 = require("@opentelemetry/resources");
const sdk_node_1 = require("@opentelemetry/sdk-node");
const auto_instrumentations_node_1 = require("@opentelemetry/auto-instrumentations-node");
const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
if (endpoint) {
    if (process.env.OTEL_DEBUG === 'true') {
        api_1.diag.setLogger(new api_1.DiagConsoleLogger(), api_1.DiagLogLevel.DEBUG);
    }
    const serviceName = process.env.OTEL_SERVICE_NAME ?? 'auth_service';
    const sdk = new sdk_node_1.NodeSDK({
        resource: new resources_1.Resource({
            'service.name': serviceName
        }),
        traceExporter: new exporter_trace_otlp_http_1.OTLPTraceExporter({ url: endpoint })
    });
    (0, instrumentation_1.registerInstrumentations)({
        instrumentations: [(0, auto_instrumentations_node_1.getNodeAutoInstrumentations)()]
    });
    (async () => {
        try {
            await sdk.start();
            console.log('OpenTelemetry started');
        }
        catch (err) {
            console.error('OpenTelemetry failed', err);
        }
    })();
    const shutdown = () => {
        ;
        (async () => {
            try {
                await sdk.shutdown();
                console.log('OpenTelemetry stopped');
            }
            catch (err) {
                console.error('OpenTelemetry shutdown error', err);
            }
            finally {
                process.exit(0);
            }
        })();
    };
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
}
