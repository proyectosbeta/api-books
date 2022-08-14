"use strict";

const { PORT, URL_DOMAIN } = require("../config/global.config");
const versionSystem = "1.3.0";
const swagger = {
  openapi: "3.0.3",
  info: {
    title: "API Book",
    description: "API Book",
    version: versionSystem,
    contact: {
      email: "josego85@gmail.com",
    },
    license: {
      name: "GPLv3",
      url: "https://opensource.org/licenses/GPL-3.0",
    },
  },
  externalDocs: [
    {
      url: `${URL_DOMAIN}:${PORT}/api/v1/docs`,
    },
  ],
  servers: [
    {
      url: `${URL_DOMAIN}:${PORT}/api/v1`,
      description: "Development server",
    },
  ],
  paths: {
    "/books": {
      get: {
        tags: ["Book"],
        summary: "All books",
        description: "All books",
        responses: {
          200: {
            description: "Return all books",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {
                      type: "boolean",
                    },
                    data: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/Book",
                      },
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
      post: {
        tags: ["Book"],
        summary: "Create a book",
        description: "Create a book",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Book",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Created a book",
          },
        },
      },
    },
    "/books/{bookId}": {
      get: {
        tags: ["Book"],
        summary: "Get a one book",
        description: "Get a one book",
        parameters: [
          {
            name: "bookId",
            in: "path",
            required: true,
            description: "The id of a book",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Return a one book",
            schema: {
              $ref: "#/components/schemas/Book",
            },
          },
        },
      },
    },
  },
  tags: [
    {
      name: "Books",
      description: "API for books in Proyectos Beta",
    },
  ],
  components: {
    schemas: {
      Book: {
        required: ["title", "description", "author", "link", "year"],
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          author: {
            type: "string",
          },
          link: {
            type: "string",
          },
          year: {
            type: "string",
            format: "date",
            description: "Year",
            example: "2022",
          },
          __v: {
            type: "string",
          },
        },
      },
    },
  },
};

module.exports = { swagger };
