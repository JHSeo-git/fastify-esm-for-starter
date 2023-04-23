import type { FastifySchema } from 'fastify';

export function createRouteSchema<Schema extends FastifySchema>(schema: Schema) {
  return schema;
}
