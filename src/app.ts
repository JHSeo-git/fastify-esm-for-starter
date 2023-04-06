import Fastify from 'fastify';

const environment = process.env.NODE_ENV ?? 'development';

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  production: true,
  test: false,
};

const fastify = Fastify({
  logger: envToLogger[environment] ?? true,
});

fastify.get('/', async (request, reply) => {
  reply.send({ hello: 'world' });
});

export { fastify };
