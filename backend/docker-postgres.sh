#!/bin/sh
docker run -it -e POSTGRES_DB=meetit -e POSTGRES_PASSWORD=postgres -p 5432:5432 postgres $*

