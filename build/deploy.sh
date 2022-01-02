#!/bin/sh

# run in extracted build folder

rm .DS*
rm ._*
rm img/.DS*
rm img/._*

cp -r * /var/www/html/outreach/
