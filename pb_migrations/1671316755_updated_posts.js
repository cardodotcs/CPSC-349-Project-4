migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34a61ab4tqi3oep")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hfndpbo0",
    "name": "field",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34a61ab4tqi3oep")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hfndpbo0",
    "name": "field",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
