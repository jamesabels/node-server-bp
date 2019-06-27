import * as  http from 'http';

export default function errorRoute (response: http.ServerResponse, error: string): void {
    if (error === '404') {
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("Page not found");
        response.end();
    } else {
        response.writeHead(500, {"Content-Type": "text/html"});
        response.write("500 Server Error");
        response.end();
    }
}