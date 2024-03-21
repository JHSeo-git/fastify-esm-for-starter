import { fastifyCors } from "@fastify/cors"
import { fastifyPlugin } from "fastify-plugin"

/**
 * @see https://github.com/fastify/fastify-cors#usage
 */
export const cors = fastifyPlugin(async (fastify) => {
  fastify.register(fastifyCors, {
    origin: /(localhost|127.0.0.1)/,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
})
