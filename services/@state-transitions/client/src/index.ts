import { StateTransitionService } from "@state-transitions/definition";
import { createConnectTransport } from "@bufbuild/connect-node";
import { createPromiseClient } from "@bufbuild/connect";

// See https://github.com/aspect-build/rules_ts/issues/159#issuecomment-1437399901
// > https://github.com/microsoft/TypeScript/issues/47663#issuecomment-1270716220
import type {} from "@bufbuild/protobuf";

export const transport = createConnectTransport({
  baseUrl: `http://localhost:8080`,
  httpVersion: "1.1",
});

export const client = createPromiseClient(StateTransitionService, transport);
