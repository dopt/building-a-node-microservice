import { beforeAll, afterAll, describe, expect, it } from "vitest";
import { Timestamp } from "@bufbuild/protobuf";

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
    //@ts-ignore
    await fastify.prisma.stateTransition.deleteMany();
    await fastify.close();
  });

  describe("client.healthCheck(...)", () => {
    it("should get correct response from clients RPC method", async () => {
      const response = await client.healthCheck({});
      expect(response).toEqual({
        status: 1,
      });
    });
  });

  describe("client.stateTransition(...)", () => {
    it("should get correct response from clients RPC method", async () => {
      const response = await client.stateTransition({
        user: "9fke93ur23-1",
        block: "394208feop12e",
        version: 3,
        transition: "next",
        timestamp: Timestamp.fromDate(new Date(1988, 9, 21)),
      });
      expect(response).toEqual({
        status: 0,
      });
    });
  });

  describe("client.getStateTransition(...)", () => {
    it("should get correct response from clients RPC method", async () => {
      const response = await client.getStateTransition({
        user: "9fke93ur23-1",
        block: "394208feop12e",
        version: 3,
      });
      expect(response).toEqual({
        user: "9fke93ur23-1",
        block: "394208feop12e",
        version: 3,
        transition: "next",
        timestamp: Timestamp.fromDate(new Date(1988, 9, 21)),
      });
    });
  });
});
