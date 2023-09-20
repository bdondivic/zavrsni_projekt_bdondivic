/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qc42ctvax5u990a");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "qc42ctvax5u990a",
    "created": "2023-09-19 03:36:58.457Z",
    "updated": "2023-09-19 05:18:36.952Z",
    "name": "booksRead",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ro1duaa3",
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
