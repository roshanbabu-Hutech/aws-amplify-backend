// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StockBucketStockUniverse, StockUniverse, StockBucket, User } = initSchema(schema);

export {
  StockBucketStockUniverse,
  StockUniverse,
  StockBucket,
  User
};