#!/bin/bash

pnpm --filter @state-transitions/database run up & 

curl --connect-timeout 5 \
    --max-time 10 \
    --retry 5 \
    --retry-delay 0 \
    --retry-max-time 40 \
    --retry-connrefused \
    -s -S \
    http://localhost:5436 > /dev/null

pnpm run test:e2e;

TEST_EXIT_STATUS=$?

pnpm --filter @state-transitions/database down;

exit $TEST_EXIT_STATUS;
