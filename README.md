# API Books
API Rest for books

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

## Requests

```text
    Method POST:     /books         --> Add a new book
    Method GET:      /books/:id     --> Return a book by id
    Method PATCH:    /books/:id     --> Update an existing book
    Method DELETE:   /books/:id     --> Delete requested book
    Method GET:      /books         --> Returns all books
```

## Try in API client

### Method GET:

```text
    http://localhost:3000/v1/books/
    http://localhost:3000/v1/books/1
```
