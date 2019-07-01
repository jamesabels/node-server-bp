import * as  http from 'http';
import * as url from 'url';
import indexRoute from '../routes/index';
import aboutRoute from '../routes/about';
import errorRoute from '../routes/error';
import Database from './database';

class Router  {
    public route(currentUrl: string | undefined, request: http.IncomingMessage, response: http.ServerResponse, database: Database): void {
        
        let parsedUrl: url.UrlWithStringQuery;
        
        if (typeof currentUrl === 'string') {
            parsedUrl = url.parse(currentUrl);
            if (parsedUrl.pathname !== undefined && parsedUrl !== null) {
                if (parsedUrl.pathname === '/') {
                    indexRoute(request, response,  database, parsedUrl.search)
                } else if (parsedUrl.pathname === '/about') {
                    aboutRoute(request, response)
                } else {
                    console.log(url);
                    errorRoute(request, response, '404');
                }
            } else {
                errorRoute(request, response, '500');
            }  
        };
    }
}

export default Router;