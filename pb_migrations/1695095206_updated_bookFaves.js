/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("705v63gi2boycrz")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("705v63gi2boycrz")

  // remove
  collection.schema.removeField("i247hrb7")

  return dao.saveCollection(collection)
})
