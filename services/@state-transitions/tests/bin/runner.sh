#!/bin/bash

pnpm --filter @state-transitions/database run up & 

# wait for postgres to come up
while ! curl http://localhost:5436/ 2>&1 | grep '52'
do
  sleep 1
done

pnpm run test:e2e;

TEST_EXIT_STATUS=$?

pnpm --filter @state-transitions/database down;

exit $TEST_EXIT_STATUS;
