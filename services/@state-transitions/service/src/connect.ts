import { ConnectRouter } from "@bufbuild/connect";
import {
  GetStateTransitionRequest,
  HealthCheckResponse_ServingStatus,
  ResponseStatus,
  StateTransitionRequest,
  StateTransitionService,
} from "@state-transitions/definition";

export default (router: ConnectRouter) => {
  router.service(StateTransitionService, {
    stateTransition(_: StateTransitionRequest) {
      return {
        status: ResponseStatus.ACCEPTED_UNSPECIFIED,
      };
    },
    getStateTransition(request: GetStateTransitionRequest) {
      return {
        user: request.user,
        block: request.block,
        version: request.version,
      };
    },
    healthCheck() {
      return {
        status: HealthCheckResponse_ServingStatus.SERVING,
      };
    },
  });
};
