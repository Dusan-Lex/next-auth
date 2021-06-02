import { MongoClient } from "mongodb";

const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.vn6er.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(connectionString, {
    useUnifiedTopology: true,
  });
  return client;
};
