export const formarttime = (time) => {
    let differtime = time;
    let day = Math.floor(differtime / (60 * 60 * 24));
    day = day >= 10 ? day : "0" + day;
    let hour = Math.floor((differtime / (60 * 60)) % 24);
    hour = hour >= 10 ? hour : "0" + hour;
    let minute = Math.floor((differtime / 60) % 60);
    minute = minute >= 10 ? minute : "0" + minute;
    let second = Math.floor(differtime % 60);
    second = second >= 10 ? second : "0" + second;
    return {
        day: day,
        hour: hour,
        minute: minute,
        second: second,
    };
}