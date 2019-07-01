export default class QueryBuilder {
    public constructor() {

    }
    
    public build(queryString: string | undefined): any  {
        if (typeof queryString === 'string') {
            let params = queryString.split('?')
            let eachParam: any = [];
            params.forEach((string): void => eachParam.push(string.split('=')));
            let query = eachParam.reduce((p: string[] , c: any): any => {
                if (c[0].length > 0) { p[c[0]] = c[1]; }
                return p;
            }, {});
            return query;
        } else {
            throw new Error('Please prodive QueryBuilder.create with a proper string, not undefined');
        }
    }
}