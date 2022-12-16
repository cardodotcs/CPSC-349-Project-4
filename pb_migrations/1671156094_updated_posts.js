migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34a61ab4tqi3oep")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0jrqpxc0",
    "name": "body",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34a61ab4tqi3oep")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0jrqpxc0",
    "name": "article",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
