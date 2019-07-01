import * as  http from 'http';
import Router from './classes/router';
import Database from './classes/database';

interface Person {
    id: string;
    firstName: string;
    lastName: string;
    age: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}

class Server {
    private router: Router;
    private db: Database;
    public dbStatus: boolean;

    public constructor() {
        var server: http.Server = http.createServer(this.onRequest);
        this.router = new Router();
        this.db = new Database();
        this.dbStatus = false;

        var port = 8080;
		    server.listen(port);
        console.log(`Server starting on port ${port}`);
    }
    
    private onRequest = 
    (request: http.IncomingMessage, response: http.ServerResponse): void => {
        this.router.route(request.url, request, response, this.db);
    };
  
}

new Server();