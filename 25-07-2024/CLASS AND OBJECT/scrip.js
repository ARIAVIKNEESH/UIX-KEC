class Student {
    constructor(id, name, age, grade) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getDetails() {
        return `ID: ${this.id}<br>Name: ${this.name}<br>Age: ${this.age}<br>Grade: ${this.grade}`;
    }
}
function displayStudentDetails(student) {
    const studentDetailsDiv = document.getElementById('student-details');
    const studentCard = document.createElement('div');
    studentCard.className = 'student-card';
    studentCard.innerHTML = student.getDetails();
    studentDetailsDiv.appendChild(studentCard);
}
const student1 = new Student(1, 'Aria', 20, 'A');
const student2 = new Student(2, 'Krithick', 21, 'K');
const student3 = new Student(3, 'Mohan', 22, 'M');
displayStudentDetails(student1);
displayStudentDetails(student2);
displayStudentDetails(student3);