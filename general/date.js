// Date object is used to work with dates

// let date = new Date()
// let year = date.getFullYear()
// let month = date.getMonth()
// let today_date = date.getDate()
// let dayOfWeek = date.getDay()

// date = date.toLocaleString()
// console.log(dayOfWeek);

let date = new Date(2023, 3, 10, 12, 1)

function formatDate(date) {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()

    console.log(`${day}-${month}-${year}`)
}

function formatTime(date) {
    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()
    let am_pm = hour >= 12 ? "pm":"am";

    hour %= 12 || 12

    console.log(`${hour}:${minute}:${seconds} ${am_pm}`)
}

formatTime(date);
formatDate(date);
