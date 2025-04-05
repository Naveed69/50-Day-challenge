let dayInEle = document.getElementById("dayIn");
let monthInEle = document.getElementById("monthIn");
let yearInEle = document.getElementById("yearIn");

let dayerror = document.getElementById("dayError");
let montherror = document.getElementById("monthError");
let yearerror = document.getElementById("yearError");

dayInEle.addEventListener("blur", () => {
  if (dayInEle.value == "") {
    dayerror.innerText = "This field is required";
    return;
  } else if (dayInEle.value > 31 || dayInEle.value < 1) {
    dayerror.innerText = "Must be a valid day";
  } else {
    dayerror.innerText = "";
  }
});

monthInEle.addEventListener("blur", () => {
  if (monthInEle.value == "") {
    montherror.innerText = "This field is required";
    return;
  }
  if (monthInEle.value > 12 || dayInEle.value < 0) {
    montherror.innerText = "Must be a valid month";
  } else {
    montherror.innerText = "";
  }
});

yearInEle.addEventListener("blur", () => {
  let date = new Date(yearInEle.value, monthInEle.value - 1, dayInEle.value);
  if (yearInEle.value == "") {
    yearerror.innerText = "This field is required";
    return;
  }
  const todayDate = new Date();
  if (todayDate < date) {
    yearerror.innerText = "Must be in past";
  } else {
    yearerror.innerText = "";
  }
});

let yearOut = document.getElementById("yearOut");
let monthOut = document.getElementById("monthOut");
let dayOut = document.getElementById("dayOut");

function errorHandle() {
  let day = parseInt(dayInEle.value);
  let month = parseInt(monthInEle.value) - 1;
  let year = parseInt(yearInEle.value);

  // Check for basic validity
  let inputDate = new Date(year, month, day);
  let today = new Date();

  if (
    dayInEle.value > 31 ||
    dayInEle.value < 1 ||
    monthInEle.value > 11 ||
    monthInEle.value < 0 ||
    inputDate > today
  ) {
    yearOut.innerText = "--";
    monthOut.innerText = "--";
    dayOut.innerText = "--";
    return;
  }

  let ageYears = today.getFullYear() - year;
  let ageMonths = today.getMonth() - month;
  let ageDays = Math.abs(today.getDate() - day);
  console.log(ageDays, "-", ageMonths, "-", ageYears);

  yearOut.innerText = ageYears;
  monthOut.innerText = ageMonths;
  dayOut.innerText = ageDays;
}

document.getElementById("calculateBtn").addEventListener("click", errorHandle);
