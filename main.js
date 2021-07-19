var day_els = [];
for (var i = 0; i < 6; i++) {
    for (var j = 1; j < 8; j++) {
        day_els.push(document.getElementById("cal_day_"+i+"_"+j));
    };
};

var date = new Date();
//date.setMonth(9);
var date2 = new Date(date.getTime());
date2.setDate(1);
var day_nums = [];
var weekday = date2.getDay();
var date3 = new Date(date.getFullYear(), date.getMonth()+1, 0);
var days_in_month = date3.getDate();
if (weekday <= 2) {
    for (var k = 0; k < 7+weekday; k++) {
        day_nums.push("");
    };
} else {
    for (var k = 0; k < weekday; k++) {
        day_nums.push("");
    };
};
for (var l = 0; l < days_in_month; l++) {
    day_nums.push((l+1).toString());
};
var remainder = 42-(day_nums.length);
for (var m = 0; m < remainder; m++) {
    day_nums.push("");
};
//for (n in day_els) {
//    n.innerText = day_nums[]
//}
for (var n = 0; n < 42; n++) {
    day_els[n].innerText = day_nums[n]
};

//<div style="text-align: center;">
//    <div style="width: 5px; height: 5px; background-color: green; margin: auto; display: inline-block"></div>
//    <div style="width: 5px; height: 5px; background-color: green; margin: auto; display: inline-block"></div>
//</div>