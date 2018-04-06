/* starter level, see below for real quiz

(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion =
    function() {
      console.log(this.question);

      for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
      }
  }

  Question.prototype.checkAnswer =
  function(ans) {
    if (ans === this.correct) {
      console.log('Correct answer!');
    } else {
        console.log('Wrong answer, please try again :)');
    }
  }

  var q1 = new Question('Has there ever been an African American president in the United States?',
  ['Yes', 'No'], 0);

  var q2 = new Question('When was Easter this year?',
  ['March', 'April', 'May'], 1);

  var q3 = new Question ('What happened with Christmas?',
  ['Jesus died','Jesus resurrected', 'Jesus was born'], 2);

  var questions = [q1, q2, q3];

  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  var answer = parseInt(prompt('Please select the correct answer.'));

  questions[n].checkAnswer(answer);

})();

*/

// real quiz material

(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;

        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }


    var q1 = new Question('Has there ever been an African American president in the United States?',
    ['Yes', 'No'], 0);

    var q2 = new Question('When was Easter this year?',
    ['March', 'April', 'May'], 1);


    var q3 = new Question ('What are we celebrating with Christmas?',
    ['Jesus died','Jesus resurrected', 'Jesus was born'], 2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();


    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
          
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }

    nextQuestion();

})();
