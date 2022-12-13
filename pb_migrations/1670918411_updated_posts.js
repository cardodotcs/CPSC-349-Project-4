migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34a61ab4tqi3oep")

  // remove
  collection.schema.removeField("zo4jgoiw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fkwwlaqa",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34a61ab4tqi3oep")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zo4jgoiw",
    "name": "author",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("fkwwlaqa")

  return dao.saveCollection(collection)
})
