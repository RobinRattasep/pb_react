migrate((db) => {
  const collection = new Collection({
    "id": "5vphin2qt0ahta8",
    "created": "2023-03-27 18:14:03.372Z",
    "updated": "2023-03-27 18:14:03.372Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qescpchg",
        "name": "field1",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("5vphin2qt0ahta8");

  return dao.deleteCollection(collection);
})
