import { Db, MongoClient } from "mongodb";
import "dotenv/config";

let db: Db;
let url: string = process.env.MONGO_URL || "";

export const client = new MongoClient(url);

export const connectToDb = async (): Promise<void> => {
  try {
    await client.connect();
    db = client.db("koinX");
  } catch (error: any) {
    throw new Error(`Error connecting to MongoDB: ${error.message}`);
  }
};

export const getDb = (): Db => {
  if (!db) {
    throw new Error("Database is not connected!");
  }
  return db;
};

export const closeDb = async (): Promise<void> => {
  try {
    await client.close();
    console.log("Connection to database closed successfully");
  } catch (error: any) {
    throw new Error(`Error closing database connection: ${error.message}`);
  }
};
