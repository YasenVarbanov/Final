// Select the elements and add event listeners

const addRecordButton = document.getElementById('add');
addRecordButton.addEventListener('click', addRecordToLocalStorage);

// Function to add record to local storage
function addRecordToLocalStorage() {
  const name = document.getElementById("Name").value;
  const image = document.getElementById("profImg").value;
  const tel = document.getElementById("Tel").value;
  const email = document.getElementById("Email").value;
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;
  const daysLeft = document.getElementById("days-left").value;
  const mentor = document.getElementById("mentor").value;

  const interns = JSON.parse(localStorage.getItem('interns')) || {};

  interns[name] = {
    image,
    tel,
    email,
    startDate,
    endDate,
    daysLeft,
    mentor
  };

  localStorage.setItem('interns', JSON.stringify(interns));
  console.table(interns);
}
document.getElementById('table').innerHTML = interns;
