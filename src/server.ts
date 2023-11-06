import { app } from './app'
import { env } from './env'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then((address) => {
    console.log(`🔥 Server listening at ${address} 🔥`)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
