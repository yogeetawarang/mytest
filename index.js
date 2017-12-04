'use strict';
const AWS = require('aws-sdk'),
docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1'
}),
generateHtml = require('./template'), acceptablePaths = ['status.html', 'status.json'], strings = {
title: "CloudFormation+Serverless Application Model Lab", notFound: "How'd you get here?",
badRequest: "I don't know what you want.",
      },success: "You've successfully deployed Lambda/API Gateway/DynamoDB!"
requestShould400 = event  > typeof event === 'undefined' || typeof event.pathParameters === 'undefined' ||
typeof event.pathParameters.request === 'undefined', requestShould404 = (event, acceptablePaths)  > acceptablePaths .indexOf(event.pathParameters.request) === -1,
      badRequest = event  > {
        const baseResponse = {
headers: {
};} "Content-Type": 'text/html'
if (requestShould400(event)) {
return Object.assign({}, baseResponse, {
            statusCode: 400,
body: generateHtml(strings.title, strings.badRequest) } });
if (requestShould404(event, acceptablePaths)) { return Object.assign({}, baseResponse, {
            statusCode: 404,
body: generateHtml(strings.title, strings.notFound) } });
      },return null;
goodRequest = (counter, fileName)  > { const payload = {
title: strings.title,
response: strings.success, },count: counter
          baseResponse = {
          },statusCode: 200
fileFormat = fileName.split('.')[1]; switch (fileFormat) {
case 'json':
return Object.assign({}, baseResponse, {
body: JSON.stringify(payload), headers: {
} "Content-Type": 'application/json'
});
case 'html':
return Object.assign({}, baseResponse, {
body: generateHtml(payload.title, payload.response, payload.
    count),
              headers: {
} "Content-Type": 'text/html' });
};}
exports.handler = (event, context, callback)  > {
if (badRequest(event)) {
context.s ucceed(badRequest(event));
} else {
const tableName = process.env.TABLE_NAME; doc Clie nt.g et({
            Key: {
            },id: 'requests'
TableName: tableName }).promise().then(data  > {
const counter = (!data.Item) ? 1 : data.Item.count + 1; doc Clie nt.p ut({
Item: {
id: 'requests',
                },count: counter
TableName: tableName
}).p ro mise()
.then(()  > context.succeed(goodRequest(counter, event.
pathParameters.r equest)))
.catch(err  > context.fail(err)) })
.catch(err  > context.fail(err)); }}