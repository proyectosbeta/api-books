# API Books
API Rest for books

# Tecnologies

* NodeJS v14.20.0
* NPM 8.14.0
* MongoDB v4.4.5
* Docker
* Sonarqube

## Running the app (production)

```bash
npm install
npm start
```

## Running the app (develpment)

```bash
npm install
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

#### Method GET

```text
    http://51.15.192.116:3030/api/v1/books
    http://51.15.192.116:3030/api/v1/books/62d40cf2d61edb6db30f3cda
```

#### Method POST

```text
    http://51.15.192.116:3030/api/v1/books
```
