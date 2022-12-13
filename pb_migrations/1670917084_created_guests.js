migrate((db) => {
  const collection = new Collection({
    "id": "jpna12qlt9j8hw5",
    "created": "2022-12-13 07:38:04.531Z",
    "updated": "2022-12-13 07:38:04.531Z",
    "name": "guests",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": false,
      "allowOAuth2Auth": false,
      "allowUsernameAuth": false,
      "exceptEmailDomains": [],
      "manageRule": null,
      "minPasswordLength": 0,
      "onlyEmailDomains": [],
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jpna12qlt9j8hw5");

  return dao.deleteCollection(collection);
})
