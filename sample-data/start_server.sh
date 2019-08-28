#!/usr/bin/env sh
docker run --name sample-mysql -v ${PWD}:/data  -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql:5

# in msql shell run:
# create database mydb
# use mydb
# source /data/user.sql
