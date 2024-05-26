let question1 = document.querySelector(".q1")
let question2 = document.querySelector(".q2")
let question3 = document.querySelector(".q3")
let question4 = document.querySelector(".q4")
let question5 = document.querySelector(".q5")
let answer1 = document.querySelector(".a1")
let answer2 = document.querySelector(".a2")
let answer3 = document.querySelector(".a3")
let answer4 = document.querySelector(".a4")
let answer5 = document.querySelector(".a5")
let path1 = document.querySelector(".pth1")
let path2 = document.querySelector(".pth2")
let path3 = document.querySelector(".pth3")
let path4 = document.querySelector(".pth4")
let path5 = document.querySelector(".pth5")

function show1() {
    answer1.classList.toggle("display-none");
    path1.classList.toggle("path")
}
function show2() {
    answer2.classList.toggle("display-none");
    path2.classList.toggle("path")
}
function show3() {
    answer3.classList.toggle("display-none");
    path3.classList.toggle("path")
}
function show4() {
    answer4.classList.toggle("display-none");
    path4.classList.toggle("path")
}
function show5() {
    answer5.classList.toggle("display-none");
    path5.classList.toggle("path")
}



question1.addEventListener("click", show1);
question2.addEventListener("click", show2);
question3.addEventListener("click", show3);
question4.addEventListener("click", show4);
question5.addEventListener("click", show5);
path1.addEventListener("click", show1)
path2.addEventListener("click", show2)
path3.addEventListener("click", show3)
path4.addEventListener("click", show4)
path5.addEventListener("click", show5)
let questions = document.querySelectorAll(".question")
