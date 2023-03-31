migrate((db) => {
  const collection = new Collection({
    "id": "r5bqkpdlv2lspiv",
    "created": "2023-03-27 15:14:26.813Z",
    "updated": "2023-03-27 15:14:26.813Z",
    "name": "collection1",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jbwcjenv",
        "name": "field1",
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
        "id": "6psrhnzo",
        "name": "field2",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("r5bqkpdlv2lspiv");

  return dao.deleteCollection(collection);
})
