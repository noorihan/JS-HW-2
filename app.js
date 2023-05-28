/* Grading System
39 or below 39 = F
40 -44 = D
45 -49 = C
50 - 54 = C+
55-59 =B-
60-64 = B
65 - 69 = B+
70 - 74 = A-
75 - 79 = A
80 - 100 = A+
more than 100 = Invalid Result

 */
let marks = parseInt(prompt("Enter your Grade"));

if(marks<=39){
    document.write(`Your marks is ${marks} and your grade is F.`);
}
else if(marks>=40 && marks<=44){
    document.write(`Your marks is ${marks} and your grade is D.`);


}
else if(marks>=45 && marks<=49){
    document.write(`Your marks is ${marks} and your grade is C.`);


}
else if(marks>=50 && marks<=54){
    document.write(`Your marks is ${marks} and your grade is C+.`);
}
else if(marks>=55 && marks<=59){
    document.write(`Your marks is ${marks} and your grade is B-.`);

}
else if(marks>=60 && marks<=64){
    document.write(`Your marks is ${marks} and your grade is B.`);

}
else if(marks>=65 && marks<=69){
    document.write(`Your marks is ${marks} and your grade is B+.`);

}
else if(marks>=70 && marks<=74){
    document.write(`Your marks is ${marks} and your grade is A-.`);

}
else if(marks>=75 && marks<=79){
    document.write(`Your marks is ${marks} and your grade is A.`);

}
else if(marks>=80 && marks<=100){
    document.write(`Your marks is ${marks} and your grade is A+.`);

}
else{
   
        document.write(`Your marks is Invalid`);
    
}
