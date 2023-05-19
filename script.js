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
  //print month & year
  var month = this.value;
  var year = new Date().getFullYear();
  var date = month + " " + year
  document.getElementById("month").innerHTML = date;
  //get first day of week
  var firstDay = new Date(date).getDay();
  //get max days in month
  var lastDay = new Date(year, months.indexOf(month)+1, 0).getDate();
});
