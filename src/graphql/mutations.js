/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStockBucketStockUniverse = /* GraphQL */ `
  mutation CreateStockBucketStockUniverse(
    $input: CreateStockBucketStockUniverseInput!
    $condition: ModelStockBucketStockUniverseConditionInput
  ) {
    createStockBucketStockUniverse(input: $input, condition: $condition) {
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
export const updateStockBucketStockUniverse = /* GraphQL */ `
  mutation UpdateStockBucketStockUniverse(
    $input: UpdateStockBucketStockUniverseInput!
    $condition: ModelStockBucketStockUniverseConditionInput
  ) {
    updateStockBucketStockUniverse(input: $input, condition: $condition) {
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
export const deleteStockBucketStockUniverse = /* GraphQL */ `
  mutation DeleteStockBucketStockUniverse(
    $input: DeleteStockBucketStockUniverseInput!
    $condition: ModelStockBucketStockUniverseConditionInput
  ) {
    deleteStockBucketStockUniverse(input: $input, condition: $condition) {
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
export const createStockUniverse = /* GraphQL */ `
  mutation CreateStockUniverse(
    $input: CreateStockUniverseInput!
    $condition: ModelStockUniverseConditionInput
  ) {
    createStockUniverse(input: $input, condition: $condition) {
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
export const updateStockUniverse = /* GraphQL */ `
  mutation UpdateStockUniverse(
    $input: UpdateStockUniverseInput!
    $condition: ModelStockUniverseConditionInput
  ) {
    updateStockUniverse(input: $input, condition: $condition) {
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
export const deleteStockUniverse = /* GraphQL */ `
  mutation DeleteStockUniverse(
    $input: DeleteStockUniverseInput!
    $condition: ModelStockUniverseConditionInput
  ) {
    deleteStockUniverse(input: $input, condition: $condition) {
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
export const createStockBucket = /* GraphQL */ `
  mutation CreateStockBucket(
    $input: CreateStockBucketInput!
    $condition: ModelStockBucketConditionInput
  ) {
    createStockBucket(input: $input, condition: $condition) {
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
export const updateStockBucket = /* GraphQL */ `
  mutation UpdateStockBucket(
    $input: UpdateStockBucketInput!
    $condition: ModelStockBucketConditionInput
  ) {
    updateStockBucket(input: $input, condition: $condition) {
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
export const deleteStockBucket = /* GraphQL */ `
  mutation DeleteStockBucket(
    $input: DeleteStockBucketInput!
    $condition: ModelStockBucketConditionInput
  ) {
    deleteStockBucket(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
