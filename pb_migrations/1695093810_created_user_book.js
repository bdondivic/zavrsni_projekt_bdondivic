/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "e9fxvgrctunuhw1",
    "created": "2023-09-19 03:23:30.265Z",
    "updated": "2023-09-19 03:23:30.265Z",
    "name": "user_book",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tez2rbpl",
        "name": "user_id",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "hce0k30t",
        "name": "isFavorite",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "euhg3jyl",
        "name": "isToRead",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "7ugwebu1",
        "name": "isRead",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("e9fxvgrctunuhw1");

  return dao.deleteCollection(collection);
})
