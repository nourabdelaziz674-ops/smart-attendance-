let studentsData = {
    "NOUR_001": "Nour Ahmed",
    "MARI_002": "Mariam Ali",
    "ZEIN_003": "Zeina Ahmed"
};
let students = 0;
let presentStudents = [];

function startScanner() {

    const scanner = new Html5Qrcode("reader");

    scanner.start(
        { facingMode: "environment" },

        {
            fps: 10,
            qrbox: 250
        },

        function(decodedText) {
let studentData = decodedText.split("|");

let studentName = studentData[0];
let studentGroup = studentData[1];
            if (presentStudents.includes(decodedText)) {

                alert("This student is already present!");

                scanner.stop();

                return;
            }

            presentStudents.push(decodedText);
let list = document.getElementById("attendanceList");

let student = document.createElement("li");

let time = new Date().toLocaleTimeString();


   student.textContent =
    studentName + " | Group: " + studentGroup + " | " + time;

list.appendChild(student);

function endAttendance() {
    alert("Attendance has ended!");
}

list.appendChild(student);
            students++;

            document.getElementById("studentCount").textContent =
                students + " Students";

            document.getElementById("studentName").textContent =
                decodedText;

            document.getElementById("attendanceTime").textContent =
                "Attendance recorded successfully!";

            scanner.stop();
        }
    )
    .catch(function(error) {
        console.log("Camera error:", error);
    });
}
