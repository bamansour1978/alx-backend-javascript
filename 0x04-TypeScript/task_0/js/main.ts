interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}


const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "City A"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "City B"
};


const studentsList: Student[] = [student1, student2];


document.addEventListener("DOMContentLoaded", function () {
  const table = document.createElement("table");
  const headerRow = table.insertRow(0);


  const firstNameHeader = document.createElement("th");
  firstNameHeader.textContent = "First Name";
  headerRow.appendChild(firstNameHeader);

  const locationHeader = document.createElement("th");
  locationHeader.textContent = "Location";
  headerRow.appendChild(locationHeader);


  studentsList.forEach((student, index) => {
    const row = table.insertRow(index + 1);


    const firstNameCell = row.insertCell(0);
    firstNameCell.textContent = student.firstName;

    const locationCell = row.insertCell(1);
    locationCell.textContent = student.location;
  });


  document.body.appendChild(table);
});

