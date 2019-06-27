import * as  http from 'http';

export default function indexRoute (response: http.ServerResponse): void {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello Index!');
    response.end();
}