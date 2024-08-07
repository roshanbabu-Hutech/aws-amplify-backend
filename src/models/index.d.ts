import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerStockBucketStockUniverse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StockBucketStockUniverse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly stockUniverseID: string;
  readonly stockBucketID: string;
  readonly stockbucketID: string;
  readonly stockuniverseID: string;
  readonly StockUniverse?: StockUniverse | null;
  readonly StockBucket?: StockBucket | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStockBucketStockUniverse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StockBucketStockUniverse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly stockUniverseID: string;
  readonly stockBucketID: string;
  readonly stockbucketID: string;
  readonly stockuniverseID: string;
  readonly StockUniverse: AsyncItem<StockUniverse | undefined>;
  readonly StockBucket: AsyncItem<StockBucket | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StockBucketStockUniverse = LazyLoading extends LazyLoadingDisabled ? EagerStockBucketStockUniverse : LazyStockBucketStockUniverse

export declare const StockBucketStockUniverse: (new (init: ModelInit<StockBucketStockUniverse>) => StockBucketStockUniverse) & {
  copyOf(source: StockBucketStockUniverse, mutator: (draft: MutableModel<StockBucketStockUniverse>) => MutableModel<StockBucketStockUniverse> | void): StockBucketStockUniverse;
}

type EagerStockUniverse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StockUniverse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly bse_code?: string | null;
  readonly nse_code?: string | null;
  readonly industry?: string | null;
  readonly current_price?: string | null;
  readonly price_to_earning?: string | null;
  readonly industry_pe?: string | null;
  readonly eps?: string | null;
  readonly promoter_holding?: string | null;
  readonly debt_to_equity?: string | null;
  readonly net_profit_latest_quarter?: string | null;
  readonly yoy_quarterly_profit_growth?: string | null;
  readonly sales_latest_quarter?: string | null;
  readonly yoy_quarterly_sales_growth?: string | null;
  readonly roce3yr_avg?: string | null;
  readonly return_on_capital_employed?: string | null;
  readonly opm?: string | null;
  readonly profit_after_tax?: string | null;
  readonly sales?: string | null;
  readonly sales_growth_3years?: string | null;
  readonly sales_growth_5years?: string | null;
  readonly profit_growth?: string | null;
  readonly profit_growth_3years?: string | null;
  readonly profit_growth_5years?: string | null;
  readonly profit_growth_7years?: string | null;
  readonly profit_growth_10years?: string | null;
  readonly average_return_on_equity_5years?: string | null;
  readonly average_return_on_equity_3years?: string | null;
  readonly return_on_equity?: string | null;
  readonly return_over_1year?: string | null;
  readonly return_over_3years?: string | null;
  readonly return_over_5years?: string | null;
  readonly return_on_assets?: string | null;
  readonly sales_growth?: string | null;
  readonly sales_preceding_year?: string | null;
  readonly sales_growth_7years?: string | null;
  readonly operating_profit_preceding_year?: string | null;
  readonly net_profit_last_year?: string | null;
  readonly sales_growth_10years?: string | null;
  readonly average_earnings_5year?: string | null;
  readonly free_cash_flow_last_year?: string | null;
  readonly free_cash_flow_preceding_year?: string | null;
  readonly net_cash_flow_preceding_year?: string | null;
  readonly free_acash_flow_3years?: string | null;
  readonly average_return_on_capital_employed_3years?: string | null;
  readonly average_return_on_capital_employed_5years?: string | null;
  readonly dividend_yield?: string | null;
  readonly operating_cash_flow_3years?: string | null;
  readonly operating_cash_flow_5years?: string | null;
  readonly operating_cash_flow_7years?: string | null;
  readonly price_to_book_value?: string | null;
  readonly return_over_6months?: string | null;
  readonly StockBucketStockUniverses?: (StockBucketStockUniverse | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStockUniverse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StockUniverse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly bse_code?: string | null;
  readonly nse_code?: string | null;
  readonly industry?: string | null;
  readonly current_price?: string | null;
  readonly price_to_earning?: string | null;
  readonly industry_pe?: string | null;
  readonly eps?: string | null;
  readonly promoter_holding?: string | null;
  readonly debt_to_equity?: string | null;
  readonly net_profit_latest_quarter?: string | null;
  readonly yoy_quarterly_profit_growth?: string | null;
  readonly sales_latest_quarter?: string | null;
  readonly yoy_quarterly_sales_growth?: string | null;
  readonly roce3yr_avg?: string | null;
  readonly return_on_capital_employed?: string | null;
  readonly opm?: string | null;
  readonly profit_after_tax?: string | null;
  readonly sales?: string | null;
  readonly sales_growth_3years?: string | null;
  readonly sales_growth_5years?: string | null;
  readonly profit_growth?: string | null;
  readonly profit_growth_3years?: string | null;
  readonly profit_growth_5years?: string | null;
  readonly profit_growth_7years?: string | null;
  readonly profit_growth_10years?: string | null;
  readonly average_return_on_equity_5years?: string | null;
  readonly average_return_on_equity_3years?: string | null;
  readonly return_on_equity?: string | null;
  readonly return_over_1year?: string | null;
  readonly return_over_3years?: string | null;
  readonly return_over_5years?: string | null;
  readonly return_on_assets?: string | null;
  readonly sales_growth?: string | null;
  readonly sales_preceding_year?: string | null;
  readonly sales_growth_7years?: string | null;
  readonly operating_profit_preceding_year?: string | null;
  readonly net_profit_last_year?: string | null;
  readonly sales_growth_10years?: string | null;
  readonly average_earnings_5year?: string | null;
  readonly free_cash_flow_last_year?: string | null;
  readonly free_cash_flow_preceding_year?: string | null;
  readonly net_cash_flow_preceding_year?: string | null;
  readonly free_acash_flow_3years?: string | null;
  readonly average_return_on_capital_employed_3years?: string | null;
  readonly average_return_on_capital_employed_5years?: string | null;
  readonly dividend_yield?: string | null;
  readonly operating_cash_flow_3years?: string | null;
  readonly operating_cash_flow_5years?: string | null;
  readonly operating_cash_flow_7years?: string | null;
  readonly price_to_book_value?: string | null;
  readonly return_over_6months?: string | null;
  readonly StockBucketStockUniverses: AsyncCollection<StockBucketStockUniverse>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StockUniverse = LazyLoading extends LazyLoadingDisabled ? EagerStockUniverse : LazyStockUniverse

export declare const StockUniverse: (new (init: ModelInit<StockUniverse>) => StockUniverse) & {
  copyOf(source: StockUniverse, mutator: (draft: MutableModel<StockUniverse>) => MutableModel<StockUniverse> | void): StockUniverse;
}

type EagerStockBucket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StockBucket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly StockBucketStockUniverses?: (StockBucketStockUniverse | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStockBucket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StockBucket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly StockBucketStockUniverses: AsyncCollection<StockBucketStockUniverse>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StockBucket = LazyLoading extends LazyLoadingDisabled ? EagerStockBucket : LazyStockBucket

export declare const StockBucket: (new (init: ModelInit<StockBucket>) => StockBucket) & {
  copyOf(source: StockBucket, mutator: (draft: MutableModel<StockBucket>) => MutableModel<StockBucket> | void): StockBucket;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly mobile?: number | null;
  readonly age?: number | null;
  readonly profile_pic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly mobile?: number | null;
  readonly age?: number | null;
  readonly profile_pic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}