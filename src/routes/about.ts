import * as  http from 'http';

export default function aboutRoute (response: http.ServerResponse): void {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello About!');
    response.end();
}