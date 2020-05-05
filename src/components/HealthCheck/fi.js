import {
    Name,
    IncomeStatement,
    BalanceSheet,
    Ratios
} from './data/b';
import { Logger } from '../../utils/logger';

export const foo = (ctx) => {
    const derived = {
        'Cost of goods sold': ctx.revenue * IncomeStatement['Cost of goods sold'] * .01,
        'Net Profit': ctx.revenue * IncomeStatement['Net Profit'] * .01
    };
    // provided NP < dervived NP -> worse
    // 
    
    Logger().log('fi-foo', {
        ctx,
        derived
    });
}