#!/bin/bash
cd /srv/docker-app
npm start > /var/log/venus/output.log 2>&1
