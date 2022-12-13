migrate((db) => {
  const collection = new Collection({
    "id": "vdj87h35oh7lv2l",
    "created": "2022-12-13 07:52:04.829Z",
    "updated": "2022-12-13 07:52:04.829Z",
    "name": "comments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j9wk4eiq",
        "name": "post",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "34a61ab4tqi3oep",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "qsk7ruwp",
        "name": "message",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "b8mv6gym",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("vdj87h35oh7lv2l");

  return dao.deleteCollection(collection);
})
