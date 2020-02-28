// Programmatically calculate Pixel's age
const now = moment(new Date());
const end = moment("2018-06-11");
const duration = moment.duration(now.diff(end));
document.getElementById("pixel-age").innerText = parseInt(duration.asYears());
