#!/usr/bin/bash

cat storage/invitees.json | jq -r -c '.[] | "\(.id)#\(.name)"' | while read i; do
    id=$(awk -F'#' '{print $1}' <<<"$i")
    name=$(awk -F'#' '{print $2}' <<<"$i" | jq -sRr @uri)
    curl http://localhost:7379/SET/$id/$name
done
