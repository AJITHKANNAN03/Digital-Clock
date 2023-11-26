function clock(){

    var today=new Date();

    var hours=today.getHours();
    var minutes=today.getMinutes();
    var seconds=today.getSeconds();
    var period="AM";

     //  to setting 12 hours formt
     hours=hours>12?hours-12:hours;

    // to setting am/pm
    // here we are ternary operator for if else conditions
    period=hours>12?"PM":hours==12?"NOON":"AM";

// setting 0 in single digits
hours=hours<10?"0"+hours:hours;
minutes=minutes<10?"0"+minutes:minutes;
seconds=seconds<10?"0"+seconds:seconds;

    // insert values to the html tags
    document.querySelector(".hours").innerHTML=hours;
    document.querySelector(".miniutes").innerHTML=minutes;
    document.querySelector(".seconds").innerHTML=seconds;
    document.querySelector(".period").innerHTML=period;
}
var updateClock=setInterval(clock,1000);

function calender(){
    var today=new Date();

    const dateNumber=today.getDate();
    const monthName=today.toLocaleString("default",{month:"short"});
    const year=today.getFullYear();
    const dayName=today.toLocaleString("default",{weekday:"long"});

    document.querySelector(".date").innerHTML=dateNumber;
    document.querySelector(".month").innerHTML=monthName;
    document.querySelector(".year").innerHTML=year;
    document.querySelector(".day").innerHTML=dayName;
}
calender();