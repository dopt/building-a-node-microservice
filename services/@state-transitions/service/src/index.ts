import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@bufbuild/connect-fastify";

import routes from "./connect";

const server = fastify();

server.register(fastifyConnectPlugin, {
  routes,
});

await server.listen({
  host: "localhost",
  port: 8080,
});
