class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    evaluateGrade() {
        let average = this.calculateAverage();

        if (average >= 90) return "A";
        else if (average >= 80) return "B";
        else if (average >= 70) return "C";
        else if (average >= 60) return "D";
        else return "E";
    }

    finalResult() {
        let average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج متابعة";
        }
    }
}

// Create 4 students
let students = [
    new Student(1, "Ahmed", [80, 90, 85], 90),
    new Student(2, "Mona", [70, 75, 80], 85),
    new Student(3, "Ali", [40, 45, 50], 60),
    new Student(4, "Sara", [95, 90, 100], 95)
];

// Display student information
students.forEach(student => {
    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.evaluateGrade());
    console.log("Result:", student.finalResult());
    console.log("------------------");
});

// filter: passed students
let passedStudents = students.filter(student =>
    student.finalResult() === "ناجح"
);

console.log("Passed Students:", passedStudents.map(s => s.name));

// map: student names and averages
let studentAverages = students.map(student => ({
    name: student.name,
    average: student.calculateAverage()
}));

console.log("Student Averages:", studentAverages);

// reduce: calculate class average
let totalAverages = students.reduce((sum, student) =>
    sum + student.calculateAverage(), 0
);

let classAverage = totalAverages / students.length;

console.log("Class Average:", classAverage);
