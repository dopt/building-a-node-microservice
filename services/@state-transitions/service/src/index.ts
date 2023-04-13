import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@bufbuild/connect-fastify";

import prismaPlugin from "./plugin/prisma";

import routes from "./connect";

export const server = fastify();

server.register(prismaPlugin);
server.register(fastifyConnectPlugin, {
  routes,
});

await server.listen({
  host: "localhost",
  port: 8080,
});
