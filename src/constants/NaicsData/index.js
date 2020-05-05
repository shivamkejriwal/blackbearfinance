import * as AccommodationAndFood from './AccommodationAndFood';
import * as Agriculture from './Agriculture';
import * as ArtsAndEntertainment from './ArtsAndEntertainment';
import * as CivicOrganizations from './CivicOrganizations';
import * as Construction from './Construction';
import * as EducationalServices from './EducationalServices';
import * as FinanceAndInsurance from './FinanceAndInsurance';
import * as HealthCare from './HealthCare';
import * as HoldingCompanies from './HoldingCompanies';
import * as Information from './Information';
import * as Manufacturing from './Manufacturing';
import * as Mining from './Mining';
import * as OtherServices from './OtherServices';
import * as ProfessionalServices from './ProfessionalServices';
import * as RealEstate from './RealEstate';
import * as RetailTrade from './RetailTrade';
import * as TransportationAndWarehousing from './TransportationAndWarehousing';
import * as Utilities from './Utilities';
import * as WasteManagement from './WasteManagement';
import * as WholesaleTrade from './WholesaleTrade';


export const NaicsData = {
    [AccommodationAndFood.Name]: AccommodationAndFood.IncomeStatement,
    [Agriculture.Name]: Agriculture.IncomeStatement,
    [ArtsAndEntertainment.Name]: ArtsAndEntertainment.IncomeStatement,
    [CivicOrganizations.Name]: CivicOrganizations.IncomeStatement,
    [Construction.Name]: Construction.IncomeStatement,
    [EducationalServices.Name]: EducationalServices.IncomeStatement,
    [FinanceAndInsurance.Name]: FinanceAndInsurance.IncomeStatement,
    [HealthCare.Name]: HealthCare.IncomeStatement,
    // [HoldingCompanies.Name]: HoldingCompanies.IncomeStatement,
    [Information.Name]: Information.IncomeStatement,
    [Manufacturing.Name]: Manufacturing.IncomeStatement,
    [Mining.Name]: Mining.IncomeStatement,
    [OtherServices.Name]: OtherServices.IncomeStatement,
    [ProfessionalServices.Name]: ProfessionalServices.IncomeStatement,
    [RealEstate.Name]: RealEstate.IncomeStatement,
    [RetailTrade.Name]: RetailTrade.IncomeStatement,
    [TransportationAndWarehousing.Name]: TransportationAndWarehousing.IncomeStatement,
    [Utilities.Name]: Utilities.IncomeStatement,
    [WasteManagement.Name]: WasteManagement.IncomeStatement,
    [WholesaleTrade.Name]: WholesaleTrade.IncomeStatement
};

export const RequiredLineItems = [
    'Cost of goods sold',
    'Salaries and wages',
    'Rents paid',
    'Advertising',
    // 'Other Expenses',
    'Net Profit'
];

const getRounded = (value) => Number(Number.parseFloat(value).toFixed(2));

const getValue = (ratio, Revenue)=> {
    let value = Revenue * ratio * .01;
    value = getRounded(value);
    return Number(value);
};

export const getDerivedValues = (Classification, Revenue) => {
    const result = [];
    let totalExpense = 0;
    if (Classification && Revenue) {
        RequiredLineItems.forEach(lineItem => {
            const ratio = NaicsData[Classification][lineItem];
            const value = getValue(ratio, Revenue);
            totalExpense+=ratio;
            if(lineItem !== 'Net Profit') {
                result.push({
                    key: lineItem, 
                    value,
                    ratio
                });
            }
        });

        const leftOverExpense = 100 - totalExpense;
        result.push({
            key: 'Other Expenses', 
            value: getValue(leftOverExpense, Revenue),
            ratio: getRounded(leftOverExpense)
        });
    }
    return result;
}

export const getDerivedValuesFromIncome = (Classification, Income) => {
    const result = [];
    let totalExpense = 0;
    if (Classification && Income) {
        const incomeMultipler = Number(1/(NaicsData[Classification]['Net Profit']/100));
        const Revenue = getRounded(incomeMultipler * Income);
        console.log('[sk]getDerivedValuesFromIncome', {
            Income,
            incomeMultipler,
            Revenue
        });
        result.push({
            key: 'revenue', 
            value: Revenue,
            ratio: 100
        });
        RequiredLineItems.forEach(lineItem => {
            const ratio = NaicsData[Classification][lineItem];
            const value = getValue(ratio, Revenue);
            totalExpense+=ratio;
            result.push({
                key: lineItem, 
                value,
                ratio
            });
        });

        const leftOverExpense = 100 - totalExpense;
        result.push({
            key: 'Other Expenses', 
            value: getValue(leftOverExpense, Revenue),
            ratio: getRounded(leftOverExpense)
        });
    }
    return result;
}