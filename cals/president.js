//[month, day, year, title, color]
calendars["pres"] = [
    "President Elections"
];
for (var i = 0; i < 40; i++) {
  elec_date = new Date(2021, 3, 28+(7*i));
  calendars["pres"].push([elec_date.getMonth(), elec_date.getDate(), elec_date.getFullYear(), "Election "+i.toString(), "blue"]);
};