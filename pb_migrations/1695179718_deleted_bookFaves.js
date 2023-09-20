/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("705v63gi2boycrz");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "705v63gi2boycrz",
    "created": "2023-09-19 03:35:59.966Z",
    "updated": "2023-09-19 05:18:31.526Z",
    "name": "bookFaves",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i247hrb7",
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
