migrate((db) => {
  const collection = new Collection({
    "id": "o88mmzs07ix5412",
    "created": "2022-12-13 07:41:01.683Z",
    "updated": "2022-12-13 07:41:01.683Z",
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
  const collection = dao.findCollectionByNameOrId("o88mmzs07ix5412");

  return dao.deleteCollection(collection);
})
