import fs from 'fs';
import csv from 'csv-parser';
import { generateClient } from "aws-amplify/api";
import { Amplify } from 'aws-amplify';
import config from './src/amplifyconfiguration.json' assert { type: 'json' };
import { createStockUniverse } from './src/graphql/mutations.js';
import { listStockUniverses, getStockUniverse } from "./src/graphql/queries.js";
import { listStockBucketStockUniverses, getStockBucketStockUniverse } from "./src/graphql/queries.js";
import { listStockBuckets, getStockBucket } from "./src/graphql/queries.js";

Amplify.configure(config);

const client = generateClient();

const createNewStock = (stock) => {
            const newStock = client.graphql({
                    query: createStockUniverse,
                    variables: {
                        input: {
                        "name": stock['Name'],
                        "bse_code": stock['BSE Code'],
                        "nse_code": stock['NSE Code'],
                        "industry": stock['Industry'],
                        "current_price": stock['Current Price'],
                        "price_to_earning": stock['Price to Earning'],
                        "industry_pe": stock['Industry PE'],
                        "eps": stock['EPS'],
                        "promoter_holding": stock['Promoter holding'],
                        "debt_to_equity": stock['Debt to equity'],
                        "net_profit_latest_quarter": stock['Net Profit latest quarter'],
                        "yoy_quarterly_profit_growth": stock['YOY Quarterly profit growth'],
                        "sales_latest_quarter": stock['Sales latest quarter'],
                        "yoy_quarterly_sales_growth": stock['YOY Quarterly sales growth'],
                        "roce3yr_avg": stock['ROCE3yr avg'],
                        "return_on_capital_employed": stock['Return on capital employed'],
                        "opm": stock['OPM'],
                        "profit_after_tax": stock['Profit after tax'],
                        "sales": stock['Sales'],
                        "sales_growth_3years": stock['Sales growth 3Years'],
                        "sales_growth_5years": stock['Sales growth 5Years'],
                        "profit_growth": stock['Profit growth'],
                        "profit_growth_3years": stock['Profit growth 3Years'],
                        "profit_growth_5years": stock['Profit growth 5Years'],
                        "profit_growth_7years": stock['Profit growth 7Years'],
                        "profit_growth_10years": stock['Profit growth 10Years'],
                        "average_return_on_equity_5years": stock['Average return on equity 5Years'],
                        "average_return_on_equity_3years": stock['Average return on equity 3Years'],
                        "return_on_equity": stock['Return on equity'],
                        "return_over_1year": stock['Return over 1year'],
                        "return_over_3years": stock['Return over 3years'],
                        "return_over_5years": stock['Return over 5years'],
                        "return_on_assets": stock['Return on assets'],
                        "sales_growth": stock['Sales growth'],
                        "sales_preceding_year": stock['Sales preceding year'],
                        "sales_growth_7years": stock['Sales growth 7Years'],
                        "operating_profit_preceding_year": stock['Operating profit preceding year'],
                        "net_profit_last_year": stock['Net Profit last year'],
                        "sales_growth_10years": stock['Sales growth 10Years'],
                        "average_earnings_5year": stock['Average Earnings 5Year'],
                        "free_cash_flow_last_year": stock['Free cash flow last year'],
                        "free_cash_flow_preceding_year": stock['Free cash flow preceding year'],
                        "net_cash_flow_preceding_year": stock['Net cash flow preceding year'],
                        "free_acash_flow_3years": stock['Free cash flow 3years'],
                        "average_return_on_capital_employed_3years": stock['Average return on capital employed 3Years'],
                        "average_return_on_capital_employed_5years": stock['Average return on capital employed 5Years'],
                        "dividend_yield": stock['Dividend yield'],
                        "operating_cash_flow_3years": stock['Operating cash flow 3years'],
                        "operating_cash_flow_5years": stock['Operating cash flow 5years'],
                        "operating_cash_flow_7years": stock['Operating cash flow 7years'],
                        "price_to_book_value": stock['Price to book value'],
                        "return_over_6months": stock['Return over 6months']
                    }
                    }
                });
return newStock;
};

const importData = async () => {
    const results = [];
    let count = 1;
    fs.createReadStream('stock-universe.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            for (const item of results) {
                try {
                    console.log('************************');
                    // const newStock = await createNewStock(item);
                    console.log(`Stock successfully created: ${count}`);
                    // console.log(newStock.data.createStockUniverse.id);
                    count += 1;
                } catch (error) {
                    console.error(`Error saving ${JSON.stringify(item)}: ${error}`);
                }
            }
            console.log(`Total Stocks Created: ${count}`);
        });

};

// importData();
// createNewStock();

const allStocks = async () => {
    let allStockUniverses = [];
    let nextToken = null;

    do {
        const result = await client.graphql({
            query: listStockUniverses,
            variables: { nextToken }
        });

        allStockUniverses = allStockUniverses.concat(result.data.listStockUniverses.items);
        const data = allStockUniverses[0];
        // console.log(data);
        nextToken = result.data.listStockUniverses.nextToken;
    } while (nextToken);

    const totalStocks = allStockUniverses.length;
    console.log(`Complete Stocks: ${totalStocks}`);
}

// allStocks();

// all stockbucketstockuniverse ( The many to many associations table )

// List all items
const allStockBucketStockUniverses = await client.graphql({
    query: listStockBucketStockUniverses
});
// console.log(allStockBucketStockUniverses);

// all stock buckets 

// List all items
const allStockBuckets = await client.graphql({
    query: listStockBuckets
});
console.log(allStockBuckets.data.listStockBuckets);