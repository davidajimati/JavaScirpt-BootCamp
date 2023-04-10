let date = new Date()

function formateDate(date) {
    let day = date.getDate();
    let today = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    switch (today) {
        case 0:
            today = "Sunday";
            break;
        case 1:
            today = "Monday";
            break;
        case 2:
            today = "Tuesday";
            break;
        case 3:
            today = "Wednesday";
            break;
        case 4:
            today = "Thursday";
            break;
        case 5:
            today = "Friday";
            break;
        case 6:
            today = "Saturday";
            break;
    }

    switch (day) {
        case (1 | 21 | 31):
            day = `${day}st`;
            break;
        case (2 | 22):
            day = `${day}nd`;
            break;
        case (3 | 23):
            day = `${day}rd`;
            break;
        default:
            day = `${day}th`;
            break;
    }

    switch (month) {
        case 0:
            month = "January"
            break;
        case 2:
            month = "February"
            break;
        case 3:
            month = "March"
            break;
        case 4:
            month = "April"
            break;
        case 5:
            month = "May"
            break;
        case 6:
            month = "June"
            break;
        case 7:
            month = "July"
            break;
        case 8:
            month = "August"
            break;
        case 9:
            month = "September"
            break;
        case 10:
            month = "October"
            break;
        case 11:
            month = "November"
            break;
        case 0:
            month = "December"
            break;
    }

    return `${today} ${day} ${month}, ${year}`
}


let time = date.toLocaleTimeString()
let today = formateDate(date);

console.log(time)
console.log(today)

// let caller1 = setInterval(time, 10);
// let caller2 = setInterval(today, 1000);

