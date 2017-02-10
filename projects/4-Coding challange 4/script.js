/*
-- let's build a fun quiz game in the console---

1. build a function constructor called question to desribe a question. A question should include:
a. question itself
b. the answer from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c. correct answer (i would use a number for this)

2. create a couple of questions using the constructor

3. store them all inside an array

4. select one random question and log it on the console, together with the possible answers (each question should have a number (hint: write a method for the question object for this task)).

5. use the ' prompt' function to ask the user fo the correct answer. The user should input the number of the correct answer such as you displayed on task 4.

6. check if the answer is correct and print to the console wether the answer is correct or not (hint: write another method for this)

7. suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't intefere with the other programmers code (hint: we learned a special technique to do exactly that IIFE, right?:) 

*/

/*
1. build a function constructor called question to desribe a question. A question should include:
a. question itself
b. the answer from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c. correct answer (i would use a number for this)
*/

/*
braindump, vraag, antwoord is ja en nee, ja = 0 nee is 1

*/
// create the function constructor "question"
function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
};

// create 3 questions
var q1 = new Question('Is JavaScript the coolest programming language in the world? ', ['Yes', 'No'], 0);
var q2 = new Question('What is the name of the courses\'s teacher? ', ['Brian', 'Michael', 'Jonas'], 3);
var q3 = new Question('What is the best IDE for Javascript', ['Brackets', 'Atom', 'VSCode'], 3);

// store the questions in an array

var questions = [q1, q2, q3];

// 4. select one random question and log it on the console, together with the possible answers (each question should have a number (hint: write a method for the question object for this task)).

Question.prototype.randomQuestion = function() {
    var randomNR = Math.round((Math.random() * 2));
    console.log(randomNR);
    console.log(questions[randomNR].question);
    console.log(questions[randomNR].answers);
};

q1.randomQuestion(questions);