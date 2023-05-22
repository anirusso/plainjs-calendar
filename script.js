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
  var year = new Date().getFullYear();
  var date = month + " " + year
  document.getElementById("month").innerHTML = date;
  //get first day of week
  var firstDay = new Date(date).getDay();
  //get max days in month
  var lastDay = new Date(year, months.indexOf(month)+1, 0).getDate();
  //print calendar days

  var weeks = document.getElementById("weeks");
  day = 1;
  for (let i = 0; i < lastDay; i++) {
    if (i % 7 == 0) {
      var week = document.createElement("div");
      week.classList.add('flex-container');
      weeks.appendChild(week);
    }
    var square = document.createElement("div");
    if (day >= firstDay) {
      square.innerHTML = day;
    }
    else {
      square.innerHTML = "";
      day++;
    }
    week.appendChild(square);
  }

});
