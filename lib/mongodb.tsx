// lib/mongodb.ts
import { MongoClient } from "mongodb";

const uri: string = process.env.MONGO_URI as string;
const options: object = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// add type to global object so TS doesn’t complain
declare global {
  // allow global var to persist between hot reloads in dev
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
