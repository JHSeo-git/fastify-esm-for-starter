import type { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';

import { SampleSchema } from './schema.js';

export const apiRoutes: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.get('/sample', { schema: SampleSchema }, async (request, reply) => {
    const { name } = request.query;

    reply.send({
      value: name ?? '"name" queryparam is empty',
    });
  });
};
