const marks = [90, 30, 40, 85, 75];
const passMark = 50;
const passMarks = marks.filter(num => num >= passMark);
const finalMarks = passMarks.map(num => num +5);
console.log(finalMarks);
