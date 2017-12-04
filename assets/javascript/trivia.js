// Questions
var questions = [{
  question: "Which is one of Saturn's moons?",
  answers: ["Lapras", "Mimas", "Io", "Ganymede"],
  correctAnswer: "Mimas"
}, {
  question: "Which of these is not an Italian cheese?",
  answers: ["Burrata", "Taelggio", "Gruyere", "Mascarpone"],
  correctAnswer: "Gruyere"
}, {
  question: "Which company has the creator of Carl's last name?",
  answers: ["Marx", "Zeiss", "Ichan", "Ford"],
  correctAnswer: "Zeiss"
}, {
  question: "Which is a Japanese Dish?",
  answers: ["Unagi", "Salami", "Pho", "Robot Chicken"],
  correctAnswer: "Unagi"
}];


var timer;
var selection = [];
var triviaBox = $("#timerBox");
var questionCounter = 30;


function start(){
	questionCounter--;
	
	$("#counter").html(questionCounter);
	$("#startButton").remove();
	$(".gameTitle").remove();
	console.log(questionCounter);

}

function questions(){
for (var i = 0, length = questions.length; i < length; i++) {
    console.log(questions[i]);
    $("#triviaBox").append("<span>" + questions[i] + "</span>");

}



}
$(document).on("click", "#startButton", function() { 
		start();
		setInterval("start()", 1000);
		questions();
		
} );