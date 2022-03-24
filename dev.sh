#!/bin/bash

# Load environment variables
chmod +x env.sh; source ./env.sh

# Npm install if not already
yarn

# Start nuxt
./node_modules/.bin/cross-env ./node_modules/.bin/nuxt
