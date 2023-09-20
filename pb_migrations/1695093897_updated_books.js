/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkdwia1uuvgzbtj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "prhekzm1",
    "name": "users",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "e9fxvgrctunuhw1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkdwia1uuvgzbtj")

  // remove
  collection.schema.removeField("prhekzm1")

  return dao.saveCollection(collection)
})
