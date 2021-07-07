const curDate = document.getElementById("date");
let curTemp = document.getElementById("temp");
let curWeathercon = document.getElementById("weathericon")
const getCurrentDay = ()=>{
    var weekday = new Array(7);
    [
        weekday[0] = "sun",
        weekday[1] = "mon",
        weekday[2] = "tue",
        weekday[3] = "wed",
        weekday[4] = "thu",
        weekday[5] = "fri",
        weekday[6] = "sat",
    ]
     
    let currentDay = new Date();
    const day = weekday[currentDay.getDay()];
    return day;
    // console.log(weekday[currentDay.getDay()]);
};

const getCurrentTime = ()=>{
    var months = [
        "jan",
        "fab",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
    ];
    // console.log(months[6]);
    var currentTime = new Date();
    var month = months[currentTime.getMonth()];
    var date = currentTime.getDate();
    var hour = currentTime.getHours();
    var min = currentTime.getMinutes();

    let periods = "AM";
        if(hour > 11){
        periods = "PM";
        hour-=12;
    }
    if(hour < 10) hour="0"+hour;   
    if(min < 10)  min = "0"+min;

    return `${month} ${date} | ${hour}:${min} ${periods}`;
    // console.log(`${month} ${date} | ${hour}:${min} ${periods}`);
};
// getCurrentDay();
// getCurrentTime();
curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();