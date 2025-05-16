export default function GetDate(separator = '') {
    let date: Date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${day}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`
}

export function getDay(date: Date)
{
    return date.getDate();
}

export function getMonth(date: Date)
{
    return date.getMonth() + 1;
}

export function getYear(date: Date)
{
    return date.getFullYear();
}