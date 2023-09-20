/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e9fxvgrctunuhw1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6rhi4oqa",
    "name": "book_id",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e9fxvgrctunuhw1")

  // remove
  collection.schema.removeField("6rhi4oqa")

  return dao.saveCollection(collection)
})
