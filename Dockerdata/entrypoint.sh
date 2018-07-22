#!/bin/bash
cd /srv/docker-app
npm start > /var/log/taxter/output.log 2>&1
