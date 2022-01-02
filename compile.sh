#!/bin/sh

set -e

js="build/site.js"
min="build/site.min.js"

# elm make --optimize --output=$js src/Main.elm
elm make src/Main.elm --output=$min

echo "Compiled size:$(cat $min | wc -c) bytes  ($min)"
echo "use ./optimize.sh to minimize the size (requires uglifyjs)"
