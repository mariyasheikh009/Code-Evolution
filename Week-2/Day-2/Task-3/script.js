
function processScores() {
  const scores = [45, 80, 90, 35, 60, 75];

  const passingScores = scores.filter(score => score >= 50);

  const bonusScores = passingScores.map(score => score + 10);

  const totalScore = bonusScores.reduce((total, score) => total + score, 0);

  console.log("Original Scores:", scores);
  console.log("Passing Scores:", passingScores);
  console.log("Bonus Scores:", bonusScores);
  console.log("Total Score:", totalScore);
}


//  MINI CHALLENGE – STUDENT SCORE ANALYZER
function studentAnalyzer() {
  const students = [
    { name: "Aman", marks: 85 },
    { name: "Sara", marks: 42 },
    { name: "Riya", marks: 68 },
    { name: "John", marks: 49 }
  ];

  // 1. Filter passed students (>=50)
  const passedStudents = students.filter(student => student.marks >= 50);

  // 2. Add +5 bonus marks
  const finalScores = passedStudents.map(student => {
    return {
      name: student.name,
      finalMarks: student.marks + 5
    };
  });

  // 3. Log each student's final score
  finalScores.forEach(student => {
    console.log(student.name + ": " + student.finalMarks);
  });

  // 4. Calculate class average
  const total = finalScores.reduce((sum, student) => sum + student.finalMarks, 0);
  const average = total / finalScores.length;

  console.log("Class Average:", average);
}
