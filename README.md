https://docs.google.com/document/d/1R_iUw2CMODhb-yitoh6NWRi3D98xYl2a_6JiyOmSIlY/edit

Connect to postgress database using psql to create the Cars table.
"psql -h localhost -U <postgres username> -p <port> -d <database name>"

Copy following line into psql:
"create table cars (Id serial primary key, Make varchar(50), model varchar(50), year int);"

Run "docker-compose up"

The app can now be accessed at localhost:8080
