/* jshint esversion: 6 */

/* 
   Boxing Quiz - script.js
   Custom JavaScript written for the Boxing Quiz project.
   Question data created specifically for this project.
   Bootstrap 5 used for responsive layout - https://getbootstrap.com
*/

// Wait for the page to fully load before running any code
document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // Question Data
    // Each question has a question, 4 options and a correct answer
    // =========================================

    const rookieQuestions = [
        {
            question: "What are the large padded gloves used in boxing called?",
            options: ["Fighting gloves", "Boxing gloves", "Punch mitts", "Sparring pads"],
            correct: "Boxing gloves"
        },
        {
            question: "How many rounds are in a standard world championship boxing match?",
            options: ["10", "15", "12", "8"],
            correct: "12"
        },
        {
            question: "What is it called when a boxer is knocked down and cannot get up before the referee counts to 10?",
            options: ["A knockout", "A submission", "A stoppage", "A forfeit"],
            correct: "A knockout"
        },
        {
            question: "Which country did Muhammad Ali come from?",
            options: ["United Kingdom", "Jamaica", "United States", "Canada"],
            correct: "United States"
        },
        {
            question: "What is the name of the area where boxers fight?",
            options: ["The cage", "The ring", "The mat", "The arena"],
            correct: "The ring"
        },
        {
            question: "How many judges typically score a professional boxing match?",
            options: ["2", "4", "5", "3"],
            correct: "3"
        },
        {
            question: "What punch is thrown with the lead hand in a straight line?",
            options: ["Hook", "Uppercut", "Jab", "Cross"],
            correct: "Jab"
        },
        {
            question: "What does TKO stand for in boxing?",
            options: ["Total Knockout", "Technical Knockout", "Timed Knockout", "Temporary Knockout"],
            correct: "Technical Knockout"
        },
        {
            question: "Which of these is a famous boxing weight class?",
            options: ["Flyweight", "Birdweight", "Cloudweight", "Airweight"],
            correct: "Flyweight"
        },
        {
            question: "What do boxers wear to protect their heads during sparring?",
            options: ["A helmet", "A headguard", "A face shield", "A cap"],
            correct: "A headguard"
        }
    ];

    const contenderQuestions = [
        {
            question: "Who was known as 'The Greatest' in boxing?",
            options: ["Mike Tyson", "Muhammad Ali", "Sugar Ray Leonard", "Joe Frazier"],
            correct: "Muhammad Ali"
        },
        {
            question: "In which city did the famous 'Rumble in the Jungle' take place?",
            options: ["Lagos", "Nairobi", "Kinshasa", "Accra"],
            correct: "Kinshasa"
        },
        {
            question: "Which boxer was nicknamed 'Iron Mike'?",
            options: ["Lennox Lewis", "Evander Holyfield", "Mike Tyson", "George Foreman"],
            correct: "Mike Tyson"
        },
        {
            question: "What nationality is boxer Anthony Joshua?",
            options: ["American", "Jamaican", "Nigerian-British", "British"],
            correct: "British"
        },
        {
            question: "Which boxer bit off part of Evander Holyfield's ear in 1997?",
            options: ["Lennox Lewis", "Mike Tyson", "Riddick Bowe", "George Foreman"],
            correct: "Mike Tyson"
        },
        {
            question: "What is the maximum weight for a heavyweight boxer?",
            options: ["No limit", "200 lbs", "220 lbs", "210 lbs"],
            correct: "No limit"
        },
        {
            question: "Which boxer is known as 'The Gypsy King'?",
            options: ["Anthony Joshua", "Deontay Wilder", "Tyson Fury", "Joe Joyce"],
            correct: "Tyson Fury"
        },
        {
            question: "How long is each round in professional boxing?",
            options: ["2 minutes", "4 minutes", "5 minutes", "3 minutes"],
            correct: "3 minutes"
        },
        {
            question: "Which boxer was undefeated with a record of 50-0?",
            options: ["Oscar De La Hoya", "Floyd Mayweather", "Manny Pacquiao", "Sugar Ray Robinson"],
            correct: "Floyd Mayweather"
        },
        {
            question: "What is the lightest weight class in professional boxing?",
            options: ["Bantamweight", "Flyweight", "Minimumweight", "Light Flyweight"],
            correct: "Minimumweight"
        }
    ];

    const championQuestions = [
        {
            question: "In what year did Muhammad Ali defeat George Foreman in the 'Rumble in the Jungle'?",
            options: ["1976", "1971", "1974", "1978"],
            correct: "1974"
        },
        {
            question: "How many world titles did Sugar Ray Leonard win across different weight classes?",
            options: ["3", "6", "4", "5"],
            correct: "5"
        },
        {
            question: "Which boxer holds the record for the most heavyweight title defenses?",
            options: ["Muhammad Ali", "Mike Tyson", "Joe Louis", "Lennox Lewis"],
            correct: "Joe Louis"
        },
        {
            question: "What was the nickname of boxer Roberto Duran?",
            options: ["Stone Fists", "Hands of Stone", "Iron Fists", "Rock Hands"],
            correct: "Hands of Stone"
        },
        {
            question: "In which weight class did Manny Pacquiao NOT win a world title?",
            options: ["Light Welterweight", "Heavyweight", "Featherweight", "Light Middleweight"],
            correct: "Heavyweight"
        },
        {
            question: "What year did Tyson Fury first defeat Deontay Wilder?",
            options: ["2018", "2021", "2019", "2020"],
            correct: "2020"
        },
        {
            question: "Which boxer was known as 'Marvelous'?",
            options: ["Tommy Hearns", "Marvin Hagler", "Roberto Duran", "Carlos Monzon"],
            correct: "Marvin Hagler"
        },
        {
            question: "How many times did Muhammad Ali fight Joe Frazier?",
            options: ["2", "4", "1", "3"],
            correct: "3"
        },
        {
            question: "Which country does boxer Saul 'Canelo' Alvarez come from?",
            options: ["Colombia", "Argentina", "Mexico", "Cuba"],
            correct: "Mexico"
        },
        {
            question: "What was the name of the famous fight between Muhammad Ali and Joe Frazier in 1975?",
            options: ["The Fight of the Century", "The Thriller in Manila", "The Rumble in the Jungle", "The Battle of Champions"],
            correct: "The Thriller in Manila"
        }
    ];

    // Log to confirm questions loaded correctly
    console.log("Questions loaded!");
    console.log("Rookie questions: " + rookieQuestions.length);
    console.log("Contender questions: " + contenderQuestions.length);
    console.log("Champion questions: " + championQuestions.length);

    // =========================================
    // Get references to all sections
    // =========================================
    const homeSection = document.getElementById("home-section");
    const difficultySection = document.getElementById("difficulty-section");
    const quizSection = document.getElementById("quiz-section");
    const resultsSection = document.getElementById("results-section");

    // =========================================
    // Get references to all buttons
    // =========================================
    const startBtn = document.getElementById("start-btn");
    const restartBtn = document.getElementById("restart-btn");
    const difficultyBtns = document.querySelectorAll(".difficulty-btn");

    // =========================================
    // Helper function to hide all sections
    // We call this before showing a new section
    // =========================================
    function hideAllSections() {
        homeSection.classList.add("d-none");
        difficultySection.classList.add("d-none");
        quizSection.classList.add("d-none");
        resultsSection.classList.add("d-none");
    }

    // =========================================
    // When the start button is clicked,
    // hide the home section and show the difficulty section
    // =========================================
    startBtn.addEventListener("click", function() {
        hideAllSections();
        difficultySection.classList.remove("d-none");
    });

    // =========================================
    // When the restart button is clicked,
    // hide all sections and show the home section
    // =========================================
    restartBtn.addEventListener("click", function() {
        hideAllSections();
        homeSection.classList.remove("d-none");
    });

    // =========================================
    // Wire up navbar links to show correct sections
    // =========================================
    document.querySelector('a[href="#home-section"]').addEventListener("click", function(e) {
        e.preventDefault();
        hideAllSections();
        homeSection.classList.remove("d-none");
    });

    document.querySelector('a[href="#difficulty-section"]').addEventListener("click", function(e) {
        e.preventDefault();
        hideAllSections();
        difficultySection.classList.remove("d-none");
    });

    // =========================================
    // Quiz State Variables
    // These variables keep track of where we are in the quiz
    // =========================================
    let currentQuestions = [];   // the questions for the chosen difficulty
    let currentQuestionIndex = 0; // which question we are on
    let score = 0;               // the player's score
    let timerInterval = null; 
    let timeLeft = 15;            // seconds for each question

    // =========================================
    // Get references to quiz elements
    // =========================================
    const questionText = document.getElementById("question-text");
    const answerButtons = document.querySelectorAll(".answer-btn");
    const roundTracker = document.getElementById("round-tracker");
    const scoreTracker = document.getElementById("score-tracker");
    const progressBar = document.getElementById("progress-bar");

    // =========================================
    // When a difficulty button is clicked,
    // load the correct questions and start the quiz
    // =========================================
    difficultyBtns.forEach(function(button) {
        button.addEventListener("click", function() {
            let difficulty = button.getAttribute("data-difficulty");

            // Choose the correct question array based on difficulty
            if (difficulty === "rookie") {
                currentQuestions = rookieQuestions;
            } else if (difficulty === "contender") {
                currentQuestions = contenderQuestions;
            } else if (difficulty === "champion") {
                currentQuestions = championQuestions;
            }

            // Reset the quiz state
            currentQuestionIndex = 0;
            score = 0;

            // Hide difficulty section and show quiz section
            hideAllSections();
            quizSection.classList.remove("d-none");

            // Load the first question
            loadQuestion();
        });
    });

    // =========================================
    // Function to load and display the current question
    // =========================================
    function loadQuestion() {
        // Get the current question object
        let question = currentQuestions[currentQuestionIndex];

        // Update the question text
        questionText.innerHTML = question.question;

        // Update each answer button with the options
        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].innerHTML = question.options[i];
            answerButtons[i].classList.remove("correct", "incorrect");
            answerButtons[i].disabled = false;
        }

        // Update the round tracker
        roundTracker.innerHTML = "Round " + (currentQuestionIndex + 1) + " of " + currentQuestions.length;

        // Update the score tracker
        scoreTracker.innerHTML = "Score: " + score;

        // Update the progress bar
        let progress = (currentQuestionIndex / currentQuestions.length) * 100;
        progressBar.style.width = progress + "%";
        progressBar.setAttribute("aria-valuenow", progress);
        stopTimer();
        startTimer();
    }

    // =========================================
    // Add a click event to each answer button
    // =========================================
    answerButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            checkAnswer(button);
        });
    });

    // =========================================
    // Function to check if the answer is correct
    // =========================================
    function checkAnswer(selectedButton) {
        let correctAnswer = currentQuestions[currentQuestionIndex].correct;
        let selectedAnswer = selectedButton.innerHTML;

        // Disable all buttons so the user can't click again
        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].disabled = true;
        }

        stopTimer();

        // Check if the selected answer is correct
        if (selectedAnswer === correctAnswer) {
            selectedButton.classList.add("correct");
            score = score + 1;
        } else {
            selectedButton.classList.add("incorrect");

            // Show the correct answer in green
            for (let i = 0; i < answerButtons.length; i++) {
                if (answerButtons[i].innerHTML === correctAnswer) {
                    answerButtons[i].classList.add("correct");
                }
            }
        }

        // Wait 1.5 seconds then move to the next question
        setTimeout(function() {
            nextQuestion();
        }, 1500);
    }

    // =========================================
    // Function to move to the next question
    // or show results if quiz is finished
    // =========================================
    function nextQuestion() {
        currentQuestionIndex = currentQuestionIndex + 1;

        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    // =========================================
    // Function to show the results screen
    // =========================================
    function showResults() {
        hideAllSections();
        resultsSection.classList.remove("d-none");

        const finalScore = document.getElementById("final-score");
        const beltRating = document.getElementById("belt-rating");


        finalScore.innerHTML = "You scored " + score + " out of " + currentQuestions.length;

        let percentage = (score / currentQuestions.length) * 100;

        if (percentage === 100) {
            beltRating.innerHTML = "🏆 Undisputed Champion!";
        } else if (percentage >= 80) {
            beltRating.innerHTML = "🥇 World Champion!";
        } else if (percentage >= 60) {
            beltRating.innerHTML = "🥈 Contender!";
        } else if (percentage >= 40) {
            beltRating.innerHTML = "🥉 Amateur Boxer!";
        } else {
            beltRating.innerHTML = "🩹 Back to the Gym!";
        }

        // =========================================
        // High score logic
        // =========================================
        const highScoreDisplay = document.getElementById("high-score");

        // Get the saved high score from localStorage
        let savedHighScore = localStorage.getItem("boxingQuizHighScore");

        // If there is no saved high score, set it to 0
        if (savedHighScore === null) {
            savedHighScore = 0;
        }

        // If the current score is higher, save the new high score
        if (score > savedHighScore) {
            localStorage.setItem("boxingQuizHighScore", score);
            highScoreDisplay.innerHTML = "🏅 New High Score: " + score + "!";
        } else {
            highScoreDisplay.innerHTML = "High Score: " + savedHighScore;
        }

        progressBar.style.width = "100%";
        progressBar.setAttribute("aria-valuenow", 100);
    }

    // =========================================
    // Function to start the timer
    // =========================================
    function startTimer() {
        // Reset time to 15 seconds
        timeLeft = 15;
        document.getElementById("timer").innerHTML = "Time: " + timeLeft;

        // Start counting down every 1 second
        timerInterval = setInterval(function() {
            timeLeft = timeLeft - 1;
            document.getElementById("timer").innerHTML = "Time: " + timeLeft;

            // If time runs out, move to next question
            if (timeLeft <= 0) {
                clearInterval(timerInterval);

                // Disable all buttons
                for (let i = 0; i < answerButtons.length; i++) {
                    answerButtons[i].disabled = true;
                }

                // Wait 1 second then move on
                setTimeout(function() {
                    nextQuestion();
                }, 1000);
            }
        }, 1000);
    }

    // =========================================
    // Function to stop the timer
    // =========================================
    function stopTimer() {
        clearInterval(timerInterval);
    }

}); // End of DOMContentLoaded