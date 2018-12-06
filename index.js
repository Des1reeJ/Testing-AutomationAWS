exports.handler = function(event, context, callback) {
    // TODO implement
    const AWS = require('aws-sdk');
    AWS.config.update({
        // accessKeyId default can be used while using the downloadable version of DynamoDB. 
        // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
        accessKeyId: "AKIAIUZMISXWLPSTTEMA",
        // secretAccessKey default can be used while using the downloadable version of DynamoDB. 
        // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
        secretAccessKey: "1YW1QiOrtQHPp/NaLDEGCJnGxpKRmoQlXEbFDYlE"
    });
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
        // Add your DynamoDB table name here
        TableName: "exampleTable",
        Item: {
            name: 'something awesome',
            type: "HTTP",
            source: {
                notes: "who cares"
            },
            id: new Date().getTime()
        }
    };
    docClient.put(params, function(err, data) {
        if (err) {
            console.error('Unable to add item. Error JSON:', JSON.stringify(err, null, 2));
        }
        else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
        callback(null, 'SAM development complete');
    });
};
