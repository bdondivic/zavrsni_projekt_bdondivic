/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j8wpdhqsyy5bplh");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "j8wpdhqsyy5bplh",
    "created": "2023-09-19 03:16:50.715Z",
    "updated": "2023-09-19 03:16:50.715Z",
    "name": "booksToRead",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3hfekodk",
        "name": "author",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nprcqvjv",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6qg0vto8",
        "name": "year",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
