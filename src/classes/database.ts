import * as qs from 'querystring';
import { MongoClient } from "mongodb";
import QueryBuilder from "./queryBuilder";


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

export default class Database {
    private url: string;
    private client: MongoClient;
    public dbStatus: boolean;
    private queryBuilder: QueryBuilder;

    public constructor() {
        this.url = 'mongodb://localhost:27017';
        this.client = new MongoClient(this.url, {});
        this.queryBuilder = new QueryBuilder();
        this.dbStatus = false;

        this.initalizeConnection()
            .then((res): void => {
                this.dbStatus = true;
                console.log("Database Connected...");
            })
            .catch((err): void => {
                console.log(err);
            })
    }

    public async initalizeConnection (): Promise<MongoClient> {
        return await this.client.connect();
    }

    public async queryDB (databaseName: string, collectionName: string, url: string | undefined): Promise<Person[]> {
        let db = this.client.db(databaseName, {});
        let collection = db.collection(collectionName);
        console.log('URL ', url)
        if (typeof url !== 'string') {
            return [];
        }
        let builtquery: any = this.queryBuilder.build(url);
        return await collection.find(builtquery).toArray();
    }

    public async addRecord(databaseName: string, collectionName: string, postBody: qs.ParsedUrlQuery): Promise<any> {
        let db = this.client.db(databaseName, {});
        let collection = db.collection(collectionName);
        console.log('PARSED URL ', postBody);
        return await collection.insertOne(postBody);
    }
}