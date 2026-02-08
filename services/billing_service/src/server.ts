import './telemetry'
import { buildApp } from './app'

async function main() {
  const app = await buildApp()
  const port = Number(app.env.PORT)
  const host = '0.0.0.0'

  try {
    await app.listen({ port, host })
    app.log.info({ port }, 'server started')
  } catch (err) {
    app.log.error(err, 'server failed to start')
    process.exit(1)
  }
}

void main()
