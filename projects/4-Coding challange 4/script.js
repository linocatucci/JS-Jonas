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

// create the function constructor "Question", create an object Question

// 7. suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't intefere with the other programmers code (hint: we learned a special technique to do exactly that IIFE, right?:) 
// IIFE function
/*
(function() {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };

    // create 3 questions
    var q1 = new Question('Is JavaScript the coolest programming language in the world? ', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of the courses\'s teacher? ', ['Brian', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What is the best IDE for Javascript', ['Brackets', 'Atom', 'VSCode'], 2);

    // store the questions in an array

    var questions = [q1, q2, q3];

    // random nr:
    var randomNR = Math.floor((Math.random() * questions.length));

    // 4. select one random question and log it on the console, together with the possible answers (each question should have a number (hint: write a method for the question object for this task)).

    Question.prototype.randomQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < questions[randomNR].answers.length; i++) {
            console.log('Antwoord ' + i + ' : ' + questions[randomNR].answers[i]);
        }
    };

    Question.prototype.checkAnswer = function(inputAnswer) {
        if (inputAnswer === this.correctAnswer) {
            console.log('Correct answer!');

        } else {
            console.log('Wrong answer, please try again!');
        }
    };

    questions[randomNR].randomQuestion();
    // convert a string to an integer number
    var inputAnswer = parseInt(prompt('Please select the correct answer (just type the number)'));

    questions[randomNR].checkAnswer(inputAnswer);
})();
*/
/*
EXPERT LEVEL QUIZ:

8. After you display the result, display the next random question, so that the game never ends (hint: write a function for this and 
    call it right after displaying the result).
    Call the function, nextQuestion and include all the game logic

9. Be careful: after task 8 the game literally never ends. So include the option to quite the game if the user writes "exit" instead of the answer. In this case don't call    the function from task 8

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score.

11. Display the score in the console. Use yet another method for this.

*/

// EXPERT LEVEL QUIZ:

(function() {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };

    // create 3 questions
    var q1 = new Question('Is JavaScript the coolest programming language in the world? ', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of the courses\'s teacher? ', ['Brian', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What is the best IDE for Javascript', ['Brackets', 'Atom', 'VSCode'], 2);


    // 4. select one random question and log it on the console, together with the possible answers (each question should have a number (hint: write a method for the question object for this task)).

    Question.prototype.randomQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log('Antwoord ' + i + ' : ' + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function(inputAnswer) {
        if (inputAnswer === this.correctAnswer) {
            console.log('Correct answer!');
            trackScore(true);
        } else {
            //console.log(inputAnswer);
            console.log('Wrong answer, please try again!');
            trackScore(false);
        }
    };
    // store the questions in an array
    // new function (nextQuestion) which does the game functionality: 

    var questions = [q1, q2, q3];
    var score = 0;

    function nextQuestion() {
        // random nr:
        var randomNR = Math.floor((Math.random() * questions.length));

        questions[randomNR].randomQuestion();
        // convert a string to an integer number
        var inputAnswer = prompt('Please select the correct answer (just type the number)');

        if (inputAnswer !== 'exit') {
            questions[randomNR].checkAnswer(parseInt(inputAnswer));
            nextQuestion();
        }
    }

    function trackScore(inputAnswer) {
        if (inputAnswer) {
            score = score + 1;
            console.log('Your score is : ' + score);
        } else {
            console.log('Your score is : ' + score);
        }
    };
    // intial call of the nextQuestion function
    nextQuestion();
    /* 8. After you display the result, display the next random question, so that the game never ends (hint: write a function for this and 
    call it right after displaying the result).
    Call the function, nextQuestion and include all the game logic
    */
})();