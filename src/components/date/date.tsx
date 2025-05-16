export default function GetDate(separator='') {
    let date: Date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${day}`
}