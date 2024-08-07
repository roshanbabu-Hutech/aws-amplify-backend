/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStockBucketStockUniverse = /* GraphQL */ `
  query GetStockBucketStockUniverse($id: ID!) {
    getStockBucketStockUniverse(id: $id) {
      id
      stockUniverseID
      stockBucketID
      stockbucketID
      stockuniverseID
      StockUniverse {
        id
        name
        bse_code
        nse_code
        industry
        current_price
        price_to_earning
        industry_pe
        eps
        promoter_holding
        debt_to_equity
        net_profit_latest_quarter
        yoy_quarterly_profit_growth
        sales_latest_quarter
        yoy_quarterly_sales_growth
        roce3yr_avg
        return_on_capital_employed
        opm
        profit_after_tax
        sales
        sales_growth_3years
        sales_growth_5years
        profit_growth
        profit_growth_3years
        profit_growth_5years
        profit_growth_7years
        profit_growth_10years
        average_return_on_equity_5years
        average_return_on_equity_3years
        return_on_equity
        return_over_1year
        return_over_3years
        return_over_5years
        return_on_assets
        sales_growth
        sales_preceding_year
        sales_growth_7years
        operating_profit_preceding_year
        net_profit_last_year
        sales_growth_10years
        average_earnings_5year
        free_cash_flow_last_year
        free_cash_flow_preceding_year
        net_cash_flow_preceding_year
        free_acash_flow_3years
        average_return_on_capital_employed_3years
        average_return_on_capital_employed_5years
        dividend_yield
        operating_cash_flow_3years
        operating_cash_flow_5years
        operating_cash_flow_7years
        price_to_book_value
        return_over_6months
        createdAt
        updatedAt
        __typename
      }
      StockBucket {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStockBucketStockUniverses = /* GraphQL */ `
  query ListStockBucketStockUniverses(
    $filter: ModelStockBucketStockUniverseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStockBucketStockUniverses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        stockUniverseID
        stockBucketID
        stockbucketID
        stockuniverseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const stockBucketStockUniversesByStockbucketID = /* GraphQL */ `
  query StockBucketStockUniversesByStockbucketID(
    $stockbucketID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStockBucketStockUniverseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stockBucketStockUniversesByStockbucketID(
      stockbucketID: $stockbucketID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        stockUniverseID
        stockBucketID
        stockbucketID
        stockuniverseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const stockBucketStockUniversesByStockuniverseID = /* GraphQL */ `
  query StockBucketStockUniversesByStockuniverseID(
    $stockuniverseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStockBucketStockUniverseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stockBucketStockUniversesByStockuniverseID(
      stockuniverseID: $stockuniverseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        stockUniverseID
        stockBucketID
        stockbucketID
        stockuniverseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStockUniverse = /* GraphQL */ `
  query GetStockUniverse($id: ID!) {
    getStockUniverse(id: $id) {
      id
      name
      bse_code
      nse_code
      industry
      current_price
      price_to_earning
      industry_pe
      eps
      promoter_holding
      debt_to_equity
      net_profit_latest_quarter
      yoy_quarterly_profit_growth
      sales_latest_quarter
      yoy_quarterly_sales_growth
      roce3yr_avg
      return_on_capital_employed
      opm
      profit_after_tax
      sales
      sales_growth_3years
      sales_growth_5years
      profit_growth
      profit_growth_3years
      profit_growth_5years
      profit_growth_7years
      profit_growth_10years
      average_return_on_equity_5years
      average_return_on_equity_3years
      return_on_equity
      return_over_1year
      return_over_3years
      return_over_5years
      return_on_assets
      sales_growth
      sales_preceding_year
      sales_growth_7years
      operating_profit_preceding_year
      net_profit_last_year
      sales_growth_10years
      average_earnings_5year
      free_cash_flow_last_year
      free_cash_flow_preceding_year
      net_cash_flow_preceding_year
      free_acash_flow_3years
      average_return_on_capital_employed_3years
      average_return_on_capital_employed_5years
      dividend_yield
      operating_cash_flow_3years
      operating_cash_flow_5years
      operating_cash_flow_7years
      price_to_book_value
      return_over_6months
      StockBucketStockUniverses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStockUniverses = /* GraphQL */ `
  query ListStockUniverses(
    $filter: ModelStockUniverseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStockUniverses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        bse_code
        nse_code
        industry
        current_price
        price_to_earning
        industry_pe
        eps
        promoter_holding
        debt_to_equity
        net_profit_latest_quarter
        yoy_quarterly_profit_growth
        sales_latest_quarter
        yoy_quarterly_sales_growth
        roce3yr_avg
        return_on_capital_employed
        opm
        profit_after_tax
        sales
        sales_growth_3years
        sales_growth_5years
        profit_growth
        profit_growth_3years
        profit_growth_5years
        profit_growth_7years
        profit_growth_10years
        average_return_on_equity_5years
        average_return_on_equity_3years
        return_on_equity
        return_over_1year
        return_over_3years
        return_over_5years
        return_on_assets
        sales_growth
        sales_preceding_year
        sales_growth_7years
        operating_profit_preceding_year
        net_profit_last_year
        sales_growth_10years
        average_earnings_5year
        free_cash_flow_last_year
        free_cash_flow_preceding_year
        net_cash_flow_preceding_year
        free_acash_flow_3years
        average_return_on_capital_employed_3years
        average_return_on_capital_employed_5years
        dividend_yield
        operating_cash_flow_3years
        operating_cash_flow_5years
        operating_cash_flow_7years
        price_to_book_value
        return_over_6months
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStockBucket = /* GraphQL */ `
  query GetStockBucket($id: ID!) {
    getStockBucket(id: $id) {
      id
      name
      description
      StockBucketStockUniverses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStockBuckets = /* GraphQL */ `
  query ListStockBuckets(
    $filter: ModelStockBucketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStockBuckets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      password
      mobile
      age
      profile_pic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        password
        mobile
        age
        profile_pic
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
