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
    day_els[n].innerHTML = day_nums[n] + "<br /><div id='events_" + day_nums[n] +"' style='text-align: center;'><div class='event_rise'></div></div>"
};

//<div style="text-align: center;">
//    <div style="width: 5px; height: 5px; background-color: green; margin: auto; display: inline-block"></div>
//    <div style="width: 5px; height: 5px; background-color: green; margin: auto; display: inline-block"></div>
//</div>
var cyear = date.getFullYear();
var cmonth = date.getMonth()+1;
var checkholdEl = document.getElementById("checkbox_hold");
for (var o in calendars) {
    console.log("parsing " + o);
    checkholdEl.innerHTML += "<div class='togglebox'><input type='checkbox' checked id='toggle_" + o + "' name='" + o + "' value='" + o + "'><label for='toggle_" + o + "'> " + calendars[o][0] + "</label></div>";
    for (var p in calendars[o].slice(1)) {
        if ((calendars[o][parseInt(p)+1][0] != cmonth) | (calendars[o][parseInt(p)+1][2] != cyear)) {
        } else {
            var targetEl = document.getElementById("events_" + calendars[o][parseInt(p)+1][1].toString());
            
            if (targetEl.innerHTML != '<div class="event_rise"></div>') {
                targetEl.innerHTML += '<div class="event_spacer"></div><div class="event ' + o + '" style="background-color: ' + calendars[o][parseInt(p)+1][4] + ';" title="' + calendars[o][parseInt(p)+1][3] + '"></div>'
            } else {
                targetEl.innerHTML += '<div class="event ' + o + '" style="background-color: ' + calendars[o][parseInt(p)+1][4] + ';" title="' + calendars[o][parseInt(p)+1][3] + '"></div>'
            };
        };
    };
};
for (var q in calendars) {
    console.log("adding event listener to " + q)
    var checkEl = document.getElementById("toggle_" + q)
    checkEl.addEventListener("change", (event) => {
        if (event.target.checked == true) {
            var eventEls = document.getElementsByClassName(event.target.name);
            for (var q in eventEls) {
                var classes = eventEls[q].classList;
                if (classes) {classes.remove("hidden");};
            };
        } else {
            var eventEls = document.getElementsByClassName(event.target.name);
            for (var q in eventEls) {
                var classes = eventEls[q].classList;
                if (classes) {classes.add("hidden");};
            };
        };
    });
}