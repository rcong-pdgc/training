https://docs.google.com/document/d/1R_iUw2CMODhb-yitoh6NWRi3D98xYl2a_6JiyOmSIlY/edit

Run "docker-compose up --build"

The app can now be accessed at localhost:8080

Connect to postgress instance running in the docker container using the following command:
"docker exec -ti training-db-1 psql -U postgres"
(password is pdgc2023Rc!)
  
Copy following line into psql:
"create table cars (Id serial primary key, Make varchar(50), model varchar(50), year int);"

Now you can create, update, and delete cars from the web app.
