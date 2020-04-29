export const getCurrentTime = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const hour = today.getHours();
    const dateString = `${year}-${month}-${day}-${hour}`;

    return {
       day, month, year, dateString
    } 
}