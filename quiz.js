
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz-box")
const option_list = document.querySelector(".option_list");
const timeCount = quiz_box.querySelector(".timer .timer_sec")
//
let questions = [
    {
        numb: 1,
        question: "If the perimeter of one of the faces of a cube is 40 cm, then its volume is:",
        answet: "1000cm³",
        options: ["6000cm³", "1000cm³", "2000cm³", "3000cm³"],
    },
    {
        numb: 2,
        question: "The radius of a cylinder is doubled and the height remains the same. The ratio between the volumes of the new cylinder and the original cylinder is",
        answet: "4:1",
        options: ["1:8", "3:1", "4:1", "1:2"],
    },
    {
        numb: 3,
        question: "A cuboid having surface areas of 3 adjacent faces as a, b and c has the volume:",
        answet: "(abc)^½",
        options: ["3(abc)^½", "(abc)^½", "(abc)²", "abc"],
    },
    {
        numb: 4,
        question: "A solid has __________dimensions.",
        answet: "Three",
        options: ["One", " Two", "Three", "Zero"],
    },
    {
        numb: 5,
        question: "Which of these statements do not satisfy Euclid’s axiom?",
        answet: "The whole is lesser than the part.",
        options: ["Things which are equal to the same thing are equal to one another", "If equals are added to equals, the wholes are equal.", "If equals are subtracted from equals, the remainders are equal.", "The whole is lesser than the part."],
    },
    {
        numb: 6,
        question: " The line drawn from the center of the circle to any point on its circumference is called:",
        answet: "Radius",
        options: ["Radius", "Diameter", " Sector", "Arc"],
    },
    {
        numb: 7,
        question: "The first known proof that ‘the circle is bisected by its diameter’ was given by:",
        answet: "thales",
        options: [" Pythagoras", "thales", "Euclid", "Hypathia"],
    },
    {
        numb: 8,
        question: "The number of interwoven isosceles triangles in Sriyantra (in the Atharvaveda) is",
        answet: "9",
        options: ["7", "8", "9", "10"],
    },
    {
        numb: 9,
        question: "If a line intersects two concentric circles with centre O at A, B, C and D, then:",
        answet: "AD=CD",
        options: ["AD=CD", "AB>CD", "AD<CD", "NONE OF ABOVE"],
    },
    {
        numb: 10,
        question: " Degree of the polynomial 7x5 + 8x2 – 5x + 3 is:",
        answet: "5",
        options: ["1", "4", "2", "5"],
    },
    {
        numb: 11,
        question: "If x + 1 is a factor of the polynomial 2x2 + kx, then the value of k is:",
        answet: "2",
        options: ["-3", "4", "2", "-2"],
    },
    {
        numb: 12,
        question: "The factorization of 6x2 + 11x + 3 is:",
        answet: "(3x + 1) (2x + 3)",
        options: ["(3x + 1) (2x + 3)", " (x + 1) (2x + 3)", " (x + 3) (2x + 1)", " (3x + 3) (x + 1)"],
    },
]

start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
}

let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 15;
let userScore = 0;
const next_btn = quiz_box.querySelector(".next_btn")
const result_box = document.querySelector(".result_box");
const quit_quiz = result_box.querySelector(".buttons .quit")

quit_quiz.onclick = () => {
    window.location.href = "website.html";
}

next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        next_btn.style.display = "none";
    } else {
        console.log("Questions Completed");
        showResultBox();
    }
}

function showResultBox() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text")
    scoreText.innerHTML = '<span>and sorry, You got only<p>' + userScore + '</p>out of <p>15</p></span>'
}

function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    let que_tag = "<span>" + questions[index].numb + ") " + questions[index].question + "</span>";
    let option_tag = '<div class ="option">' + questions[index].options[0] + '</div>' +
        '<div class ="option">' + questions[index].options[1] + '</div>' +
        '<div class ="option">' + questions[index].options[2] + '</div>' +
        '<div class ="option">' + questions[index].options[3] + '</div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option")
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer) {
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answet;
    let allOptions = option_list.children.length;
    if (userAns == correctAns) {
        userScore += 1;
        console.log(userScore)
        answer.classList.add("correct");
        console.log("You are wright")
    }
    else {
        answer.classList.add("incorrect");
        console.log("wrong Answer");

        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
        next_btn.style.display = "block";
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }

        if (time < 0) {
            clearInterval(counter);

            let correctAns = questions[que_count].answet;
            let allOptions = option_list.children.length;
            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correctAns) {
                    option_list.children[i].setAttribute("class", "option correct");
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
                next_btn.style.display = "block";
            }
        }

    }
}

function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Question</span>'
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}