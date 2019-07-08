$(document).ready(function() {

    var timeRemaining;
    var stopWatch;
    var currentQuestionIndex = -1;
    var correctAnswers = 0;
    var list = [];
    var skipped = 0;
    var averageTimes = []
    var locked = false;
    const maxTimeAllowed = 10;
    const maxQuestions = 10;
    var chosen;
    var isGameOver = true;

    // click start
    $('.item-start').on('click', function() {

        $(this).hide();
        $('.item-time').show();
        $('.item-question').show();
        $('.item-answer').show();
        // enable pointer
        $('#item-answer').removeClass('disabled');
        timeRemaining = maxTimeAllowed;
        $('#time-remaining').css('color' + 'black');
        var msg = 'Time Remaining: ' + Math.floor(timeRemaining/10) + timeRemaining%10 + ' seconds';
        $('#time-remaining').html(msg);
        startTheGame();
    });

    function startTheGame() {

        isGameOver = false;

        $('.item-restart').hide();

        correctAnswers = 0;

        timeRemaining = maxTimeAllowed;

        // clear the list
        list.length = 0;
        averageTimes.length = 0;

        skipped = 0;

        // get a random index
        currentQuestionIndex = getRandomNumber();
        
        // populate the question
        askTheQuestion(currentQuestionIndex);
    }

    function startTimer() {
        // start timer
        var msg = 'Time Remaining: ' + Math.floor(timeRemaining/10) + timeRemaining%10 + ' seconds';
        $('#time-remaining').html(msg);
        stopWatch = setInterval(function() {
            timeRemaining--;
            var msg = 'Time Remaining: ' + Math.floor(timeRemaining/10) + timeRemaining%10 + ' seconds';
            $('#time-remaining').html(msg);
            if (timeRemaining === 0) {
                msg = "Time's Up!";
                $('#time-remaining').html(msg);

                clearInterval(stopWatch);

                averageTimes.push(maxTimeAllowed - timeRemaining);

                skipped++;

                var id = '#' + chosen;
                $(id).css('background-color', 'white');

                // show the correct answer and move on
                id = '#' + quiz[currentQuestionIndex].answer;
                $(id).css('background-color', 'green');
                locked = true;

                setTimeout(function() {
                    locked = false;

                    var id = '#' + quiz[currentQuestionIndex].answer;
                    $(id).css('background-color', 'white');

                    timeRemaining = maxTimeAllowed;

                    // max number of questions reached
                    if (list.length === maxQuestions) {
                        gameOver();
                    } else {    
                        // get a random index
                        currentQuestionIndex = getRandomNumber();
                        
                        // populate the question
                        askTheQuestion(currentQuestionIndex);
                    }
                }, 3000);
            }
            // change colors
            if (timeRemaining <= 5) {
                $('#time-remaining').css('color' , 'red');
            }
            
        }, 1000);
    }

    function getRandomNumber() {
        var rnd = Math.floor(Math.random() * quiz.length);
        if (!found(rnd)) {
            list.push(rnd);
            currentQuestionIndex = rnd;
            return rnd;
        }
        return getRandomNumber();
    }

    function askTheQuestion (index) {
        // Display the question
        $('.item-question').text(quiz[index].question);
        // display the answers
        var id;
        for (var i=1; i<=4; i++) {
            id = '#answer' + i; 
            $(id).css({'border': '1px solid black'});    
            if (quiz[index].answers[i-1].length !== 0) {
                $(id).show();
                $(id).text(quiz[index].answers[i-1]);
            } else {
                $(id).hide();
            }
        }

        $('#time-remaining').css('color' , 'black');
        // disable pointer
        $('#item-answer').removeClass('disabled');
        
        // start timer
        setTimeout(function() {
            startTimer();
        }, 100);        
    }

    $('#answer1, #answer2, #answer3, #answer4').hover(function(){
            if (!locked && !isGameOver) {
                $(this).css({"background-color" : "lightblue", "cursor" : "pointer"});
            } else {
                $(this).css({"cursor" : "default"});
            }
        }, function(){
            if (!locked) {
                $(this).css({"background-color" : "white", "cursor" : "pointer"});
            } else {
                $(this).css({"cursor" : "default"});
            }        
    });

    // click on answer
    $('#answer1, #answer2, #answer3, #answer4').on('click', function() {

        if (locked) {
            return;
        }

        chosen = this.id;

        averageTimes.push(maxTimeAllowed - timeRemaining);

        var wait = 3000;

        if (quiz[currentQuestionIndex].answer === this.id) {
            // correct answer
            correctAnswers++;
            wait = 0;
        } else {
            locked = true;

            var id = '#' + chosen;
            $(id).css('background-color', 'white');
            // show the correct answer and move on
            id = '#' + quiz[currentQuestionIndex].answer;
            $(id).css('background-color', 'green');

        }
        clearInterval(stopWatch);
        setTimeout(function() {
            locked = false;

            var id = '#' + quiz[currentQuestionIndex].answer;
            $(id).css('background-color', 'white');
            id = '#' + chosen;
            $(id).css('background-color', 'white');
        // max number of questions reached
            if (list.length === maxQuestions) {
                gameOver();
            } else {
                // next
                // clear timer
                timeRemaining = maxTimeAllowed;                

                // get a random index
                currentQuestionIndex = getRandomNumber();
                
                // populate the question
                askTheQuestion(currentQuestionIndex);
            }
        }, wait);
    });

    function gameOver() {

        isGameOver = true;

        clearInterval(stopWatch);

        $('#time-remaining').css('color' , 'black');
        var msg = 'Game Over!';
        $('#time-remaining').html(msg);

        // finished
        
        // display results
        $('.item-question').text('Your results:');
        $('#answer1').css('border', '0px');
        $('#answer2').css('border', '0px');
        $('#answer3').css('border', '0px');
        $('#answer4').css('border', '0px');
        
        $('#answer1').show();
        $('#answer1').text('Correct Answers: ' + correctAnswers);

        $('#answer2').show();
        var wrong = maxQuestions - (skipped + correctAnswers);
        $('#answer2').text('Wrong Answers: ' + wrong);

        $('#answer3').show();
        $('#answer3').text('Skipped: ' + skipped);

        $('#answer4').show();
        console.log(averageTimes);
        var total = averageTimes.reduce((previous, current) => current += previous);
        var average = total / averageTimes.length;
        $('#answer4').text('Average Time: ' + Math.floor(average) + ' seconds');


        $('.item-restart').show();
    }

    $('.item-restart').on('click', function() {
        $(this).hide();
        $('.item-time').show();
        $('.item-question').show();
        $('.item-answer').show();
        timeRemaining = maxTimeAllowed;
        $('#time-remaining').css('color' + 'black');
        var msg = 'Time Remaining: ' + Math.floor(timeRemaining/10) + timeRemaining%10 + ' seconds';
        $('#time-remaining').html(msg);
        startTheGame();
    });

    function found(value) {
        for (var i=0; i<list.length; i++) {
            if (value === list[i]) {
                return true;
            }
        }
        return false;
    }
});