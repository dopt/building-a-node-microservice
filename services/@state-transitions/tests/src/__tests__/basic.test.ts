import { beforeAll, afterAll, describe, expect, it } from "vitest";

import { server } from "@state-transitions/service";
import { client } from "@state-transitions/client";
import { FastifyInstance } from "fastify";

describe("[Test] @state-transition/service", () => {
  let fastify: FastifyInstance;

  beforeAll(async () => {
    fastify = await server;
    await fastify.ready();
  });

  afterAll(async () => {
    await fastify.close();
  });
  //
  describe("client.healthCheck(...)", () => {
    it("should get correct response from clients RPC method", async () => {
      const response = await client.healthCheck({});
      expect(response).toEqual({
        status: 1,
      });
    });
  });
});
