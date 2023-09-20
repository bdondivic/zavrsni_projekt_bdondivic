/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o7nqx4fpovujhvk")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o7nqx4fpovujhvk")

  // remove
  collection.schema.removeField("qkmznyzu")

  return dao.saveCollection(collection)
})
