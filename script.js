const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var select = document.getElementById("selectMonth");

months.forEach(function (item, index) {
  var opt = document.createElement("option");
  opt.textContent = item;
  opt.value = item;
  select.appendChild(opt);
});

let field = document.querySelector('#selectMonth');
field.addEventListener('change', function () {
  const myNode = document.getElementById("weeks");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
  //print month & year
  var month = this.value;
  var monthNum = months.indexOf(month);
  var year = new Date().getFullYear();
  document.getElementById("month").innerHTML = month + " " + year;
  //get first day of week
  firstDay = new Date(year, monthNum).getDay();
  //get max days in month
  var lastDay = new Date(year, monthNum+1, 0).getDate();
  //print calendar days
  var weeks = document.getElementById("weeks");
  day = 1;
  squares = 0;
  for (let i = 0; i < firstDay+lastDay; i++) {
    if (i % 7 == 0) {
      //create week row
      var week = document.createElement("div");
      week.classList.add('flex-container');
      weeks.appendChild(week);
    }
    var square = document.createElement("div");
    if (i >= firstDay) {
      square.innerHTML = day;
      day++;
      square.classList.add('day');
    }
    else {
      square.innerHTML = "";
    }
    week.appendChild(square);
    squares++;
  }
  while (squares % 7 != 0) {
    square = document.createElement("div");
    square.innerHTML = "";
    week.appendChild(square);
    squares++;
  }

  let days = document.getElementsByClassName("day");
  for (let day of days) {
    day.addEventListener('click', function () {
      let e = prompt("Enter event for the day: ");
      day.innerHTML = day.innerHTML + "<br>" + e;
    });
  }
});
