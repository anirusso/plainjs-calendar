let addEvent = (day) => {
  let num = day.childElementCount
  if (num <= 2) {
    let event = prompt("Enter event for the day: ");
    if (event) {
      let newEvent = document.createElement("div");
      newEvent.classList.add('event');
      newEvent.innerHTML = event;
      newEvent.addEventListener('click', function(e) {
        deleteEvent(this);
        e.stopPropagation();
      });
      day.appendChild(newEvent);
    }
  }
}

let deleteEvent = (day) => {
  let del = confirm("Delete event?");
  if (del) {
    day.remove();
  }
}

//create dropdown list of months
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var select = document.getElementById("selectMonth");
months.forEach(function (item, index) {
  var opt = document.createElement("option");
  opt.textContent = item;
  opt.value = item;
  select.appendChild(opt);
});

//populate calendar with days
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
      var num = document.createElement("p");
      num.innerHTML = day;
      day++;
      square.appendChild(num);
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
    week.appendChild(square);
    squares++;
  }

  //add event to day
  let days = document.getElementsByClassName("day");
  for (let day of days) {
    day.addEventListener('click', function(e) {
      addEvent(this);
    });
  }
});
