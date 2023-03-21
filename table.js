
addRecordButton.addEventListener('click', table);

function table() {
  
  let myValue = localStorage.getItem('namee');
  let myObject = JSON.parse(myValue);
  
  
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');

// create table headers
let headers = ['Name', 'Image', 'Tel', 'Email', 'Start Date', 'End Date', 'Days Left', 'Mentor'];
let headerRow = document.createElement('tr');
for (let i = 0; i < headers.length; i++) {
  let header = document.createElement('th');
  header.innerText = headers[i];
  headerRow.appendChild(header);
}
thead.appendChild(headerRow);
table.appendChild(thead);

// create table body rows
for (let name in myObject) {
  let row = document.createElement('tr');

  let nameCell = document.createElement('td');
  nameCell.innerText = name;
  row.appendChild(nameCell);
  
  let imageCell = document.createElement('td');
  imageCell.innerHTML = `<img src="${myObject[name].image}" alt="${name}" />`;
  row.appendChild(imageCell);
  
  let telCell = document.createElement('td');
  telCell.innerText = myObject[name].tel;
  row.appendChild(telCell);

  let mailCell = document.createElement('td');
  mailCell.innerText = myObject[name].mail;
  row.appendChild(mailCell);
  
  let startCell = document.createElement('td');
  startCell.innerText = myObject[name].start;
  row.appendChild(startCell);
  
  let endCell = document.createElement('td');
  endCell.innerText = myObject[name].end;
  row.appendChild(endCell);
  
  let leftDaysCell = document.createElement('td');
  leftDaysCell.innerText = myObject[name].leftDays;
  row.appendChild(leftDaysCell);

  let mentorCell = document.createElement('td');
  mentorCell.innerText = myObject[name].mentor;
  row.appendChild(mentorCell);

  tbody.appendChild(row);
}
table.appendChild(tbody);

// add table to the page
let tableDiv = document.getElementById('table');
// tableDiv.innerHTML = '';
// tableDiv.appendChild(table);
}
document.addEventListener('DOMContentLoaded', () => {
  addRecordButton.addEventListener('click', table);
});





addRecordButton.addEventListener('click', openIndex);
function openIndex (){
  window.open("index.html");
}


