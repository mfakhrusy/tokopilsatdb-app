# HOW TO START THE APP

1. Download docker + docker-compose for your Operating System
2. Start docker service (see your OS documentation), you have to do this after each reboot, or you can try to auto-start it on boot, see your OS docs.
3. go to application directory root (where this file is), type `docker-compose up`.
4. The docker will start both the database and backend expressJS server.
5. For developing client application, go to client directory, type `yarn install` + `yarn start` command to start developing, it's configured on port 3001.
6. For admin, it's the same but the application is configured on port 3032.
7. Have fun.
8. 

# ADDITIONAL INFO
1. Please install Postman for REST API Management, use this link: https://www.getpostman.com/collections/8205cc944f2436ac6d35
2. 

# FOR ADMIN
1. Please register user via API USER ADD
2. Please add random company via API COMPANY ADD, with company_url of tokopilsatdb.com