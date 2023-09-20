/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("o7nqx4fpovujhvk");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "o7nqx4fpovujhvk",
    "created": "2023-09-19 03:36:35.724Z",
    "updated": "2023-09-19 05:18:43.039Z",
    "name": "booksToRead",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qkmznyzu",
        "name": "userID",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
