# API Books
API Rest for books

# Tecnologies

* NodeJS v14.20.xxx
* NPM 8.14.xxx
* MongoDB v4.4.xxx
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

### Method GET

```text
    http://localhost:3000/v1/books/
    http://localhost:3000/v1/books/1
```
