# API Books
API Rest for books

# Tecnologies

* NodeJS v14.20.0
* NPM 8.18.0
* MongoDB v4.4.5
* Docker
* Sonarqube

## Configuration

### .env

```bash
cp .env.example .env
```

Change variables for .env

```
APP_PORT=3030
URL_DOMAIN="https://books.proyectosbeta.net"
```

## Install

```bash
npm install
```

## Running the app (develpment)

```bash
npm dev
```

## Documentation

### Access

- [Oficial site](http://localhost:3000/api/v1/docs)

## Runnig Sonarqube

Needed Docker, Sonarqube and sonar-scanner

```bash
docker run -ti -v C:\Users\joseg\repositoriosGit\api-books:/usr/src --link sonarqube newtmitch/sonar-scanner
```

## Requests

```text
    Method POST:     /books         --> Add a new book
    Method GET:      /books/:id     --> Return a book by id
    Method PATCH:    /books/:id     --> Update an existing book
    Method DELETE:   /books/:id     --> Delete requested book
    Method GET:      /books         --> Returns all books
```

## Try in API client

### Dev

#### Method GET

```text
    http://localhost:3000/api/v1/books/
    http://localhost:3000/api/v1/books/62d40cf2d61edb6db30f3cda
```

#### Method POST

```text
    http://localhost:3000/api/v1/books/
```

### Production

#### Build

```bash
npm run build
```

#### Run the app

Pm2 is a tool for Node.JS application production environments, basically this tool helps us to launch our application as a daemon service on our server.

```bash
npm install pm2 -g
```

We must create a daemon with PM2 so we stop the server and execute the following command:

```bash
pm2 start /home/proyectosbeta/repositoriosGit/api-books/dist/bundle.js --name api-books
```

We need to configure the server startup script.

```bash
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u proyectosbeta --hp /home/proyectosbeta
```

#### Apache Configuration

```
<VirtualHost *:80>
    ServerAdmin josego85@gmail.com
    ServerName books.proyectosbeta.net
    ServerAlias www.books.proyectosbeta.net

    ProxyRequests Off
    ProxyPreserveHost On
    ProxyVia Full
    <Proxy *>
        Require all granted
    </Proxy>

    ProxyPass / http://127.0.0.1:3030/
    ProxyPassReverse / http://127.0.0.1:3030/

    ErrorLog "/var/log/apache2/books.proyectosbeta.net.error.log"
    CustomLog "/var/log/apache2/books.proyectosbeta.net.access.log" common

    RewriteEngine on
    RewriteCond %{SERVER_NAME} =books.proyectosbeta.net [OR]
    RewriteCond %{SERVER_NAME} =www.books.proyectosbeta.net
    RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]
</VirtualHost>
```

##### Modules

```bash
sudo a2enmod proxy proxy_http
```

##### Methods

###### GET

```text
    https://books.proyectosbeta.net/api/v1/books
    https://books.proyectosbeta.net/api/v1/books/62d40cf2d61edb6db30f3cda
```

###### POST

```text
    https://books.proyectosbeta.net/api/v1/books
```
