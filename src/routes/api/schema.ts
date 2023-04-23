import { Type } from '@fastify/type-provider-typebox';

import { createRouteSchema } from '@/lib/utils/typebox-utils.js';

export const SampleSchema = createRouteSchema({
  tags: ['Sample'],
  summary: 'Sample Test API',
  description: 'Sample Test API with swagger, typebox',
  querystring: Type.Object({
    name: Type.Optional(Type.String()),
  }),
  response: {
    200: Type.Object({
      value: Type.String(),
    }),
  },
});
