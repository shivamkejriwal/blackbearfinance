export const getCurrentTime = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const dateString = `${month}-${day}-${year}`;

    return {
       day, month, year, dateString
    } 
}