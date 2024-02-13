import { resolve } from 'node:path';

import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';
import { fastifyPlugin } from 'fastify-plugin';

const isDev = process.env.NODE_ENV === 'development';

/**
 * @see https://github.com/fastify/fastify-swagger#usage
 */
export const swagger = fastifyPlugin(async (fastify) => {
  fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Fastify API',
        description: 'Testing the Fastify swagger API',
        version: '0.1.0',
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      servers: [{ url: 'http://localhost:4000' }],
      components: {
        securitySchemes: {
          apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header',
          },
        },
      },
      tags: [
        {
          name: 'Sample',
          description: 'Sample API',
        },
      ],
    },
    hideUntagged: true,
  });
  fastify.register(fastifySwaggerUi, {
    baseDir: isDev ? undefined : resolve('static'),
  });
});
