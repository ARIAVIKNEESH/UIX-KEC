const student = {
    name: 'John Doe',
    age: 21,
    major: 'Computer Science'
};
const displayStudentDetails = (student) => {
    const detailsDiv = document.getElementById('student-details');
    detailsDiv.innerHTML = `
        <h2>Student Details</h2>
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Major:</strong> ${student.major}</p>
    `;
};
displayStudentDetails(student);