export default function daysToXmas(currentDate) {
    const stopDate = new Date("Dec 25, 2021");
    return Math.ceil((stopDate.getTime() - currentDate.getTime()) / 86400000);
}

console.log(daysToXmas(new Date("Dec 24, 2021 23:59:59")));
