export const getCurrentTime = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const dateString = `${year}-${month}-${day}`;

    return {
       day, month, year, dateString
    } 
}