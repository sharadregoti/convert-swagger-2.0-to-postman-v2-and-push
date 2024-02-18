var secret = require('./secrets.js');

module.exports = {
    "collections": [
        {
            "from": "swagger",
            "to": "postman-collection",
            "name": "Demo",
            "collection_uid": "<replace-this-with-your-collection-uid>",
            "collection_id": "<replace-this-with-your-collection-id>"
        }
    ],
    "key": secret.key
};
