export function currentTime() {
    var offset = new Date().getTimezoneOffset();// getting offset to make time in gmt+0 zone (UTC) (for gmt+5 offset comes as -300 minutes)
    var date = new Date();
    date.setMinutes(date.getMinutes() + offset);// date now in UTC time

    var easternTimeOffset = -240; //for dayLight saving, Eastern time become 4 hours behind UTC thats why its offset is -4x60 = -240 minutes. So when Day light is not active the offset will be -300
    date.setMinutes(date.getMinutes() + easternTimeOffset);

    return date;
}

export function getTodayDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var todayStr: string = yyyy + "-" + mm + "-" + dd;

    return todayStr;
}

export function getDateAfter(days: number) {
    var today = new Date();
    today.setDate(today.getDate() + days);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var todayStr: string = yyyy + "-" + mm + "-" + dd;

    return todayStr;
}