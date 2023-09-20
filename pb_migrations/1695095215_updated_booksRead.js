/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qc42ctvax5u990a")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qc42ctvax5u990a")

  // remove
  collection.schema.removeField("ro1duaa3")

  return dao.saveCollection(collection)
})
