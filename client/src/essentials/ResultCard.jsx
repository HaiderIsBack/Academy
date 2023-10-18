export default function ResultCard(props) {
    const student = props.student
    const stud_marks = parseInt(student.marks)
    const percentage = Math.round(stud_marks / 1100 * 100)
    var grade = ''
    if (percentage >= 85) {
        grade = 'A+'
    } else if (percentage >= 80 && percentage < 85) {
        grade = 'A'
    } else if (percentage >= 70 && percentage < 80) {
        grade = 'B+'
    } else if (percentage >= 60 && percentage < 70) {
        grade = 'B'
    } else if (percentage >= 50 && percentage < 60) {
        grade = 'C+'
    } else if (percentage >= 40 && percentage < 50) {
        grade = 'C'
    } else if (percentage < 40) {
        grade = 'F'
    }

    return <>
        <div className="home-result-card">
            <div className="head">
                <h4>{student.Class} | {student.year}</h4>
            </div>
            <div className="middle">
                {grade}
            </div>
            <div className="marks-section">
                {student.marks} / 1100
            </div>
            <div className="student-name">
                {student.name}
            </div>
            <div className="foot">
                <h4>{student.roll}</h4>
            </div>
        </div>
    </>
}