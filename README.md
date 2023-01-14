Connect to postgress database using psql to create the Cars table.

Copy following line into psql:
create table cars (Id serial primary key, Make varchar(50), model varchar(50), year int);

cd into backend directory and run "docker build -t backend ."
cd into frontend directory and run "docker build -t frontend ."

Run "docker-compose up"

The app can now be accessed at localhost:8080
