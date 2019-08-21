#!/usr/bin/env sh
docker run --name sample-mysql -v ${PWD}:/data  -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql:5

# RUN mysql -u root -p password < create database mydb
# RUN mysql -u root -p password mydb < /data/user.sql