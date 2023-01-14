Connect to postgress database using psql to create the Cars table.

Copy following line into psql:
create table cars (Id serial primary key, Make varchar(50), model varchar(50), year int);

Run "docker-compose up"

