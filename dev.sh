#!/usr/bin/bash

refrescador \
  --watch '.' \
  --watch 'pax_compiler' \
  --watch 'pax_modules' \
  --watch 'test' \
  --watch 'pax-compiler.src.js' \
  --watch 'dev.sh' \
  --watch 'package.json' \
  --ignore '**/*.dist.js' \
  --ignore '**/*.made.js' \
  --extensions js \
  --extensions html \
  --extensions css \
  --extensions json \
  --extensions sh \
  --execute 'node pax_compiler/make.js' \
  --execute 'node pax_compiler/test/index.js' \
  \
  \
  \
  \
  \
  \
  \
  \
  \
  \
  \
  \
  \