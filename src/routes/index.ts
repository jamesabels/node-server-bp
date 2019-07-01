import * as  http from 'http';
import * as qs from 'querystring';
import Database from '../classes/database';

export default function indexRoute (request: http.IncomingMessage, response: http.ServerResponse, database: Database, url: string | undefined): void {
    if (request.method === 'GET') {
        database.queryDB('local', 'test', url)
            .then((res): void => {
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.write(JSON.stringify(res));
                response.end();
            })
    } else if (request.method === 'POST') {
        request.on('data', (chunk): void => {
            let body = '';
            body += chunk;
            let postData = qs.parse(body);
            console.log(postData['firstName']);
            database.addRecord('local', 'test', postData)
                .then((res): void => {
                    response.write('OK'); 
                    response.end(); 
                });
        });
    }
}