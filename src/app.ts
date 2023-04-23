import Fastify from 'fastify';

import { cors } from './plugins/cors.js';
import { swagger } from './plugins/swagger.js';
import { routes } from './routes/routes.js';

const environment = process.env.NODE_ENV ?? 'development';

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'yyyy-mm-dd HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  production: true,
  test: false,
};

const app = Fastify({
  logger: envToLogger[environment] ?? true,
});

app.register(swagger);
app.register(cors);
app.register(routes);

export { app };
