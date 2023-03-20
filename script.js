let addButon = document.querySelector('.addIntern');
addButon.addEventListener('click', function() {
  window.open("file:///C:/Users/User/Desktop/FinalTaskFrontEnd/addRecord.html");
});
let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', table);

function locale() {
  let namee = document.getElementById("Name").value;
  let image = document.getElementById("profImg").value;

  let tel = document.getElementById("Tel").value;
  let mail = document.getElementById("Email").value;
  let start = document.getElementById("start-date").value;
  let end = document.getElementById("end-date").value;
  let leftDays = document.getElementById("days-left").value;
  let mentor = document.getElementById("mentor").value;

  let myObject = {};

  let localStorage = window.localStorage;
  let myValue = localStorage.getItem('namee');
  
  if (myValue) {
    myObject = JSON.parse(myValue);
  }

  myObject[namee] = {
    image: image,
    tel: tel,
    mail: mail,
    start: start,
    end: end,
    leftDays: leftDays,
    mentor: mentor
  };

  localStorage.setItem('namee', JSON.stringify(myObject));
  console.log(myObject);

}

