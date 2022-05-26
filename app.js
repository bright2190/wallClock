setInterval(change, 1000)


function change() {
    var d = new Date();
    var say = document.querySelector("[data-second-hand]");
    var secondstime = d.getSeconds();
    
    var secondsinstring = secondstime.toString();

    
    say.style.setProperty("--rotationseconds",secondstime);
    
    var day = document.querySelector("[data-minute-hand]")
    var minutestime = d.getMinutes();
    day.style.setProperty("--rotationminutes",minutestime)

    var fay = document.querySelector("[data-hour-hand]");
    var hourtime = d.getHours();
    fay.style.setProperty("--rotationhour", (hourtime % 12) + (minutestime / 60))

    
}