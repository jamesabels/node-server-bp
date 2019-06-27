import * as  http from 'http';
import Router from './classes/router';

class Server {
    private router: Router;

    public constructor() {
        var server: http.Server = http.createServer(this.onRequest);
        this.router = new Router();
        var port = 8080;
		    server.listen(port);
        console.log(`Server starting on port ${port}`); 
    }
  
    private onRequest = (request: http.IncomingMessage, response: http.ServerResponse): void => {
        let url = request.url;
        this.router.route(url, response);
	  }
  
}

new Server();