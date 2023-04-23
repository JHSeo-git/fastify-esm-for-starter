import type { FastifyPluginAsync } from 'fastify';

import { apiRoutes } from './api/api-routes.js';

const routes: FastifyPluginAsync = async (fastify) => {
  fastify.register(apiRoutes, { prefix: '/api' });
};

export { routes };
