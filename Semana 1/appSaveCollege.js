let students = [
    {
        name: "Emanuel",
        height: 1.60,
        age: 22,
        genre: "male",
        classroom: "Trindade",
        mathGrade: 9,

    },
    {
        name: "Rafael",
        height: 1.72,
        age: 20,
        genre: "male",
        classroom: "Trindade",
        mathGrade: 7.5,
    },
    {
        name: "Carlos",
        height: 1.86,
        age: 27,
        genre: "male",
        classroom: "Trindade",
        mathGrade: 6.2,
    },
    {
        name: "Luiza",
        height: 1.54,
        age: 25,
        genre: "female",
        classroom: "Trindade",
        mathGrade: 8,
    },
    {
        name: "Juliana",
        height: 1.68,
        age: 23,
        genre: "female",
        classroom: "Trindade",
        mathGrade: 5.5,
    },
];

    var size = students.length;
    var sumOfScores = 0;

    for (index = 0; index<= (size -1); index++) {
    console.log(students[index].name); 
    sumOfScores += students[index].mathGrade;
    }

    let averageOfStudents = sumOfScores / size;
    
    console.log(`A média dos alunos é ${averageOfStudents}`);

    for (index = 0; index<= 4; index++) {
        if (students[index].mathGrade >= 7){
            console.log(`${students[index].name} foi APROVADO`)
        }
        else {
            console.log(`${students[index].name} foi REPROVADO`)
        }
    }