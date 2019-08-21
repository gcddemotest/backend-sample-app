FROM mysql:5

ADD user.sql /data/user.sql

RUN echo "create database `mydb`" | mysql -u root -p password
RUN mysql -u root -p password < /data/user.sql

