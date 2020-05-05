export const Months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

export const getCurrentTime = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const hour = today.getHours();
    const dateString = `${year}-${month}-${day}-${hour}`;
    const monthCode = Months[month];

    return {
       day, month, year, dateString,
       monthCode
    } 
}