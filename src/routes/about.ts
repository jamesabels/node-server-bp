import * as  http from 'http';

export default function aboutRoute (request: http.IncomingMessage, response: http.ServerResponse): void {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello About!');
    response.end();
}