import * as  http from 'http';
import indexRoute from '../routes/index';
import aboutRoute from '../routes/about';
import errorRoute from '../routes/error';

class Router  {
    public route(url: string | undefined, response: http.ServerResponse): void {
        if (url !== undefined && url !== null) {
            if (url === '/') {
                indexRoute(response);
            } else if (url === '/about') {
                aboutRoute(response)
            } else {
                errorRoute(response, '404');
            }
        } else {
            errorRoute(response, '500');
        }
    }
}

export default Router;