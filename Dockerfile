FROM codesimple/elm:0.19

# NOTE: we need to set HOME, because elm uses $HOME/.elm to save packages.
#       if this doesn't persist between runs, you get CORRUPT BINARY errors.

ENV HOME /mnt

WORKDIR /mnt
VOLUME /mnt
# NOTE: docker-compose mounts code in /mnt

RUN #!/bin/sh /mnt/outreach-mcmaster-ca/elm-bootstrap/optimize.sh --no-cache