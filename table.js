function table() {

  let table = document.createElement("table");

  // Създаваме заглавния ред на таблицата
  let headerRow = table.insertRow();
  let headers = ["Name", "Image", "Tel", "Email", "Start Date", "End Date", "Days Left", "Mentor"];
  for (let i = 0; i < headers.length; i++) {
    let headerCell = headerRow.insertCell();
    headerCell.textContent = headers[i];
  }

  // Добавяме таблицата в HTML документа
  let tableContainer = document.getElementById("table-container");
  // tableContainer.appendChild(table);

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

    myObject[namee] = {
      image: image,
      tel: tel,
      mail: mail,
      start: start,
      end: end,
      leftDays: leftDays,
      mentor: mentor
    };

    let myObj_serialized = JSON.stringify(myObject);
    localStorage.setItem('myObject', myObj_serialized);
    myObj_serialized = JSON.parse(localStorage.getItem('myObject'));
    myObject = JSON.parse(myObj_serialized);

    // document.body.addEventListener("click", (e) => {
    //   let el = e.target;
    //   if (el.classList.contains("myData")) {
    //     let data = {};
    //     for (var d in el.dataset)
    //       data["data-" + d] = el.dataset[d]
    //     savedDate.push(data)
    //   }
    //   localStorage.setItem("saved", JSON.stringify(savedDate))
    // });



    // Добавяме новия ред в таблицата
    let newRow = table.insertRow();
    let nameCell = newRow.insertCell();
    nameCell.textContent = namee;
    let imageCell = newRow.insertCell();
    imageCell.textContent = image;
    let telCell = newRow.insertCell();
    telCell.textContent = tel;
    let mailCell = newRow.insertCell();
    mailCell.textContent = mail;
    let startCell = newRow.insertCell();
    startCell.textContent = start;
    let endCell = newRow.insertCell();
    endCell.textContent = end;
    let leftDaysCell = newRow.insertCell();
    leftDaysCell.textContent = leftDays;
    let mentorCell = newRow.insertCell();
    mentorCell.textContent = mentor;
  }
}
